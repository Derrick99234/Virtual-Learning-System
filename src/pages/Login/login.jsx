// import React, { useState } from 'react';
// import ReusableInput from '../../components/Inputs/index';
import './login.css';

const Login = () => {
  // const [password, setPassword] = useState('');

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  // const [email, setEmail] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <>
  <div className="h-screen bg-[url(https://schoolings.org/wp-content/uploads/LASU-Matriculation-Ceremony.jpg)] flex justify-center items-center bg-no-repeat bg-cover bg-center object-contain bg-blend-multiply ">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <img src="https://ug.lidc.lasu.edu.ng/ft-includes/assets/img/logo/logo.png" alt="Logo" className="w-30 h-20"/>
      </div>
      <h1 className="text-2xl font-semibold text-center text-black mt-8 mb-6">Log In</h1>
      <form>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm text-gray-600">Enter your E-mail</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required/>
        </div>
        <button type="submit" className="w-32 bg-gradient-to-r bg-blue-500 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Login</button>
      </form>
    </div>
  </div>
    </>
  );
};

export default Login;

