import React, { Component } from 'react'

export default class ProfileContainer extends Component {

  state = {
  	text: ''
  }

  handleChange = (e) => {
  	this.setState({ text: e.target.value })
  }

  handleSubmit = (event) => {
  	event.preventDefault()

  	fetch('http://localhost:4000/users/' + this.props.user.user.id, {
  	  method: 'PATCH',
  	  headers: {
  	  	'Content-Type': 'application/json',
  	  	'accept': 'application/json'
  	  },
  	  body: JSON.stringify({user_info: this.state.text})
  	})
  	  .then(r => r.json())
  	  .then(console.log(this.props.user.user))
  }

  render(){
  	console.log()
  	return(
  	  <div>
  	  	<form onSubmit={(event) => this.handleSubmit(event)}>
  	  	  <h3>Please describe the mental issues you need help with.</h3>
  	  	  <textarea value={this.state.text} onChange={this.handleChange} />
  	  	  <input type="submit" />
   	  	</form>
   	  	{ this.props.user.user.user_info ? 
  	  	  	<React.Fragment>
	  	  	  	<h3>Your previous written entry</h3> 
	  	  	  	<p>{this.state.text}</p>
	  	  	</React.Fragment>
  	  	  	: null }
  	  </div>
  	)	
  }
}