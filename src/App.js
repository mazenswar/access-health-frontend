import React, { Component } from 'react';
import RouterComp from './components/RouterComp'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import Error from './components/Error'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import './App.css';

class App extends Component {

  state = {
    currentUser: {},
  }

  componentDidMount() {

    let token = localStorage.getItem('token')
    if(token) {
      fetch('http://localhost:4000/current_user', { headers: { Authorization: `Bearer ${token}` } })
      .then( r => r.json() )
      .then( data => this.setState({ currentUser: data }))
      this.props.history.push('/home')
    } else {
      this.props.history.push('/')
    }
  }

  handleSignup = (event, userData) => {
    event.preventDefault()
    const configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(userData)
    }

    fetch('http://localhost:4000/users', configObj)
    .then( r => r.json() )
    .then( data => {

      localStorage.setItem('token', data.jwt)
      console.log(data)
      this.setState({
        currentUser: data
      })
    } )

    this.props.history.push('./home')
  }

  handleLogin = (event, userData) => {
    event.preventDefault()
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData)
    }
    fetch('http://localhost:4000/auth', configObj)
    .then( r => r.json())
    .then( data => {
      if(data.jwt) {
        this.setState({ currentUser: data }, () => console.log(data))
        localStorage.setItem('token', data.jwt)
        this.props.history.push('./home')
      }
    })

  }

  handleLogout = () => {
    this.setState({ currentUser: {} })
    localStorage.removeItem("token")
    this.props.history.push('/')
  }


  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout} user={this.state.currentUser}/>
        <RouterComp handleLogin={this.handleLogin} handleSignup={this.handleSignup}/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
