import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { onLogin} from '../Redux/Actions/authActions.js'

class Login extends React.Component {

  state = {
    username: "",
    password: "",
    signUp: false,
    error: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogin = event => {
    event.preventDefault()
    this.props.onLogin(this.state)
    this.resetState()
    this.props.history.push('/api/v1/users/profile')
  }

  resetState = () => {
    this.setState({
      username: '',
      password: '',
      signUp: false
    })
  }

//   handleLogout = () => {
//   localStorage.removeItem('token')
//   localStorage.removeItem('user')
//   this.setState({
//     currentUser: localStorage.getItem('user'),
//     userId: localStorage.getItem('userId'),
//     error: ''
//   })
// }
//
//   handleClick = () => this.setState({signUp: !this.state.signUp})
//
//   handleSignUp = (e) => {
//     e.preventDefault()
//     console.log('signed up')
//     fetch("http://localhost:3005/api/v1/users", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`},
//       body: JSON.stringify({
//         user: this.state
//       })
//     })
//     .then(r => r.json())
//     .then(userJSON => {
//       console.log('Login response: ', userJSON)
//       if (userJSON.jwt) {
//         localStorage.setItem('token', userJSON.jwt)
//         localStorage.setItem('user', userJSON.user.username)
//         localStorage.setItem('userId', userJSON.user.id)
//         localStorage.setItem('conversations', userJSON.user.conversations_objs)
//         console.log(userJSON.user.conversations_objs)
//         this.setState({
//           currentUser: userJSON.user.username,
//           error: '',
//           conversations: userJSON.user.conversations_objs
//         })
//         this.props.fetchConversations()
//       }else{
//         this.props.setStateFromChild({error: userJSON.error})
//       }
//     })
//     this.resetState()
//   }

  render(){
    return(
      <div>
          <form onSubmit={(event) => {this.handleLogin(event)}}>
          <br/>
          <input placeholder='Enter your username' onChange={this.handleChange} type="textfield" name="username" value={this.state.username}></input>
          <br/>
        <br/>
          <input placeholder='Enter your password' onChange={this.handleChange} type="textfield" name="password" value={this.state.password}></input>
          <br/><br/>
          <input type="submit" value="Submit"></input>
          </form><br/>
          Don't have an account? Sign up <Link to={"/register"}>here!</Link>
      </div>
    )
  }


}


const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    tweets: state.tweets,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (userInfo) => dispatch(onLogin(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
