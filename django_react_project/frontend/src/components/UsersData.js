import React, { Component } from 'react';
import axios from 'axios'
import UserForm from './UserForm'

class UsersData extends Component {
    constructor() {
        super();
        this.state = {
            usersData: []
        }
    }

    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/users/').then((response) => {
          this.setState({usersData : response.data.data});
          console.log(this.state.usersData)
      })
    }

    render() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Created</th>
                    <th scope="col">Group</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.usersData.map(c =>
                        <tr key={c.pk}>
                            <td>{c.pk}</td>
                            <td>{c.username}</td>
                            <td>{c.created}</td>
                            <td>{c.group}</td>
                            <td>
                                <UserForm />
                            </td>
                        </tr>
                    )}
                    </tbody>
            </table>
        </div>

    );
  }
}

export default UsersData;
