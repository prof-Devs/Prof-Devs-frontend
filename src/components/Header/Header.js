import React, { Component, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './header.css';
import { useHistory, Link, Redirect } from 'react-router-dom';
import logo from '../Header/logo_academy.PNG';

function Header(props) {
  const AuthObject = useContext(AuthContext);
 
  let userId;
if(props.logged){

  // let pageUser = AuthObject.allUser.filter((item, idx) => {
  //   return item.email === AuthObject.user.user.email;
  // });
  // console.log(pageUser,pageUser[0]);
  //  userId = pageUser[0]._id;
}

  return (
    <header id='container'>
      <div id='imageWrapper'>

        <a id='logoa' href='/'><img height='60px' src={logo} alt='a'/></a>
      </div>

      <div id='div'>
        {!props.logged ?
          <>
            <ul>
              <Link className='HeaderLink' to='/'>Home</Link>
              <Link className='HeaderLink' to='/aboutUs'>About Us</Link>
              <Link className='HeaderLink' to='/signup'>Sign up</Link>
              <Link className='signIn' to='/signin'>Sign in</Link>

            </ul>
          </>
          :
          <>
            <ul>
              <Link className='HeaderLink' to='/'>Home</Link>
              <Link className='HeaderLink' to={`/mycourses`} > Courses</Link>
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

