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
			.post('https://infinite-meadow-87721.herokuapp.com/auth/login', this.state.credentials)
			.then(res => {
				console.log(res)
				this.props.history.push('/hub')
			})
			.catch(err => {
				console.log(err)
			})
	}
	componentDidMount() { }

	render() {
		return (
			<div id='login-box'>
				<div className='left1'>
					<h1 className='signup'>SIGN IN</h1>
					<form onSubmit={this.onSubmit}>
					<div>
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
					</div>
					<input
						className='signup-submit1'
						type='submit'
						name='signup_submit'
						value='Sign me in'
					/>	
					</form>				
					<p className='log-footer1'>
					No Account<Link to='/'>{'\u00A0'} No Problem</Link>
					</p>
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
			</div>
		)
	}
}
