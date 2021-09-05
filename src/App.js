import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Signin from './components/signin/Signin';
import Signup from "./components/signup/Signup";
import MyCourse from './components/my_course/MyCourse';
import CoursePage from './components/CoursePage/CoursePage';
import Home from "./components/Home/Home";
import Assignment from "./components/Assignment/Assignment";
import Board from "./components/Board/Board";
import AboutUs from './components/aboutus/AboutUs';
import Quiz from "./components/Quiz/Quiz";
import { CourseContextProv } from './context/CourseContext';
import { AuthContext } from './context/authContext';
import NotFound from './components/notfound/NotFound';
// import CourseContext from './context/CourseContext';
import Course from './components/creating/Course'

export default function App() {

  const CourseObject = useContext(CourseContextProv);
  const AuthObject = useContext(AuthContext);
  console.log('log ll show', CourseObject.showWhiteBoard);
  console.log('logIn', AuthObject.loggedIn);



  console.log('AuthObject.loggedIn', AuthObject.loggedIn);

  return (

    <>

      <Header logged={AuthObject.loggedIn}/>
      <br />
   
      <Switch>


        <Route exact path="/">
          <Home />
          {/* <MyCourse /> */}
        </Route>


        <Route exact path="/signup">
          <Signup logged={AuthObject.loggedIn} />
        </Route>


        <Route exact path="/signin">
          <Signin logged={AuthObject.loggedIn}/>
        </Route>


        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>



        <Route path="/mycourses/:id" >
          <MyCourse logged={AuthObject.loggedIn} />
        </Route>

        <Route path="/coursepage/:courseId">
          <CoursePage  logged={AuthObject.loggedIn} />
        </Route>


        <Route path="/assignment/:courseId/:assignmentId">
          <Assignment logged={AuthObject.loggedIn} />
        </Route>


          <Route exact path='/board/:courseId'>
            <Board logged={AuthObject.loggedIn} />
          </Route>
        
       
          <Route exact path="/quiz/:courseId/:quizId">
            <Quiz logged={AuthObject.loggedIn} />
          </Route>
        

        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
      <Footer />

    </>
  )
}



    //  <Quiz/> 
    //   <Assignments/>
    //     <Quizes/>
    //     <Marks/>




