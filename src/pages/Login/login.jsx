import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Login = () => {
  const { signInUser } = useContext(UserContext);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();

  const logIn = async () => {
    setError("");
    try {
      await signInUser(email, password);
      // console.log(data);
      navigate("/student");
    } catch (e) {
      setError(e.message);
      console.log(e);
      alert(error);
    }
  };

  return (
    <>
      <div className="h-screen bg-[url(https://schoolings.org/wp-content/uploads/LASU-Matriculation-Ceremony.jpg)] flex justify-center items-center bg-no-repeat bg-cover bg-center object-contain bg-blend-multiply ">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-8">
            <img
              src="https://ug.lidc.lasu.edu.ng/ft-includes/assets/img/logo/logo.png"
              alt="Logo"
              className="w-30 h-20"
            />
          </div>
          <h1 className="text-2xl font-semibold text-center text-black mt-8 mb-6">
            Log In (As Student)
          </h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6">
              <label for="email" className="block mb-2 text-sm text-gray-600">
                Enter your E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              className="w-32 bg-gradient-to-r bg-blue-500 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
              onClick={logIn}
            >
              Login
            </button>
          </form>
          <small>
            Don't have an Acct?
            <Link to="/register" className="text-blue-500 mr-2">
              Register
            </Link>
          </small>
          <small>
            continue as an
            <Link to="/AdminLogin" className="text-blue-500 text-right">
              admin
            </Link>
          </small>
        </div>
      </div>
    </>
  );
};

export default Login;
