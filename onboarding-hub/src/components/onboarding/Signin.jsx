import React, { Component } from 'react'

import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import { doFacebookSignIn } from '../../firebase/firebase.utils.js'

import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/scss/Slogin.scss'

export default class Signin extends Component {
	state = {
		credentials: {
			email: '',
			password: ''
		}
	}

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		})
		console.log(this.state.credentials)
	}

	onSubmit = e => {
		e.preventDefault()
		console.log('submit', this.state.credentials)

		axios
			.post('#', this.state.credentials)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
	}
	componentDidMount() {}

	render() {
		return (
			<div id='login-box'>
				<div class='left'>
					<form onSubmit={this.onSubmit}>
						<h1>Sign up</h1>

						{/* <input type='text' name='username' placeholder='Username' /> */}
						<input
							type='email'
							name='email'
							placeholder='E-mail'
							value={this.state.credentials.email}
							onChange={this.handleChange}
						/>

						<input
							type='password'
							name='password'
							placeholder='Password'
							value={this.state.credentials.password}
							onChange={this.handleChange}
						/>
						<input type='submit' name='signup_submit' value='Sign me up' />
					</form>
				</div>

				<div class='right flex'>
					<div class='test'>
						<button onClick={doFacebookSignIn} class='social-signin facebook'>
							Log in with facebook
						</button>
						<button onClick={signInWithGoogle} class='social-signin google'>
							Log in with Google+
						</button>
					</div>
					<span class='loginwith'>
						Sign in with
						<br />
						social network
					</span>
				</div>
				<div class='or'>OR</div>
			</div>
		)
	}
}
