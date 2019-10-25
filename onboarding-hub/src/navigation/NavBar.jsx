import React, { Component } from 'react'
import $ from 'jquery'
import '../styles/scss/Nav.scss'

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
							className='firefly-logo'
							src='../assets/images/firefly_logo.128ecac1.PNG'
							alt='firefly'
						/>
						<h1 className='site-title'>FireFly</h1>
						<span className='site-tagline'>Because Andy made this!</span>
					</div>
				</header>
				<nav className='main-nav'>
					<div className='container'>
						<ul>
							<li className='mobile-button'>
								<a href='/'>Menu</a>
							</li>
							<li>
								<a href='/'>About</a>
							</li>
							<li>
								<a href='/'>Methods</a>
							</li>
							<li>
								<a href='/'>Results</a>
							</li>
							<li>
								<a href='/'>Contact</a>
							</li>
							<li>
								<a href='/'>Methods</a>
							</li>
							<li>
								<a href='/'>Results</a>
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
