import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../../context/authContext";
import { If, Else, Then } from "react-if";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialGooglePlus,
} from "react-icons/ti";

export default function SignUp() {
  const authContext = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    gender: "",
    age: "",
    firstName: "",
    lastName: "",
  });
  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    authContext.signUp(
      userInfo.age,
      userInfo.firstName,
      userInfo.gender,
      userInfo.lastName,
      userInfo.password,
      userInfo.email
    );
  }

  return (
    <div className="signUpcontainer">
      <If condition={authContext.loggedIn}>
        <Then>
          {/* <Button className="button" onClick={authContext.signOut}> Sign Out </Button> */}
        </Then>
        <Else>
          <Card className="parent">
            <div id="secondDiv">
              <h2 className="title">Create Account</h2>
              <div className="icons">
                <TiSocialFacebook className="icon" />
                <TiSocialLinkedin className="icon" />
                <TiSocialGooglePlus className="icon" />
              </div>
              <p className="title2">or use your email for registeration</p>
              <Form className="form" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    className="input"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input"
                    type="email"
                    placeholder="✉ Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="names">
                  <Form.Group>
                    <Form.Control
                      type="number"
                      placeholder="Age"
                      name="age"
                      className="input"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Select
                      className="input"
                      name="gender"
                      onChange={handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <Button type="submit" className="button">
                  SIGN UP
                </Button>
              </Form>
            </div>
            <div>
              <img
                className="image"
                src="https://color-hex.org/colors/33b292.png"
                alt=''
              />
            </div>
          </Card>
        </Else>
      </If>
    </div>
  );
}
