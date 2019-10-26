import React, { Component } from 'react'
import $ from 'jquery'
import '../styles/scss/Nav.scss'
import logo from '../images/flogo.png'

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
							<li class='mobile-button'>
								<a href='/'>Sign In</a>
							</li>
							<li>
								<a href='/'>Sign Up</a>
							</li>
							<li>
								<a href='/'>Log Out</a>
							</li>
							<li>
								<a href='/'>Dashboard</a>
							</li>
							<li>
								<a href='/'>Contact</a>
							</li>
							<li>
								<a href='/'>Methods</a>
							</li>
							<li>
								<a href='/'>Contacy Us</a>
							</li>
							<li>
								<a href='/'>Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
