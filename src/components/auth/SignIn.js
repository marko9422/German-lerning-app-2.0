import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState,useContext,setError } from "react";
import { auth } from "../../firebase/config";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {

  const {dispatch} = useContext(AuthContext)

  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/SignUp")
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate("/")
      })
      .catch((error) => {
        // setError(true);
      });
  };


  const logout = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGOUT", payload:user})
        navigate("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>

      <div className="sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>Log In to your Account</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Log In</button>
        </form>

        <button onClick={() => navigateToSignUp()}>Register</button>
        <p>test@test.com</p>
        <p>test123</p>
      </div>



    </>
  );
};

export default SignIn;
