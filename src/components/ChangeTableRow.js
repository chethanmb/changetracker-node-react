import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ChangeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteChange = this.deleteChange.bind(this);
    }

    deleteChange() {
        axios.delete('http://localhost:4000/change/delete-change/' + this.props.obj._id)
            .then((res) => {
                console.log('Change successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.change_id}</td>
                <td>{this.props.obj.changetask_id}</td>
                <td>{this.props.obj.change_title}</td>
                <td>{this.props.obj.account}</td>
                <td>
                    <Link className="edit-link" to={"/edit-change/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteChange} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}