import React, { useState, useContext, useEffect } from "react";
import { auth } from "./../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

function ComplteRegistrationPage({ setCurrentUser }) {
  const [userPass, setUserPass] = useState("");
  const [userPass2, setUserPass2] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
      },
      (error) => {
        console.error("Error in onAuthStateChanged:", error);
      }
    );

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [setCurrentUser]);

  const { user, setUser } = useContext(UserContext);

  const ValidateUser = async () => {
    setError("");

    if (userPass === userPass2) {
      try {
        await createUserWithEmailAndPassword(auth, user, userPass);
        navigate("/login");
      } catch (e) {
        setError(e.message);
        console.error(e);
        alert(error);
      }
    } else {
      alert("Password does not match");
    }
  };

  return (
    <>
      <section
        className="h-screen bg-slate-600 flex justify-center items-center bg-no-repeat bg-cover bg-center object-contain bg-blend-multiply"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg)`,
        }}
      >
        <form
          className="w-96 h-[500px] bg-white p-5 rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* this is for the first name and last name */}
          <div className="flex justify-between gap-2 mb-2">
            <div>
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  className="w-full border-2 border-solid border-gray-400 h-12 p-3 font-sans text-md rounded-md"
                />
              </label>
            </div>

            <div>
              Last Name
              <label htmlFor="lastName">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="w-full border-2 border-solid border-gray-400 h-12 p-3 font-sans text-md rounded-md"
                />
              </label>
            </div>
          </div>

          {/* Email section */}
          <div>
            <label htmlFor="email">
              Email
              <input
                type="email"
                value={user}
                className="w-full border-2 border-solid border-gray-400 h-12 p-3 my-3 font-sans text-md rounded-md"
                placeholder="Enter Your Email"
                // ref={inputValue}
                onChange={(e) => setUser(e.target.value)}
              />
            </label>
          </div>

          {/* password section */}
          <div>
            <div>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-full border-2 border-solid border-gray-400 h-12 p-3 my-3 font-sans text-md rounded-md"
                  onChange={(e) => setUserPass(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password2">
                Confirm Password
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="Confirm Your Password"
                  className="w-full border-2 border-solid border-gray-400 h-12 p-3 my-3 font-sans text-md rounded-md"
                  onChange={(e) => setUserPass2(e.target.value)}
                />
                <span className="FaEye"></span>
              </label>
            </div>
          </div>

          <button
            className="w-full h-10 bg-blue-500 font-semibold text-md text-white mt-10 rounded-md"
            onClick={ValidateUser}
          >
            Register
          </button>
        </form>
      </section>
    </>
  );
}
export default ComplteRegistrationPage;
