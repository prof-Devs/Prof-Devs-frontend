import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContext from './context/authContext';
import CourseContext from './context/CourseContext';
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContext>
        <CourseContext>
          <App />
        </CourseContext>
      </AuthContext>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
