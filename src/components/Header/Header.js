import React, { Component, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './header.css';
// import {useHistory } from 'react-router-dom';
import logo from '../Header/logo_academy.PNG';

function Header() {
  const AuthObject = useContext(AuthContext);
  // const history = useHistory();

//  const handlerClick = () => history.push(`/`);

  return (
    <header id='container'>
      <div id='imageWrapper'>

        <a id='logoa' href='/'><img height='60px' src={logo} /></a>
      </div>

      <div id='div'>
        <ul >
          <a href='/'><li>Home</li></a>
          <a href='/aboutUs'><li>About Us</li></a>

          {!AuthObject.loggedIn ?
            <>
              <a href='/signup'> <li>Sign up</li></a>
              <a href='/signin' id='signIn'> <li>Sign in</li></a>
            </>
            :
            <>
              <a href='/mycourses' > <li>Courses</li></a>
           <button onClick={AuthObject.signOut}>Sign Out</button>
            </>
          
          }

        </ul>
      </div>

    </header>
  )
}

export default Header;

