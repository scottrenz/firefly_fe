import React, { Component } from 'react'
import axios from 'axios'
// import { axiosWithAuth } from '../../routes/axiosWithAuth'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'
import { doFacebookSignIn } from '../../firebase/firebase.utils.js'

//import 'bootstrap/dist/css/bootstrap.css'
import './onboarding-css/Slogin.css'

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
		console.log('submit', user)
		if (this.state.credentials.password === this.state.credentials.passwordCheck) {
			console.log(this.state.credentials.password)
			axios
				.post('https://infinite-meadow-87721.herokuapp.com/auth/register', user)
				.then(res => {
					console.log(res)
					this.props.history.push('/hub')
				})
				.catch(err => {
					console.log(err)
				})
		} else {
			console.log('f')
		}
	}
	componentDidMount() { }

	render() {
		return (
			<div id='login-box'>
				<div class='left'>
					<h1 className='signup'>SIGN UP</h1>
					<form onSubmit={this.onSubmit}>
						{/* <input type='text' name='username' placeholder='Username' /> */}
						<input
							type='email'
							name='email'
							placeholder='E-mail'
							value={this.state.credentials.email}
							onChange={this.handleChange}
						/>
						<p className='promise'>
							We will never share your credentials with anyone!
                    </p>

						<input
							type='password'
							name='password'
							placeholder='Password'
							value={this.state.credentials.password}
							onChange={this.handleChange}
						/>

						<input
							type='password'
							name='passwordCheck'
							placeholder='Retype password'
							value={this.state.credentials.passwordCheck}
							onChange={this.handleChange}
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

				<div class='right flex'>
					<div class='test'>
						<button onClick={doFacebookSignIn} class='social-signin facebook'>
							LOG IN WITH FACEBOOK
                        </button>
						<button onClick={signInWithGoogle} class='social-signin google'>
							LOG IN WITH GOOGLE
                        </button>
					</div>
					<span class='loginwith'>{/* <br /> */}</span>
				</div>
				<div class='or'>OR</div>

			</div>
		)
	}
}