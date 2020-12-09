import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateChange extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeChangeID = this.onChangeChangeID.bind(this);
    this.onChangeChangeTaskID = this.onChangeChangeTaskID.bind(this);
    this.onChangeChangeTitle = this.onChangeChangeTitle.bind(this);
     this.onChangeAccount = this.onChangeAccount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      change_id: '',
      changetask_id: '',
      change_title: ''
    }
  }

  onChangeChangeID(e) {
    this.setState({ change_id: e.target.value })
  }

  onChangeChangeTaskID(e) {
    this.setState({ changetask_id: e.target.value })
  }

  onChangeChangeTitle(e) {
    this.setState({ change_title: e.target.value })
  }

  onChangeAccount(e) {
    this.setState({ account: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const changeObject = {
      change_id: this.state.change_id,
      changetask_id: this.state.changetask_id,
      change_title: this.state.change_title,
      account: this.state.account
    };

    axios.post('http://localhost:4000/change/create-change', changeObject)
      .then(res => console.log(res.data));

    this.setState({
      change_id: '',
      changetask_id: '',
      change_title: '',
      account: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Change ID</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeChangeID} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>ChangeTask ID</Form.Label>
          <Form.Control type="text" value={this.state.changetask_id} onChange={this.onChangeChangeTaskID} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Change Title</Form.Label>
          <Form.Control type="text" value={this.state.change_title} onChange={this.onChangeChangeTitle} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Account</Form.Label>
          <Form.Control type="text" value={this.state.account} onChange={this.onChangeAccount} />
        </Form.Group>

        <Button variant="outline-primary"  block   type="submit">
          Create
        </Button>
      </Form>
    </div>);
  }
}
