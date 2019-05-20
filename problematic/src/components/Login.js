import React from 'react';
import { connect } from 'react-redux'
import { onLogin} from '../Redux/Actions/authActions.js'

export default class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
    signUp: false,
    error: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.placeholder]: e.target.value})
  }

  handleLogin = event => {
    event.preventDefault()
    this.props.onLogin(this.state)
    this.resetState()
  }

  resetState = () => {
    this.setState({
      username: '',
      password: '',
      signUp: false
    })
  }

  handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  this.setState({
    currentUser: localStorage.getItem('user'),
    userId: localStorage.getItem('userId'),
    error: ''
  })
}

  handleClick = () => this.setState({signUp: !this.state.signUp})

  handleSignUp = (e) => {
    e.preventDefault()
    console.log('signed up')
    fetch("http://localhost:3005/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`},
      body: JSON.stringify({
        user: this.state
      })
    })
    .then(r => r.json())
    .then(userJSON => {
      console.log('Login response: ', userJSON)
      if (userJSON.jwt) {
        localStorage.setItem('token', userJSON.jwt)
        localStorage.setItem('user', userJSON.user.username)
        localStorage.setItem('userId', userJSON.user.id)
        localStorage.setItem('conversations', userJSON.user.conversations_objs)
        console.log(userJSON.user.conversations_objs)
        this.setState({
          currentUser: userJSON.user.username,
          error: '',
          conversations: userJSON.user.conversations_objs
        })
        this.props.fetchConversations()
      }else{
        this.props.setStateFromChild({error: userJSON.error})
      }
    })
    this.resetState()
  }

  render(){
    return(
      <>
      {(localStorage.token) ?
      <>
      </>
      :
      <>
      {this.state.signUp
        ?
        <form onSubmit={this.handleSignUp}>
          <input type='text' placeholder="username" value={this.state.username} onChange={this.handleChange}></input>
          <input type='password' placeholder="password" value={this.state.password} onChange={this.handleChange}></input>
          <input type='submit' value='Sign Up'></input>
        </form>
        :
        <form onSubmit={this.handleLogin}>
          <input type='text' placeholder="username" value={this.state.username} onChange={this.handleChange}></input>
          <input type='password' placeholder="password" value={this.state.password} onChange={this.handleChange}></input>
          <input type='submit' value='Log In'></input>
        </form>
      }
          <button onClick={this.handleClick}>
            {this.state.signUp ? 'Log In' : 'Sign Up'}
          </button>
          </>
      }
      <h3>{localStorage.getItem('user')}</h3>
      </>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);


const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => dispatch(onLogin())
  }
}
