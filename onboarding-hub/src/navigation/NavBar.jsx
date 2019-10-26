import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import '../styles/scss/Nav.scss'
import logo from '../assets/flogo.png'

export default class NavBar extends Component {
	componentDidMount() {
		$(document).ready(function() {
			$('.mobile-button a').click(function(e) {
				$(this)
					.parent()
					.parent()
					.toggleClass('open')
				$(this).html($(this).html() === 'Close Menu' ? 'Menu' : 'Close Menu')
				e.preventDefault()
			})
		})
	}

	render() {
		return (
			<div>
				<header className='header'>
					<div className='container'>
						<img
							class='site-title'
							src={logo}
							alt='Firefly with Lambda hat'
						></img>
						<span class='site-tagline'>Because Children Are Our Future!</span>
					</div>
				</header>
				<nav className='main-nav'>
					<div className='container'>
						<ul>
							<li>
								<Link className='nav-link' to='/' class='mobile-button'>
									Sign Up
								</Link>
							</li>
							{/* <a href='/'>Slogin</a> */}

							<li>
								<Link className='nav-link' to='/Signin'>
									Sign In
								</Link>
								{/* <a href='/'>Sign In</a> */}
							</li>
							<li>
								<Link className='nav-link' to='/Logout'>
									Log Out
								</Link>
								{/* <a href='/'>Log Out</a> */}
							</li>
							<li>
								<Link className='nav-link' to='/Hub'>
									Hub
								</Link>
								{/* <a href='/'>Hub</a> */}
							</li>
							<li>
								<Link className='nav-link' to='/Onboarding'>
									Onboarding
								</Link>
								{/* <a href='/'>Onboarding</a> */}
							</li>
							<li>
								<Link className='nav-link' to='/Game'>
									Game
								</Link>
								{/* <a href='/'>Game</a> */}
							</li>
							<li>
								<Link className='nav-link' to='/ContactUs'>
									Contact Us
								</Link>
								{/* <a href='/'>Contact Us</a> */}
							</li>
							<li>
								<Link
									className='nav-link'
									to='https://condescending-archimedes-71e778.netlify.com'
								>
									PornHub
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
