import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { signUpWithGoogle } from '../../firebase/firebase.utils.js'
import { doFacebookSignUp } from '../../firebase/firebase.utils.js'

export default class Slogin extends Component {
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
			<div id='login-box'>
				<div className='left'>
					<h1 className='signup'>SIGN UP</h1>
					<form onSubmit={this.onSubmit}>
						{/* <input type='text' name='username' placeholder='Username' /> */}
						<input
							type='email'
							name='email'
							placeholder='E-mail'
							value={this.state.credentials.email}
							onChange={this.handleChange}
							required
						/>
						<p className='promise'>
							We will never share your information with anyone!
                    </p>

						<input
							type='password'
							name='password'
							placeholder='Password'
							value={this.state.credentials.password}
							onChange={this.handleChange}
							required
						/>

						<input
							type='password'
							name='passwordCheck'
							placeholder='Retype password'
							value={this.state.credentials.passwordCheck}
							onChange={this.handleChange}
							required
						/>

						<button className='push_button green'
							type='submit'
							name='signup_submit'
							value='Sign me up'
						>
							Sign me up</button>
					</form>
					<p className='log-footer'>
						Already have an account ? <a href='./Signin'>Click Here</a>
					</p>
				</div>

				<div className='right flex'>
					<div className='test'>
						<button onClick={doFacebookSignUp} className='social-signin facebook'>
							LOG IN WITH FACEBOOK
						</button>
						<button onClick={signUpWithGoogle} className='social-signin google'>
							LOG IN WITH GOOGLE
						</button>
					</div>
					<span className='loginwith'>{/* <br /> */}</span>
				</div>
				<div className='or'>OR</div>

			</div>
		)
	}
}