import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import '../../styles/scss/Animations.scss'

const Logo = require('../../assets/WearingNerdGlasses.png')

export default class NavBar extends Component {
   render() {
      return (
         <div id="header" className="header">
            <div className="max-width">
               <div className="branding-wrapper">
                  <div className="mobile-top-header">
                     <div><i className="fas fa-bars"></i></div>
                     <div className="branding">
                        <img className="fire-logo wobble" src={Logo} alt="Logo" />
                        <div className="title">PROJECT FIREFLY</div>
                     </div>
                     <div><i className="fas fa-shopping-cart"></i></div>
                  </div>
                  <div className="search-wrap">
                     <div className="search-input-wrap">
                        <input className="search-input" placeholder="Search all the things..." type="text" />
                        <div className="search-button">
                           <i className="fas fa-search"></i>
                        </div>
                     </div>
                     <div className="user-name">
                        User Placeholder
               </div>
                  </div>
               </div>
            </div>
            <div className="max-width">
               <ul>
                  <li>
                     <Link className="nav-link fa fa-home shake" to="/">&nbsp;&nbsp;Home <span className="sr-only1"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-user" to="/profile">&nbsp;&nbsp;Profile<span className="sr-only2"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-dashboard" to="/hub">&nbsp;&nbsp;Hub<span className="sr-only3"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-credit-card" to="/pricingplan">&nbsp;&nbsp;Payment Plans<span className="sr-only4"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa-sign-in" to="/signin">&nbsp;&nbsp;Log In<span className="sr-only5"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/slogin">&nbsp;&nbsp;Sign Up<span className="sr-only6"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-support" to="/support">&nbsp;&nbsp;Support<span className="sr-only6"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-support" to="/checkoutform">&nbsp;&nbsp;Checkout<span className="sr-only6"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-support" to="/checkoutform">&nbsp;&nbsp;Stripe<span className="sr-only6"></span></Link>
                  </li>
               </ul>
            </div>
         </div>
      )
   }
}











