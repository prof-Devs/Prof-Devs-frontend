import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";

const API = 'https://profdev-academy.herokuapp.com';
export const AuthContext = React.createContext();
export default function Auth(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [allUser, setAllUser] = useState([]);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState('');
  const [pageUser, setPageUser] = useState([])
  let history = useHistory();

  const { pathname } = useLocation();
  // const handlerClick = () => history.push(`/`);
  useEffect(() => {
    let token = cookie.load('auth');
    validateToken(token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const arr = ['/', '/signup', '/signin', '/aboutUs']
  useEffect(() => {


    const token = cookie.load('auth');
    if (arr.includes(pathname)) return


    if (!token || token == 'null') {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
 
  }, [user])


  function validateToken(token) {
    if (token !== 'undefined' && token !== 'null') {
      let user = jwt.decode(token);
      setLoginState(true, token, user);
    } else {
      setLoginState(false, null, user);
    }
  };
  async function setLoginState(loggedIn, token, user) {

    cookie.save('auth', token, { path: '/' });
    setToken(token);
    setUser({ user });
    setLoggedIn(loggedIn);
    if(token){
     

      const allData = await axios.get('https://profdev-academy.herokuapp.com/getUsers');
      const user1 = allData.data.filter((user2, idx) => {
        return (user2.email === user.email);
      });
      console.log(123,user1)
      if (user1[0]) {
        setRole(user1[0].role);
        setPageUser(user1[0]);
      }

     
    }
  }
  async function signIn(email, password) {
    const allData = await axios.get('https://profdev-academy.herokuapp.com/getUsers');
   
    const user = allData.data.filter((user, idx) => {
      return (user.email === email);
    });
    if (user[0]) {
      setRole(user[0].role);
      if (user[0].role === 'user') {
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
      } else if (user[0].role === 'editor' || user[0].role === 'admin') {
        try {
          const response = await superagent
            .post(`${API}/signin/teacher`)
            .set('authorization',
              `Basic ${base64.encode(`${email}:${password}`)}`
            );
          validateToken(response.body.token);
        } catch (error) {
          console.error('Login Error', error.message);
          alert('Incorrect Email Or Password');
        }
      }
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
    history.push('/');
  }
  const state = {
    loggedIn,
    user,
    setLoggedIn,
    setUser,
    signIn,
    signUp,
    signOut,
    allUser,
    role,
    token,
    pageUser
  };
  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  )
}