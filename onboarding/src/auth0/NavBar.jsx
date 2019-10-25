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
				<header class='header'>
					<div class='container'>
						<img
							class='firefly-logo'
							src='../assets/images/firefly_logo.128ecac1.PNG'
							alt='firefly'
						></img>
						<h1 class='site-title'>FireFly</h1>
						<span class='site-tagline'>Because Andy made this!</span>
					</div>
				</header>
				<nav class='main-nav'>
					<div class='container'>
						<ul>
							<li class='mobile-button'>
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
