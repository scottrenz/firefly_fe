import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './NavBar.css'
import '../../styles/scss/Animations.scss'

const Logo = require('../../assets/WearingNerdGlasses.png')

export default class NavBar extends Component {
   render() {
      return (
         <nav id="navigation">
            <a href="/" className="logo">Project FireFly<span>&copy;</span></a>
            <span className="fire-logo"><img src={Logo} alt="Firefly Logo" style={{ width: '100px', marginTop: '-15px' }}></img></span>
            <ul className="links">
               <li><a className="fa fa-home fa-2x" style={{ color: 'white' }} href="/">&nbsp;</a></li>
               <li className="dropdown"><a href="/" className="trigger-drop">Links<i className="arrow"></i></a>
                  <ul className="drop">
                     <li><a href="/contact">Contact</a></li>
                     <li><a href="/blob">Empty</a></li>
                     <li><a href="/sempty">Empty</a></li>
                     <li><a href="/uei">Empty</a></li>
                  </ul>
               </li>
               <li className="dropdown"><a href="/" className="trigger-drop">Accounts<i className="arrow"></i></a>
                  <ul className="drop">
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











