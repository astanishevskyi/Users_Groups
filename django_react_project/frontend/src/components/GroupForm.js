import React, { Component } from 'react';
import '../styles/UserGroupForm.css'

class GroupForm extends Component {
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
          <a className="button" href="#groupPopUp">Add Group</a>

          <div id="groupPopUp" className="overlay">
              <div className="popup">
                  <h2>Here i am</h2>
                  <a className="close" href="#">&times;</a>
                  <div className="content">
                      <form onSubmit={this.handleSubmit}>
                          <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" value={this.state.name} onChange={this.handleChangeName} />
                          <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" value={this.state.description} onChange={this.handleChangeDescription} />
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
      console.log(this.state.name)
      console.log(this.state.description)
  }

  handleChangeName = (e) =>{
    this.setState({name: e.target.value})
  }

  handleChangeDescription = (e) =>{
    this.setState({description: e.target.value})
  }

}

export default GroupForm;