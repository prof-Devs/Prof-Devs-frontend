import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  useLocation,
  Switch,
  Route,

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

export default function App() {
  
  const { pathname } = useLocation();
  console.log(pathname)

  
  const CourseObject = useContext(CourseContextProv);
  const AuthObject = useContext(AuthContext);
  console.log('log ll show', CourseObject.showWhiteBoard);
  console.log('logIn', AuthObject.loggedIn);
  


  console.log('AuthObject.loggedIn', AuthObject.loggedIn);

  return (

    <>

      <Header logged={AuthObject.loggedIn} />
      <br />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>


        <Route exact path="/signup">
          <Signup logged={AuthObject.loggedIn} />
        </Route>


        <Route exact path="/signin">
          <Signin logged={AuthObject.loggedIn} />
        </Route>


        <Route exact path="/aboutUs">
          <AboutUs/>
        </Route>


        <Route path="/mycourses/:id" >
          <MyCourse/>
        </Route>

        <Route path="/coursepage/:courseId">
          <CoursePage/>
        </Route>


        <Route path="/assignment/:courseId/:assignmentId">
          <Assignment/>
        </Route>


        <Route exact path='/board/:courseId'>
          <Board/>
        </Route>


        <Route exact path="/quiz/:courseId/:quizId">
          <Quiz/>
        </Route>


        <Route path='*'>
          <NotFound />
        </Route>

      </Switch>
      {(pathname[1] !== 'b' && pathname[2] !== 'o' && pathname[5] !== 'd') &&
        <Footer />
      }



    </>
  )
}



    //  <Quiz/> 
    //   <Assignments/>
    //     <Quizes/>
    //     <Marks/>




