import React, { Component } from 'react'
import './header.css';

export class Header extends Component {
  render() {
    return (
      <header id='container'>
        <div id='imageWrapper'>

          <img src='data:image/png;base64,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' height='100px' />
        </div>
        
        <div id='div'>
          <ul >
            <a href='/'><li>Home</li></a>
            <a href='/aboutUs'><li>About Us</li></a>
            <a href='#'> <li>Sign up</li></a>
            <a href='/new' id='signIn'> <li>Sign in</li></a>
          </ul>
        </div>

      </header>
    )
  }
}

export default Header
