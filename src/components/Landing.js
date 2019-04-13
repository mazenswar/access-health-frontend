import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Landing = (props) => {
  return(
    <React.Fragment>
      <SignUp handleSignup={props.handleSignup} />
      <Login handleLogin={props.handleLogin} />
    </ React.Fragment>
  )
}

export default Landing
