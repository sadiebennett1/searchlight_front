import React from 'react'
import {Link} from 'react-router-dom'
import userIcon from '../assets/userIcon.png';
import logo from '../assets/spotty.png'
import { connect } from 'react-redux'


const Nav = (props) => {
  return (

    <ul className="NavBar">
      <li className="navlink"><img className="logo" src={logo} alt=""/></li>
      <li className="navlink"><Link to={"/home"}>Home</Link></li>
      <li className="navlink"><Link to={"/about"}>About</Link></li>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {(props.loggedIn) ?   <li className="navlink"><Link to={"/api/v1/users/profile"}><img className="userIcon"src={userIcon} alt=""/></Link></li> : <li className="navlink"><Link to={"/login"}>Log In</Link></li>}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}
export default connect(mapStateToProps)(Nav)
