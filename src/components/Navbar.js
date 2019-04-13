import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <Link to="">Home</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="">Profile</Link>

      { props.user ? <Link>Logout</Link> : null }
    </nav>
  )
}

export default Navbar
