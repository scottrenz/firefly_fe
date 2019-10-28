import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import '../../styles/scss/Nav.scss'
import logo from '../../assets/flogo.png'

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
						<div class='firefly'></div>
						<div class='firefly2'></div>
						<div class='firefly3'></div>
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
								<Link className='nav-link' to='/'>
									Sign Up
								</Link>
							</li>
							<li>
								<Link className='nav-link' to='/Signin'>
									Sign In
								</Link>
							</li>
							<li>
								<Link className='nav-link' to='/Logout'>
									Log Out
								</Link>
							</li>
							<li>
								<Link className='nav-link' to='/Hub'>
									Hub
								</Link>
							</li>
							<li>
								<Link className='nav-link' to='/Onboarding'>
									Onboarding
								</Link>
							</li>
							<li>
								<Link className='nav-link' to='/pricingplan'>
									Pricing
								</Link>
							</li>
							<li>
								<Link className='nav-link' to='/contactform'>
									Contact Us
								</Link>
							</li>
							<li>
								<Link className='nav-link' to='/'>
									Nothing
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
