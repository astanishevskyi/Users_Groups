import React, { Component } from 'react';
import axios from 'axios'
import GroupForm from './GroupForm'

class GroupsData extends Component {
    constructor() {
        super();
        this.state = {
            groupsData: []
        }
    }

    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/groups/').then((response) => {
          this.setState({groupsData : response.data.data});
          console.log(this.state.groupsData)
      })
    }

    render() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.groupsData.map(c =>
                        <tr key={c.pk}>
                            <td>{c.pk}</td>
                            <td>{c.name}</td>
                            <td>{c.description}</td>
                            <td>
                                <GroupForm />
                            </td>
                        </tr>
                    )}
                    </tbody>
            </table>
        </div>

    );
  }
}

export default GroupsData;
