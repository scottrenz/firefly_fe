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
                     <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/profile">Profile<span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/hub">Hub<span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/pricingplan">Payment Plans<span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/signin">Log In<span className="sr-only">(current)</span></Link>
                  </li>
                  <li>
                     <Link className="nav-link" to="/slogin">Sign Up<span className="sr-only">(current)</span></Link>
                  </li>
               </ul>
            </div>
         </div>
      )
   }
}











