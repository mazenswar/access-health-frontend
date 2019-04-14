import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <div className="navLink"><Link to="">Home</Link></div>
      { props.user.username || props.user['user'] ? <div className="navLink"><Link to="/doctors">Doctors</Link></div> : null }
      { props.user.username || props.user['user'] ? <div className="profilePhoto"><Link to="/profile"><img src="https://ya-webdesign.com/images/blank-profile-picture-png-8.png" className="photo"/></Link></div> : null }

      { props.user.username || props.user['user'] ? <div className="navLink"><Link onClick={props.handleLogout}>Logout</Link></div> : null }
    </nav>
  )
}

export default Navbar
