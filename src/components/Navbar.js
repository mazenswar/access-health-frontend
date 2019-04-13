import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav>
      <div className="navLink">
        <Link to="">Home</Link>
      </div>
      <div className="navLink">
      <Link to="/doctors">Doctors</Link>
      </div>

      <div className="navLink">
      { props.user ? <Link>Logout</Link> : null }
      </div>

      <div className="profilePhoto">
      <Link to="" ><img src="https://ya-webdesign.com/images/blank-profile-picture-png-8.png" className="photo"/></Link>
      </div>
    </nav>
  )
}

export default Navbar
