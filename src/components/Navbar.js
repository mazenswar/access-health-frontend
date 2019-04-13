import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  console.log(props.user['user'])
  return (
    <nav>
      <Link to="">Home</Link>
      { props.user.username || props.user['user'] ? <Link to="/doctors">Doctors</Link> : null }
      { props.user.username || props.user['user'] ? <Link to="/profile">Profile</Link> : null }

      { props.user.username || props.user['user'] ? <Link onClick={props.handleLogout}>Logout</Link> : null }
    </nav>
  )
}

export default Navbar
