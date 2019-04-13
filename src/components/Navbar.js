import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <Link to="">Home</Link>
      { props.user.username ? <Link to="/doctors">Doctors</Link> : null }
      <Link to="">Profile</Link>

      { props.user.username	 ? <Link onClick={props.handleLogout}>Logout</Link> : null }
    </nav>
  )
}

export default Navbar
