import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { signInThroughFirebase } from '../../firebase/firebase.utils.js'

import axios from 'axios'

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
				Swal.fire({
					title: "Sign In Successfull",
					text: "Congrats! You you can spell your name.",
					type: "success",
					showCancelButton: false,
					confirmButtonColor: "#4A9123",
					confirmButtonText: "Have Fun!",
					timer: 3000
				})
				this.props.history.push('/')
				this.props.history.push('/hub')
			})
			.catch(err => {
				console.log(err)
			})
	}
	componentDidMount() { }

	render() {
		return (
			<div className="container">
				<div id='login-box1'>
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
							<button className='push_button1 green1'
								type='submit'
								name='signup_submit'
								value='Sign me up'
							>
								Sign me in</button>
						</form>
						<p className='log-footer1'>
							No Account&nbsp;<Link to='/'>No Problem</Link>
						</p>
					</div>
					<div className='right1 flex'>
						<div className='test'>
							<button onClick={() => signInThroughFirebase('facebook', this.props.history)} className='social-signin facebook'>
								LOG IN WITH FACEBOOK
						</button>
							<button onClick={() => signInThroughFirebase('google', this.props.history)} className='social-signin google'>
								LOG IN WITH GOOGLE
						</button>
						</div>
					</div>
					<div className='or'>OR</div>
				</div>
			</div>
		)
	}
}
