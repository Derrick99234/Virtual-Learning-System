import React, { useState } from 'react';
import ReusableInput from '../../components/Inputs/index';

const Login = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
     
    </div>
  );
};

export default Login;

