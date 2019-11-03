import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './NavBar.css'
import '../../styles/scss/Animations.scss'

const Logo = require('../../assets/WearingNerdGlasses.png')

export default class NavBar extends Component {
   render() {
      return (
         <nav id="navigation">
            <a href="/" class="logo">Project FireFly<span>&copy;</span></a>
            <span class="fire-logo"><img src={Logo} alt="Firefly Logo" style={{ width: '100px', marginTop: '-15px' }}></img></span>
            <ul class="links">
               <li><a class="fa fa-home fa-2x" style={{ color: 'white' }} href="/">&nbsp;</a></li>
               <li class="dropdown"><a href="/" class="trigger-drop">Links<i class="arrow"></i></a>
                  <ul class="drop">
                     <li><a href="/contact">Contact</a></li>
                     <li><a href="/blob">Empty</a></li>
                     <li><a href="/sempty">Empty</a></li>
                     <li><a href="/uei">Empty</a></li>
                  </ul>
               </li>
               <li class="dropdown"><a href="/" class="trigger-drop">Accounts<i class="arrow"></i></a>
                  <ul class="drop">
                     <li><a href="/signin">Sign&nbsp;In</a></li>
                     <li><a href="/slogin">Sign&nbsp;Up</a></li>
                     <li><a href="/profile">Profile</a></li>
                     <li><a href="/signout">Sign&nbsp;Out</a></li>
                  </ul>
               </li>
            </ul>
         </nav>
      )
   }
}











