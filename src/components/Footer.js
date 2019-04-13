import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    console.log(props);
  return (
    <footer>
     <Link to="/doctors">Doctors</Link>
     <Link to="/profile">Profile</Link>
     <Link to="">FAQs</Link>
     <Link to="">About</Link>
     <Link to="">Resources</Link>
     <Link to="">Contact Us</Link>
     <Link to="">Resources</Link>
     <p>This app was produced by Five Amigos Development Consortium, trademark LLC worldwide international 365</p>
    </footer>
  )
}

export default Footer
