import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = () => {
        //set configurations
        const configuration = {
            method: "post",
            url: "https://nodejs-mongodb-auth-server.herokuapp.com/register",
            data: {
                email,
                password
            }
        }

        //make the API call
        axios(configuration).then((result) => 
        {
            console.log("result");
            setRegister(true);
            setEmail("");
            setPassword("");
        })
        .catch((error) => {
            console.log("error");
            error = new Error();
        });
    }

    return (
        <div>
            <h2>Register</h2>
            <div>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" 
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password"
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                {/* submit button */}
                <Button 
                    variant="primary" 
                    onClick={handleSubmit}
                >
                    Register
                </Button>
                {/* display success message */}
                { register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}
            </div>
        </div>
    )
}