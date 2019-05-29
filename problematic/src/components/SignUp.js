import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUp} from '../Redux/Actions/authActions'
import {withRouter} from 'react-router-dom'

class SignUp extends Component {

  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state)
    this.props.history.push('/api/v1/profile')
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>


        <input name='first_name' placeholder='First name' value={this.state.first_name} onChange={this.handleChange}/>
        <br /><br></br>


        <input name='last_name' placeholder='Last name' value={this.state.last_name} onChange={this.handleChange}/>
        <br /><br></br>


        <input name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
        <br /><br></br>

        <input name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
        <br /><br></br>

        <input type='submit' />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: userInfo => dispatch(signUp(userInfo))
})

export default connect(null, mapDispatchToProps)(withRouter(SignUp))
