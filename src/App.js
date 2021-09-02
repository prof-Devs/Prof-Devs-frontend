import React, { Component } from 'react';
// import MyCourse from '../src/components/my_course/MyCourse';
// import Assignment from './components/Assignment/Assignment';
// import Assignments from './components/droplist/Assignments'
// import Marks from "./components/droplist/Marks";
// import Quizes from "./components/droplist/Quizes";
// import Quiz from './components/Quiz/Quiz';


// import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom";
// // import Signup from './components/Signup';
// import Signin from './components/Signin';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// // import Chat from './components/Chat';
// import Board from './components/Board/Board';
// import Chat from './components/chat/Chat';




export class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showCourse: false,
  //     showForm: true,
  //     showChat: false,
  //     showWhitboard: false,
  //   }
  // }

  // studentSignIn = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     showChat: true,
  //     showForm: false,
  //     showCourse: true,
  //     courseTesting: true
  //   })
  // }
  // showWhitboard = () => {
  //   this.setState({
  //     showWhitboard: true
  //   })
  // }



  render() {
    // console.log(this.state.showForm);
    return (
      // <Router>
      //   <Header />
      //   <Switch>
      //     <Route exact path="/">
      //       <Home />
      //     </Route>
      //     <Route exact path="/signin">
      //       {this.state.showForm &&
      //         <Signin
      //           studentSignIn={this.studentSignIn}
      //           showCourse={this.state.showCourse}
      //           showForm={this.state.showForm}
      //           showChat={this.state.showChat}
      //         />
      //       }
      //       {!this.state.showForm &&
      //         <Redirect to={
      //           {
      //             pathname: "/course",
      //           }
      //         }
      //         />
      //       }
      //     </Route>
      //     <Route exact path="/course">


      //       <Chat
      //         showWhitboard={this.showWhitboard}
      //       />
      //       {this.state.showWhitboard &&
      //         <Redirect to={
      //           {
      //             pathname: "/board",
      //           }
      //         }
      //         />
      //       }

      //     </Route>

      //     <Route exact path="/board">
      //       <Board />
      //     </Route>
      //   </Switch>
      // </Router>
      <>
        {/* <MyCourse /> */}
        {/* <Assignment/> */}
        {/* <Quiz/> */}
        {/* <Assignments/>
        <Quizes/>
        <Marks/> */}
      </>

    );
  }
}

export default App;
