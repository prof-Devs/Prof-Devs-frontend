import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Chat from './components/Chat';


export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          {/* <Route exact path="/signup">
            <Signup />
          </Route> */}
          <Route exact path="/AboutUs">
            <AboutUs/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
