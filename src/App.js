import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';

export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/">
          <Signup />
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
