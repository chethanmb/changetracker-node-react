import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ChangeTableRow from './ChangeTableRow';


export default class ChangeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      change: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/change/')
      .then(res => {
        this.setState({
          change: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.change.map((res, i) => {
      return <ChangeTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Change ID</th>
            <th>ChangeTask ID</th>
            <th>Change Title</th>
            <th>Account</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}