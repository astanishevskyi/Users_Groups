import React, { Component } from 'react';
import '../styles/UserForm.css'

class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            group: ''
        }
    }
    render() {
    return (
      <div>
          <a className="button" href="#userPopUp">Add User</a>

          <div id="userPopUp" className="overlay">
              <div className="popup">
                  <h2>Here i am</h2>
                  <a className="close" href="#">&times;</a>
                  <div className="content">
                      <form onSubmit={this.handleSubmit}>
                          <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" value={this.state.username} onChange={this.handleChangeUsername} />
                          <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" value={this.state.group} onChange={this.handleChangeGroup} />
                          <button type="submit">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state.username)
      console.log(this.state.group)
  }

  handleChangeUsername = (e) =>{
    this.setState({username: e.target.value})
  }

  handleChangeGroup = (e) =>{
    this.setState({group: e.target.value})
  }

}

export default UserForm;