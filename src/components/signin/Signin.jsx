import React, { Component } from 'react'
// import Swal from 'sweetalert2'
import { signInThroughFirebase } from '../../firebase/firebase.utils.js'
import axios from 'axios'
import './Signin.scss'

// check to see if email is valid
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
	let valid = true;
	// check to see if any errors exist, otherwise form is invalid
	Object.values(errors).forEach(error => {
		error.length > 0 && (valid = false)
	});
	return valid;
}

export default class Signin extends Component {
	state = {
		credentials: {
			email: '',
			password: ''
		},
		errors: {
			email: '',
			password: ''
		}
	}

	handleChange = e => {
		let { name, value } = e.target;
		let errors = this.state.errors;

		// handle input validation here
		switch(name) {
			case 'email' :
				if (!value.length) errors.email = 'email is a required field';
				else if (validEmailRegex.test(value) === false) errors.email = 'email must be a valid email';
				else errors.email = '';
				break;
			case 'password' :
				if (!value.length) errors.password = 'password is a required field';
				else if (value.length < 8) errors.password = 'password must be at least 8 characters';
				else errors.password = '';
				break;
			default :
				break;
		}

		this.setState({
			errors,
			credentials: {
				...this.state.credentials,
				[name]: value
			}
		})
		console.log(this.state.credentials)
	}

	onSubmit = e => {
		e.preventDefault()
		const { email, password } = this.state.credentials
		const user = { email: this.state.credentials.email, password: this.state.credentials.password }

		//if no error exists, make the request to the backend
		if (email && password && validateForm(this.state.errors)) {
			axios
			.post('https://infinite-meadow-87721.herokuapp.com/auth/login', user)
			.then(res => {
				this.props.history.push('/hub')
				// console.log(res)
				// Swal.fire({
				// 	title: "Sign In Successfull",
				// 	text: "Congrats! You you can spell your name.",
				// 	type: "success",
				// 	showCancelButton: false,
				// 	confirmButtonColor: "#4A9123",
				// 	confirmButtonText: "Have Fun!",
				// 	timer: 3000
				// })
				// this.props.history.push('/')
			})
			.catch(err => console.log(err))
		} else {
			console.log('x')
		}
	}

	render() {
		return (
			<div className='sign-in-page-container'>
				<h1 className='sign-in-header'>SIGN UP</h1>

				<div className='sign-in-forms'>
					<form onSubmit={this.onSubmit} className='sign-in-email' noValidate>
						<label className='form-input-label'>
							EMAIL
							<input
								type='email'
								name='email'
								// placeholder='E-mail'
								value={this.state.credentials.email}
								onChange={this.handleChange}
								className='form-input'
								required
							/>
						</label>
						<p className='form-input-error'>{this.state.errors.email}</p>

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
						<p className='form-input-error'>{this.state.errors.password}</p>

						<div className='persistent-login'>
							<input type='checkbox' name='persist-login' id='perLog' />
							<label for='perLog' className='persistent-login-text'>Keep me signed in</label>
						</div>

						<button
							className='sign-in-button'
							type='submit'
							name='signin_submit'
						>
							SIGN IN
						</button>

						<a href='./Signin' className='sign-up-redirect'>Need an account? Sign up now!</a>
					</form>

					<h2 className='sign-in-or'>OR</h2>

					<div className='sign-in-automatic'>
						<div className='firebase-buttons'>
							<button onClick={() => signInThroughFirebase('google', this.props.history)} className='social-sign-in google'>
								SIGN IN WITH GOOGLE
							</button>

							<button onClick={() => signInThroughFirebase('facebook', this.props.history)} className='social-sign-in facebook'>
								SIGN IN WITH FACEBOOK
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
