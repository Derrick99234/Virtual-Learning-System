import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import FourZeroFour from "./pages/fourzerofour/index";
// import Admin from "./pages/Admin/admin";
// import Home from "./pages/Home/index";
// import Login from "./pages/Login/login";
// import Student from "./pages/Student/student";
// import Register from "./pages/Register/register";
// import Profile from "./pages/Profile/profile";
// import CompleteRegistrationPage from "./pages/Register/CompleteRegistrationPage";
// import Course from "./pages/Courses/Course";
// import { UserContextProvider } from "./contexts/UserContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
