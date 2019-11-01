import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

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
                        <img className="fire-logo" src={Logo} alt="Logo" />
                        <div className="title">PROJECT FIREFLY</div>
                     </div>
                     <div><i className="fas fa-shopping-cart"></i></div>
                  </div>
                  <div className="search-wrap">
                     <div className="search-input-wrap">
                        <input placeholder="Search all the things..." type="text" />
                        <div className="search-button">
                           <i className="fas fa-search"></i>
                        </div>
                     </div>
                     <div className="user-name">
                        Andrew Dillon
               </div>
                  </div>
               </div>
            </div>
            <div className="max-width">
               <ul>
                  <li>
                     <Link className="nav-link fa fa-home" to="/">Home <span className="sr-only1"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-user" to="/profile">Profile<span className="sr-only2"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-dashboard" to="/hub">Hub<span className="sr-only3"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-credit-card" to="/pricingplan">Payment Plans<span className="sr-only4"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa-sign-in" to="/signin">Log In<span className="sr-only5"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/slogin">Sign Up<span className="sr-only6"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-support" to="/support">Support<span className="sr-only6"></span></Link>
                  </li>
                  <li>
                     <Link className="nav-link fa fa-support" to="/checkoutform">Checkout<span className="sr-only6"></span></Link>
                  </li>
               </ul>
            </div>
         </div>
      )
   }
}











