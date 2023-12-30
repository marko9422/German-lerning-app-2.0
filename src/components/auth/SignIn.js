import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext,useEffect } from "react";
import { auth } from "../../firebase/config";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './SignIn.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CV from "../CV";

const SignIn = () => {

  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/SignUp")
  }

  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('test123');

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        navigate("/")
      })
      .catch((error) => {
        // setError(true);
      });
  };

  return (
    <>
      <Container>
        <Row >
          <Col style={{ display: 'flex', justifyContent: 'right' }}>
            <div className="german-app-div">
              <p>German</p>
              <p>learning</p>
              <p>APP</p>
            </div>
            <div className="form">
              <Form onSubmit={handleLogin}>
                <Form.Control
                  className="mb-2"
                  type="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
                <Form.Control
                  className="mb-2"
                  type="password"
                  autoComplete="off"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
                <Button variant="primary" type="submit">Log In</Button>
                <Button variant="link" onClick={() => navigateToSignUp()}>Register</Button>
              </Form>
            </div>
          </Col>
        </Row>
        <CV></CV>
      </Container>
    </>
  );
};

export default SignIn;
