import React from "react";
import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signin.css'
import { AiOutlineMail } from 'react-icons/ai';
import { FormControl } from "@material-ui/core";
import { TiSocialFacebook,TiSocialLinkedin,TiSocialGooglePlus} from 'react-icons/ti';



export default function SignIn() {
    return (
        <div className='container-in'>
            <Card className='parent-in'>
                <div>
                    <img className='image-in' src='https://color-hex.org/colors/33b292.png' />
                </div>
                <div >
                    <h2 className='title-in'>Sign In To Prof Academy</h2>
                    <div className='icons'>
                        <TiSocialFacebook className='icon' />
                        <TiSocialLinkedin className='icon' />
                        <TiSocialGooglePlus className='icon' />
                    </div>
                    <p className='title2'>or use your email account</p>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                className="input-in"
                                type="email"
                                placeholder="Email"
                                name="email"
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className="input-in"
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </Form.Group>
                        <Button className="button-in" type="submit">
                            SIGN IN
                        </Button>
                    </Form>
                </div>
            </Card>
        </div>
    );
}