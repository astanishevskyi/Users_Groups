import React, { Component } from 'react';
import '../styles/UserGroupForm.css'
import axios from 'axios'
import PropTypes from 'prop-types'

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            group: ''
        }
    }
    render() {
    return (
      <div>
          <a className="button" href={'#userPopUp' + (this.props.mode === 'update' ? this.props.existingUsername: '')}>{this.props.buttonName}</a>

          <div id={'userPopUp' + (this.props.mode === 'update' ? this.props.existingUsername: '')} className="overlay">
              <div className="popup">
                  <h2>Here i am</h2>
                  <a className="close" href="#">&times;</a>
                  <div className="content">
                      <form onSubmit={this.handleSubmit}>
                          <input required className="form-control form-control-lg" type="text" placeholder="username" value={this.state.username} onChange={this.handleChangeUsername} />
                          <input required className="form-control form-control-lg" type="text" placeholder="group id" value={this.state.group} onChange={this.handleChangeGroup} />
                          <p>{this.props.mode}</p>
                          <button type="submit">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    );
  }

  handleSubmit = (e) =>{
      e.preventDefault()
      if (this.props.mode === 'insert'){
          axios.post('http://127.0.0.1:8000/api/users/', {
              username: this.state.username,
              group: this.state.group
          }).then(() => {
            this.props.action()
          })
      } else {
          axios.put(`http://127.0.0.1:8000/api/users/${this.props.user_id}`, {
          username: this.state.username,
          group: this.state.group
            }).then(() => {
            this.props.action()
            })
      }
  }

  componentDidMount(props) {
        if (this.props.mode === 'update') {
            console.log(1)
            this.setState({username: this.props.existingUsername})
            this.setState({group: this.props.existingGroup})
            console.log(this.props.existingUsername)
        } else {
            console.log(2)


        }
  }

  handleUpdate = (e) =>{
      e.preventDefault()
      console.log(this.state.username)
      console.log(this.state.group)
      axios.put(`http://127.0.0.1:8000/api/users/${this.props.user_id}`, {
          username: this.state.username,
          group: this.state.group
      }).then(() => {
        this.props.action()
      })
  }

  handleChangeUsername = (e) =>{
    this.setState({username: e.target.value})
  }

  handleChangeGroup = (e) =>{
    this.setState({group: e.target.value})
  }

}

// UserForm.propTypes = {
//     existingUsername: PropTypes.string
// }

export default UserForm;