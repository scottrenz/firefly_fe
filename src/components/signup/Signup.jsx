import React, { Component } from 'react'
import axios from 'axios'
// import Swal from 'sweetalert2'
import { signUpThroughFirebase } from '../../firebase/firebase.utils.js'
import './Signup.scss'

import passwordReveal from '../../assets/eye-solid.svg'
import google from '../../assets/google.svg';
import facebook from '../../assets/facebook.svg';

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
	
export default class Signup extends Component {
	state = {
		credentials: {
			email: '',
			password: '',
			passwordCheck: '',
			tosCheck: false
		},
		errors: {
			email: '',
			password: '',
			passwordCheck: '',
			tosCheck: ''
		},
		passwordReveal: false,
		passwordConfirmReveal: false
	}

	toggleReveal = (e, which) => {
		if(which) this.setState({...this.state, passwordConfirmReveal: !this.state.passwordConfirmReveal});
		else this.setState({ ...this.state, passwordReveal: !this.state.passwordReveal});
	}

	handleChange = e => {
		let { name, value, checked } = e.target;
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
			case 'passwordCheck' :
				if (this.state.credentials.password !== value) errors.passwordCheck = 'passwords do not match';
				else errors.passwordCheck = '';
				break;
			case 'tosCheck' :
				if (!checked) {
					value = false;
					errors.tosCheck = 'terms and conditions must be accepted to continue';
				} else {
					value = true;
					errors.tosCheck = '';
				};
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
		const { email, password, passwordCheck, tosCheck } = this.state.credentials
		const user = { email: this.state.credentials.email, password: this.state.credentials.password }
		//if no error exists, make the request to the backend
		if (email && password && passwordCheck && tosCheck && validateForm(this.state.errors)) {
			axios
			.post('https://infinite-meadow-87721.herokuapp.com/auth/register', user)
			.then(res => {
				this.props.history.push('/stripe')
			})
			.catch(err => console.log(err))
		} else {
			console.log('x')
		}
		// console.log('submit', user)
		// if (this.state.credentials.password === this.state.credentials.passwordCheck) {
		// 	if (this.state.credentials.password.length > 8) {
		// 		console.log("password", this.state.credentials.password)
		// 		axios
		// 			.post('https://infinite-meadow-87721.herokuapp.com/auth/register', user)
		// 			.then(res => {
		// 				console.log(res)
		// 				Swal.fire({
		// 					title: "Registration Confirmed",
		// 					text: "Congrats! You have successfully registered",
		// 					type: "success",
		// 					showCancelButton: false,
		// 					confirmButtonColor: "#4A9123",
		// 					confirmButtonText: "Enjoy your stay!",
		// 					timer: 3000
		// 				})
		// 				this.props.history.push('/')
		// 			})
		// 			.catch(err => {
		// 				console.log(err)
		// 			})
		// 	} else {
		// 		Swal.fire("Oops!", "Password must be greater than five characters")
		// 	}
		// } else {
		// 	console.log('x')
		// }
	}

	render() {
		return (
			<div className='sign-up-page-container'>
				<h1 className='sign-up-header'>SIGN UP</h1>

				<div className='sign-up-forms'>
					<form onSubmit={this.onSubmit} className='sign-up-email' noValidate>
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

							<div className='password-container'>
								<input
									type={this.state.passwordReveal ? 'text' : 'password'}
									name='password'
									// placeholder='Password'
									value={this.state.credentials.password}
									onChange={this.handleChange}
									required
									className='form-input'
								/>
								<img className='password-toggle' src={passwordReveal} alt='toggle password' onClick={(e) => this.toggleReveal(e, 0)} />
							</div>
						</label>
						<p className='form-input-error'>{this.state.errors.password}</p>

						<label className='form-input-label'>
							CONFIRM PASSWORD
							<div className='password-container'>
								<input
									type={this.state.passwordConfirmReveal ? 'text' : 'password'}
									name='passwordCheck'
									// placeholder='Retype password'
									value={this.state.credentials.passwordCheck}
									onChange={this.handleChange}
									required
									className='form-input'
								/>
								<img className='password-toggle' src={passwordReveal} alt='toggle password' onClick={(e) => this.toggleReveal(e, 1)} />
							</div>
						</label>
						<p className='form-input-error'>{this.state.errors.passwordCheck}</p>

						<div className='tos'>
							<input type='checkbox' name='tosCheck' id='tosCheck' value={this.state.credentials.tosCheck} onChange={this.handleChange}/>
							<label for='tosCheck' className='tos-text'>I agree to the <a href='google.com' className='tos-text-link'>Terms and Conditions</a></label>
						</div>
						<p className='form-input-error'>{this.state.errors.tosCheck}</p>

						<button
							className='sign-up-button'
							type='submit'
							name='signup_submit'
						>
							SIGN UP
						</button>

						<a href='./Signin' className='sign-in-redirect'>I already have an account</a>
					</form>

					<h2 className='sign-up-or'>OR</h2>

					<div className='sign-up-automatic'>
						<div className='firebase-buttons'>
							<button onClick={() => signUpThroughFirebase('google', this.props.history)} className='social-sign-in google'>
								<img className='button-img' src={google} alt='sign up with google' /> SIGN IN WITH GOOGLE
							</button>

							<button onClick={() => signUpThroughFirebase('facebook', this.props.history)} className='social-sign-in facebook'>
								<img className='button-img' src={facebook} alt='sign up with facebook' /> SIGN IN WITH FACEBOOK
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}