import React, { Component } from 'react'
import './NavBar.css'

const Logo = require('../../assets/WearingNerdGlasses.png')

export default class NavBar extends Component {
<<<<<<< HEAD
   render() {
      return (
         <div id="header" class="header">
            <div class="max-width">
               <div class="branding-wrapper">
                  <div class="mobile-top-header">
                     <div><i class="fas fa-bars"></i></div>
                     <div class="branding">
                        <img class="fire-logo" src={Logo} alt="Logo" />
                        <div class="title">PROJECT FIREFLY</div>
                     </div>
                     <div><i class="fas fa-shopping-cart"></i></div>
                  </div>
                  <div class="search-wrap">
                     <div class="search-input-wrap">
                        <input placeholder="Search all the things..." type="text" />
                        <div class="search-button">
                           <i class="fas fa-search"></i>
                        </div>
                     </div>
                     <div class="user-name">
                        Andrew Dillon
               </div>
                  </div>
               </div>
            </div>
            <div class="max-width">
               <ul>
                  <li>Home</li>
                  <li>Profile</li>
                  <li>Hub</li>
                  <li>Payment Plans</li>
                  <li>Log In</li>
                  <li>Sign Up</li>

               </ul>
            </div>
         </div>
      )
   }
=======
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
								<Link className='nav-link' to='/profile'>
									Nothing
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
>>>>>>> 80f14be611c1a91baa2d8991efa6566f3cd1b5e7
}










