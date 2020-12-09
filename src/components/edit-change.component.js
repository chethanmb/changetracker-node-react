import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditChange extends Component {

  constructor(props) {
    super(props)

    this.onChangeChangeID = this.onChangeChangeID.bind(this);
    this.onChangeChangeTaskID = this.onChangeChangeTaskID.bind(this);
    this.onChangeChangeTitle = this.onChangeChangeTitle.bind(this);
    this.onChangeAccount = this.onChangeAccount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      change_id: '',
      changetask_id: '',
      change_title: '',
      account: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/change/edit-change/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          change_id: res.data.change_id,
          changetask_id: res.data.changetask_id,
          change_title: res.data.change_title,
          account: res.data.account
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    axios.put('http://localhost:4000/change/update-change/' + this.props.match.params.id, changeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Change successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Change List 
    this.props.history.push('/change-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
         <Form.Group controlId="Name">
          <Form.Label>Change ID</Form.Label>
          <Form.Control type="text" value={this.state.change_id} onChange={this.onChangeChangeID} />
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

        <Button variant="danger"   className = "btn-pos-middle" type="submit">        
          Update
        </Button>
      </Form>
    </div>);
  }
}
