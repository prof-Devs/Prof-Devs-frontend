import React, { Component, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './header.css';
import { useHistory, Link ,Redirect} from 'react-router-dom';
import logo from '../Header/logo_academy.PNG';

function Header(props) {
  const AuthObject = useContext(AuthContext);
  // const history = useHistory();

  //  const handlerClick = () => history.push(`/`);

  function redirect() {
    <Redirect to='/'/>
  } 
  return (
    <header id='container'>
      <div id='imageWrapper'>

        <a id='logoa' href='/'><img height='60px' src={logo} /></a>
      </div>

      <div id='div'>
        {!props.logged ?
          <>
            <ul>
              <Link className='HeaderLink' to='/'>Home</Link>
              <Link className='HeaderLink' to='/aboutUs'>About Us</Link>
              <Link className='HeaderLink' to='/signup'>Sign up</Link>
              <Link className='signIn'  to='/signin'>Sign in</Link>

            </ul>
          </>
          :
          <>
            <ul>
              <Link className='HeaderLink' to='/'>Home</Link>
              <Link className='HeaderLink' to="/mycourses/098098678" > Courses</Link>
              <Link className='HeaderLink' to='/aboutUs'>About Us</Link>
              <button id='signOut' onClick={AuthObject.signOut}>Sign Out</button>
            </ul>
          </>

        }
      </div>



    </header>
  )
}

export default Header;

