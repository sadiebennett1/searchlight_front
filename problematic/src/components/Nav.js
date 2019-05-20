import React from 'react'
import {Link} from 'react-router-dom'
import userIcon from '../assets/userIcon.png';

const Nav = () => {
  return (
    <ul className="NavBar">
      <li><Link to={"/home"}>Home</Link></li>
      <li><Link to={"/api/v1/users/profile"}><img className="userIcon"src={userIcon} alt=".."/></Link></li>
      <li><Link to={"/login"}>Log In</Link></li>
    </ul>
  )
}

export default Nav;
