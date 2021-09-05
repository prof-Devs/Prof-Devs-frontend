import React, { Component } from 'react'
import './header.css';
import logo from '../Header/logo_academy.PNG'
export class Header extends Component {
  render() {
    return (
      <header id='container'>
        <div id='imageWrapper'>
         <a id='logoa' href='/'><img height='60px' src={logo} /></a>
        </div>
        <div id='div'>
          <ul >
            <a href='/'><li>Home</li></a>
            <a href='/aboutUs'><li>About Us</li></a>
            <a href='/signup'> <li>Sign up</li></a>
            <a href='/signin' id='signIn'> <li>Sign in</li></a>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
