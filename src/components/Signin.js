import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import base64 from 'base-64';
// import { Redirect } from 'react-router-dom';
import MyCourses from './MyCourses';
import AllCourses from './AllCourses';

export class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showStudent: false,
      showTeacher: false,
      showForm: true
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  studentSignIn = async (e) => {
    e.preventDefault();

    const base1 = base64.encode(`${this.state.email}:${this.state.password}`);
    console.log('base1', base1);
    const basic = `Basic ${base1}`;


    const payload = {
      headers: { authorization: basic },
    }
    console.log(payload);
    const allData = await axios.get('http://localhost:3001/getUsers');
    console.log('all data', allData);

    const user = allData.data.filter((user, idx) => {

      return (user.email === this.state.email);
    });
    console.log('user', user[0].role);
    if (user[0]) {

      if (user[0].role === 'user') {
        const student = await axios.post('http://localhost:3001/signin/user', payload);
        alert(student.data);
        if (student.data === 'you are signedIn!') {
          this.setState({ showStudent: true, showForm: false })
        }
      } else if (user[0].role === 'admin') {

        const teacher = await axios.post('http://localhost:3001/signin/teacher', payload);
        alert(teacher.data);
        // console.log('rolee',user[0].role);
        if (teacher.data === 'you are signedIn!') {
          this.setState({ showTeacher: true, showForm: false })
        }
      }
    } else {
      alert('You are not signedUp !')
    }

    // const newStudent = await axios.post('http://localhost:3001/signup', payload);
    // alert(newStudent.data);

    //     socket.emit('signup', payload);
    //     console.log(payload);
  };



  render() {

    return (
      <>
        {this.state.showTeacher && <MyCourses />}
        {this.state.showStudent && <AllCourses />}

        {this.state.showForm &&
          <Form onSubmit={this.studentSignIn}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        }
      </>
    )
  }
}

export default Signin;