import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
import axios from 'axios';
const API = 'https://profdev-academy.herokuapp.com';
export const AuthContext = React.createContext();

export default function Auth(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  // const handlerClick = () => history.push(`/`);

  useEffect(() => {
    let token = cookie.load('auth');
    validateToken(token);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function validateToken(token) {

    if (token !== 'undefined' && token !== 'null') {
      let user = jwt.decode(token);
      setLoginState(true, token, user);
    } else {
      setLoginState(false, null, user);
      console.log('Validation Token Error');
    }
  };

  function setLoginState(loggedIn, token, user) {
    cookie.save('auth', token);
    setToken(token);
    setUser({ user });
    setLoggedIn(loggedIn);
  }

  async function signIn(email, password) {
    try {
      const response = await superagent
        .post(`${API}/signin/user`)
        .set('authorization',
          `Basic ${base64.encode(`${email}:${password}`)}`
        );
      validateToken(response.body.token);
    } catch (error) {
      console.error('Login Error', error.message);
      alert('Incorrect Email Or Password');
    }
  };

  async function signUp(age, firstName, gender, lastName, password, email) {
    try {
      let response = await axios
        .post(`${API}/signup/student`, {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          age: age,
        });
      validateToken(response.data.token);
    } catch (error) {
      console.error('Sign Up Error', error.message);
    }
  };

  function signOut() {
    setLoginState(false, null, {});
    window.location.reload();

  }

  const state = {
    loggedIn,
    user,
    setLoggedIn,
    setUser,
    signIn,
    signUp,
    signOut,
    token
    
  };
  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  )
}


