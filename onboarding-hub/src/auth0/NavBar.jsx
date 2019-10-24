import React, { Component } from 'react'
import $ from 'jquery'
import '../styles/nav.scss'
import Button from '../components/GoogleButton/Button.jsx'

export default class NavBar extends Component {
	componentDidMount() {
		$(document).ready(function () {
			$('.mobile-button a').click(function (e) {
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
						<h1 class='site-title'>Super Cool Web App!</h1>
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
								<Button />
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
