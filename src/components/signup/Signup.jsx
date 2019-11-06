import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { signUpThroughFirebase } from '../../firebase/firebase.utils.js'
import './Signup.scss'

export default class Signup extends Component {
	state = {
		credentials: {
			email: '',
			password: '',
			passwordCheck: ''
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
		const user = { email: this.state.credentials.email, password: this.state.credentials.password }
		// console.log('submit', user)
		if (this.state.credentials.password === this.state.credentials.passwordCheck) {
			if (this.state.credentials.password.length > 5) {
				console.log("password", this.state.credentials.password)
				axios
					.post('https://infinite-meadow-87721.herokuapp.com/auth/register', user)
					.then(res => {
						console.log(res)
						Swal.fire({
							title: "Registration Confirmed",
							text: "Congrats! You have successfully registered",
							type: "success",
							showCancelButton: false,
							confirmButtonColor: "#4A9123",
							confirmButtonText: "Enjoy your stay!",
							timer: 3000
						})
						this.props.history.push('/')
					})
					.catch(err => {
						console.log(err)
					})
			} else {
				Swal.fire("Oops!", "Password must be greater than five characters")
			}
		} else {
			console.log('x')
		}
	}

	render() {
		return (
			<div className='sign-up-page-container'>
				<h1 className='sign-up-header'>SIGN UP</h1>

				<div className='sign-up-forms'>
					<form onSubmit={this.onSubmit} className='sign-up-email'>
						<label className='form-input-label'>
							EMAIL
							<input
								type='email'
								name='email'
								// placeholder='E-mail'
								value={this.state.credentials.email}
								onChange={this.handleChange}
								required
								className='form-input'
							/>
						</label>

						<label className='form-input-label'>
							PASSWORD
							<input
								type='password'
								name='password'
								// placeholder='Password'
								value={this.state.credentials.password}
								onChange={this.handleChange}
								required
								className='form-input'
							/>
						</label>

						<label className='form-input-label'>
							CONFIRM PASSWORD
							<input
								type='password'
								name='passwordCheck'
								// placeholder='Retype password'
								value={this.state.credentials.passwordCheck}
								onChange={this.handleChange}
								required
								className='form-input'
							/>
						</label>

						<button
							className='push_button green'
							type='submit'
							name='signup_submit'
						>
							SIGN UP
						</button>

						<a href='./Signin'>I already have an account</a>
					</form>

					<h2>OR</h2>

					<div className='sign-up-automatic'>
						<div className='firebase-buttons'>
							<button onClick={() => signUpThroughFirebase('google', this.props.history)} className='social-signin google'>
								SIGN IN WITH GOOGLE
							</button>

							<button onClick={() => signUpThroughFirebase('facebook', this.props.history)} className='social-signin facebook'>
								SIGN IN WITH FACEBOOK
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}