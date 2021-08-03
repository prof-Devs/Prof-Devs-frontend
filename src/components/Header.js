import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';



export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" >
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            {/* <Nav.Link href="/board">Whiteboard</Nav.Link> */}
         {/* <Nav.Link href="/AboutUs">About Us</Nav.Link> */}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header;
