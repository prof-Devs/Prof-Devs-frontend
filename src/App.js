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

export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Signup />
            <Signin />
          </Route>
          <Route path="/signin">

          </Route>
          <Route path="/signup">
          </Route>
          <Route path="/AboutUs">
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
