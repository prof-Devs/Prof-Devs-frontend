import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
// import CourseContext from './context/CourseContext';
import Course from './components/creating/Course'

export default function App() {
  const CourseObject = useContext(CourseContextProv)
  console.log('log ll show',CourseObject.showWhiteBoard); 

  return (

    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
          {/* <MyCourse /> */}
        </Route>

        <Route exact path="/signin">
          <Signin />
          <Course/>
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>
        {/* <CourseContext> */}

        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>

          <Route exact path="/mycourses">
            <MyCourse />
          </Route>

          <Route exact path="/coursepage">
            <CoursePage />
          </Route>
          {/* {CourseObject.showAssignment && */}
            <Route exact path="/assignment/:courseId">
              <Assignment />
            </Route>
          {/* } */}
          
          {CourseObject.showWhiteBoard &&
            <Route exact path='/board/:courseId'>
              <Board />
            </Route>
          }
        
           {CourseObject.showQuiz &&
            <Route exact path="/quiz/:courseId">
          
              <Quiz />
            </Route>
          }
        {/* </CourseContext> */}
      </Switch>
      <Footer />

    </Router>
  )
}



    //  <Quiz/> 
    //   <Assignments/>
    //     <Quizes/>
    //     <Marks/>




