import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const Register = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const getEmailValue = () => {
    navigate("/complete-registration");
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
          <img
            src="https://ug.lidc.lasu.edu.ng/ft-includes/assets/img/logo/logo.png"
            alt="lasu-logo"
            className="w-20 h-20"
          />
          <h2 className="font-extrabold text-xl">Register</h2>
          <p className="font-light text-gray-400">To continue to VLS</p>
          <div>
            <p className="w-full h-10 bg-slate-50 border-gray-400 border-solid border-2 rounded-sm flex p-2 gap-2 mt-5 hover:cursor-pointer">
              <img
                src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
                alt=""
                className="w-5 h-5"
              />
              continue with Google
            </p>
            <div className="flex gap-3 my-10 items-center">
              <hr className="text-gray-400 w-full " />
              <span className="align-bottom">or</span>
              <hr className="text-gray-400 w-full " />
            </div>
          </div>

          <div>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border-2 border-solid border-gray-400 h-12 p-3 font-sans text-lg rounded-md"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
            </label>
          </div>
          <button
            className="w-full h-10 bg-blue-500 font-semibold text-md text-white my-3 rounded-md"
            onClick={getEmailValue}
          >
            continue
          </button>

          <p>
            Already have an acct?
            <Link
              to="/login"
              className="text-blue-400 ml-1 hover:text-blue-500"
            >
              login
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
