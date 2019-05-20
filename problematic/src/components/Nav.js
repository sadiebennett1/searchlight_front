import React from 'react'
import {Link} from 'react-router-dom'
import userIcon from '../assets/userIcon.png';
import { connect } from 'react-redux'


const Nav = (props) => {
  return (

    <ul className="NavBar">
      <li><Link to={"/home"}>Home</Link></li>
      {(props.loggedIn) ?   <li><Link to={"/api/v1/users/profile"}><img className="userIcon"src={userIcon} alt=""/></Link></li> : <li><Link to={"/login"}>Log In</Link></li>}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}
export default connect(mapStateToProps)(Nav)
