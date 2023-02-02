// Write your JS code here
import 'react-router-dom'

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const option = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch('https://apis.ccbp.in/login', option)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onLoginSuccess()
    } else {
      // this.onLoginSuccess()
      this.onLoginFailure(data.error_msg)
    }
  }

  onLoginSuccess = () => {
    this.setState({showErrorMsg: false})
    const {history} = this.props
    console.log('change page')
    console.log(history)
    history.replace('/')
  }

  onLoginFailure = msg => {
    this.setState({showErrorMsg: true, errorMsg: msg})
  }

  updateUsername = event => {
    const username = event.target.value
    this.setState({username})
  }

  updatePassword = event => {
    const password = event.target.value
    this.setState({password})
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state

    const errorMsgE = showErrorMsg && errorMsg

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form>
            <label htmlFor="a">USERNAME</label>
            <input
              id="a"
              placeholder="Username"
              type="text"
              value={username}
              onChange={this.updateUsername}
            />

            <br />
            <label htmlFor="b">PASSWORD</label>
            <input
              id="b"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.updatePassword}
            />
            <br />
            <button type="submit" onClick={this.submitForm}>
              login
            </button>
            <p> {errorMsgE}</p>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
