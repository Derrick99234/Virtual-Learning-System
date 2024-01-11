import React, { useState } from 'react';
import ReusableInput from '../../components/Inputs/index';
import { auth } from './../../firebaseConfig';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({setCurrentUser}) => {
  const [password, setPassword] = useState('');

   onAuthStateChanged(auth, (user) => {
    setCurrentUser(user)
  })

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate()

  const logIn = async () => {
    setError("");
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // console.log(data);
        navigate("/admin");
    } catch (e) {
      setError(e.message);
      console.log(e);
      alert(error);
    }
  }

  return (
    <div>
      <ReusableInput
        type="email"
        label="Email:"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <ReusableInput
        type="password"
        label="Password:"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
     <button onClick={logIn}>Log in</button>
    </div>
  );
};

export default Login;

