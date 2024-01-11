import { BrowserRouter, Route, Routes } from "react-router-dom";
import FourZeroFour from "./pages/fourzerofour/index";
import Admin from "./pages/Admin/admin";
import Home from "./pages/Home/index";
import Login from "./pages/Login/login";
import Student from "./pages/Student/student";
import Register from "./pages/Register/register";
import Profile from "./pages/Profile/profile";
import CompleteRegistrationPage from "./pages/Register/CompleteRegistrationPage";
import Course from "./pages/Courses/Course";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/">
              <Route path=" " element={<App />} />
              <Route path="*" element={<FourZeroFour />} />
              <Route path="register" element={<Register />} />
              <Route path="student" element={<Student />} />
              <Route path="admin/" element={<Admin />}>
                <Route path="courses" element={<Course />} />
              </Route>
              <Route path="profile" element={<Profile />} />
              <Route
                path="complete-registration"
                element={<CompleteRegistrationPage />}
              />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
