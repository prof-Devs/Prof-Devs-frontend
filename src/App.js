import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
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
// import CourseContext from './context/CourseContext';

export default function App() {
  const CourseObject = useContext(CourseContextProv);
  const AuthObject = useContext(AuthContext);
  console.log('log ll show', CourseObject.showWhiteBoard);
  console.log('logIn', AuthObject.loggedIn);
  // const [log, setlog] = useState(false);
  // useEffect(() => {
  //   setlog(AuthObject.loggedIn);
  // }, [AuthObject.loggedIn]);

  // console.log('log', log);

  return (

    <Router>

      <Header />

      <Switch>

          {/* {!AuthObject.loggedIn && */}
        <Route exact path="/">
            <Home />
        </Route>
          {/* } */}

        {!AuthObject.loggedIn &&
          <>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
          </>
        }

        <Route exact path="/aboutUs">
          <AboutUs />
        </Route>


        <Route exact path="/mycourses" component={AuthObject.loggedIn && MyCourse} >

        </Route>

        <Route path="/coursepage">
          {AuthObject.loggedIn ? (
            <CoursePage />
          )
            // <Redirect to="/coursepage" render={()=>(<CoursePage />)}/>
            : 
            <Link to={{ pathname: '/' }}/>
            // (
              // <Home />
            // )
            // <Redirect to="/" render={()=>(<Home/>)}/>
          }
        </Route>


        <Route exact path="/assignment/:courseId"> component={AuthObject.loggedIn && <Assignment />}
        </Route>

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

      </Switch>
      <Footer />

    </Router>
  )
}



    //  <Quiz/> 
    //   <Assignments/>
    //     <Quizes/>
    //     <Marks/>




