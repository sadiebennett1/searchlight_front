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
      <h1><u>Profile</u></h1>
      <h3>Username: {this.props.currentUser.username}</h3><br/><br/>
      <Link to={"/newTweet"}><h4>Submit a Tweet</h4></Link><br/><br/>
      <Link to={"/home"}><button type="button" onClick={this.handLogout}><h4>Log Out</h4></button></Link>
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
