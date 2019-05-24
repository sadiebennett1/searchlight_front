import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const UserProfile = (props) => {
  return (
    <div>
      <h1>User Profile</h1>
      Username: {props.currentUser.username}<br/><br/>
      <Link to={"/newTweet"}>Submit a Tweet</Link>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps)(UserProfile);
