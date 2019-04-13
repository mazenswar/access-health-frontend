import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './Home'
import Landing from './Landing'
import DoctorContainer from '../containers/DoctorContainer'


const RouterComp = (props) => {
  return(
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/doctors' component={DoctorContainer} />
      <Route path='/' render={(renderProps) => {
        return <Landing handleLogin={props.handleLogin} handleSignup={props.handleSignup} />
      }} />
    </Switch>
  )
}

export default RouterComp
