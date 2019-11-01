import React, { Component } from 'react'
import './NavBar.css'

const Logo = require('../../assets/WearingNerdGlasses.png')

export default class NavBar extends Component {
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
}










