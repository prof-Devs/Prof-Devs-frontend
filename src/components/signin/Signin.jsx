import React, { useContext, useState }  from "react";
import { AuthContext } from "../../context/authContext";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import signin from "./signin.jpg"

import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './signin.css';
// import { AiOutlineMail } from 'react-icons/ai';
// import { FormControl } from "@material-ui/core";
import { TiSocialFacebook,TiSocialLinkedin,TiSocialGooglePlus} from 'react-icons/ti';



export default function SignIn(props) {
    const authContext = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
    });

    function handleChange (event){
        let value = event.target.value;
        let name = event.target.name;

        setUserInfo({
            ...userInfo,
            [name]:value,
        });
    };

    function handleSubmit (event){
        event.preventDefault();
        authContext.signIn (userInfo.email,userInfo.password);
    }

    if (!props.logged) {
    return (
        <div className='container-in'>
           
            <Card className='parent-in'>
                <div>
                    <img className='image-in' src={signin} alt ='' />
                </div>
                <div >
                    <h2 className='title-in'>Sign In To Prof Academy</h2>
                    <div className='icons'>
                        <TiSocialFacebook className='icon' />
                        <TiSocialLinkedin className='icon' />
                        <TiSocialGooglePlus className='icon' />
                    </div>
                    <p className='title2'>or use your email account</p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                className="input-in"
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                className="input-in"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
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
    return  <Redirect to="/" />

}