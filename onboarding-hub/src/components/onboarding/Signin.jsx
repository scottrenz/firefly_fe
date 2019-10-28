import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import { doFacebookSignIn } from '../../firebase/firebase.utils.js'
import './onboarding-css/Signin.css'

import axios from 'axios'

//import 'bootstrap/dist/css/bootstrap.css'

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
					<h1>SIGN IN</h1>
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
					<input
						className='signup-submit'
						type='submit'
						name='signup_submit'
						value='Sign me up'
					/>
				</div>
				<div class='right1 flex'>
					<div class='test'>
						<button onClick={doFacebookSignIn} class='social-signin facebook'>
							LOG IN WITH FACEBOOK
						</button>
						<button onClick={signInWithGoogle} class='social-signin google'>
							LOG IN WITH GOOGLE
						</button>
					</div>
				</div>
				<div class='or'>OR</div>
				<p className='log-footer1'>
					No Account<Link to='/'>{'\u00A0'} No Problem</Link>
				</p>
			</div>
		)
	}
}
