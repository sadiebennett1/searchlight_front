import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../Redux/Actions/authActions.js'


class UserProfile extends Component {

  handLogout = () => {
    localStorage.removeItem('token')
    this.props.logOut()
  }
  render(){
  return (
    <div>
      <h1>User Profile</h1>
      Username: {this.props.currentUser.username}<br/><br/>
      <Link to={"/newTweet"}>Submit a Tweet</Link><br/><br/>
      <Link to={"/home"}><button type="button" onClick={this.handLogout}>Log Out</button></Link>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
