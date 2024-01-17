import { BrowserRouter, Route, Routes } from "react-router-dom";
import FourZeroFour from "./pages/fourzerofour/index";
import Admin from "./pages/Admin/admin";
import Home from "./pages/Home/index";
import Login from "./pages/Login/login";
import AdminLogin from "./pages/Login/AdminLogin";
import Student from "./pages/Student/student";
import Register from "./pages/Register/register";
import Profile from "./pages/Profile/profile";
import CompleteRegistrationPage from "./pages/Register/CompleteRegistrationPage";
import Course from "./pages/Courses/Course";
import UserContext from "./contexts/UserContext";
import { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
// import { getDownloadURL, listAll, ref } from "firebase/storage";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const App = () => {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [videoLists, setVideoLists] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  // const imageListRef = ref(storage, "UploadedVideos");

  // Authetication
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

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
  }, []);

  // Authetication

  useEffect(() => {
    //   listAll(imageListRef).then((res) => {
    //     res.items.forEach((item) => {
    //       getDownloadURL(item).then((url) => {
    //         setVideoLists((prev) => [...prev, url]);
    //       });
    //     });
    //   });

    const videoDetailsRef = collection(db, "Videos");
    const q = query(videoDetailsRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const videoDetail = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideoDetails(videoDetail);
      // console.log(videoDetail);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            user,
            setUser,
            videoLists,
            setVideoLists,
            videoDetails,
            createUser,
            currentUser,
            signInUser,
            logOut,
            googleSignIn,
          }}
        >
          <Routes>
            <Route path="/">
              <Route path="" element={<Home />} />
              <Route path="*" element={<FourZeroFour />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/student"
                element={
                  <ProtectedRoute currentUser={currentUser}>
                    <Student />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute currentUser={currentUser}>
                    <Admin currentUser={currentUser} />
                  </ProtectedRoute>
                }
              />
              <Route path="/admin-courses" element={<Course />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/complete-registration"
                element={
                  <CompleteRegistrationPage setCurrentUser={setCurrentUser} />
                }
              />
              <Route path="/home" element={<Home />} />
              <Route
                path="/login"
                element={<Login setCurrentUser={setCurrentUser} />}
              />
            </Route>
            <Route
              path="/AdminLogin"
              element={<AdminLogin setCurrentUser={setCurrentUser} />}
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
