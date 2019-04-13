import React from 'react'


export default class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

 handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <React.Fragment>
        <section className="signup-section">
          <div className="signup-inner">
            <h1 className="signup-title">Login</h1>
            <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
              <input name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" className="form"/>
              <br />
              <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" className="form"/>
              <br />
              <input type='submit' />
            </form>
          </div>
        </section>
      </ React.Fragment>
    )
  }
}
