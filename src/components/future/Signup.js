import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3001/', { transports: ['Websocket'] });

export class signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studentEmail: '',
      firstName: '',
      lastName: '',
      password: '',
      gender: '',
      age: '',
      showForm: true
    }
  }

  // componentDidMount= ()=>{
  //     socket.on('connect', () =>{
  //         console.log('helloooo');
  //     });
  // }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  studentSignup = async (e) => {
    e.preventDefault();
    const payload = {
      ...this.state,
    }
    console.log(payload);

    // const newStudent = await axios.post('http://localhost:3001/signup', payload);
    // alert(newStudent.data);
    // this.setState({ showForm: false })

    //     socket.emit('signup', payload);
    //     console.log(payload);
  };



  render() {
    return (
      <div>
        {this.state.showForm &&
          <Form onSubmit={this.studentSignup}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="studentEmail" onChange={this.handleChange} required='true'/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={this.handleChange} required='true'/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={this.handleChange} required='true' />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} required='true'/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select aria-label="Default select example" name="gender" onChange={this.handleChange}>
                <option>Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Age" min="10" max="35" name="age" onChange={this.handleChange} required='true'/>
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit={this.studentSignup}>
              Sign Up
            </Button>
          </Form>
        }
      </div>
    )
  }
}

export default signup;
