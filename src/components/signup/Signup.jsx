import React from "react";
import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'
import { TiSocialFacebook,TiSocialLinkedin,TiSocialGooglePlus} from 'react-icons/ti';



export default function SignUp() {
  return (
    <div className='signUpcontainer'>
      <Card className='parent'>
        <div id='secondDiv'>
          <h2 className='title'>Create Account</h2>
          <div className='icons'>
          <TiSocialFacebook className='icon'/>
          <TiSocialLinkedin className='icon'/>
          <TiSocialGooglePlus className='icon'/>
          </div>
          <p className='title2'>or use your email for registeration</p>
          <Form className='form'>
            <Form.Group>
              <Form.Control
                className='input'
                type="text"
                placeholder="First Name"
                name="first name"
              />
            </Form.Group >
            <Form.Group>
              <Form.Control
                className='input'
                type="text"
                placeholder="Last Name"
                name="last name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className='input'
                type="email"
                placeholder="Email"
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className='input'
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>

            <div className="names">
              <Form.Group>
                <Form.Control type="number" placeholder="Age" name="age" className='input' min='10'  />
              </Form.Group>
              <Form.Group>
                <Form.Select className='input'>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Button type="submit" className='button'>
              SIGN UP
            </Button>
          </Form>
        </div>
        <div>
          <img className='image' src='https://color-hex.org/colors/33b292.png' />
        </div>
      </Card>
    </div>
  );
}




