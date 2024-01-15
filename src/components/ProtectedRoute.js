// import { useContext } from "react";
// import  UserContext  from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ currentUser, children }) => {
  const navigate = useNavigate();
//   const { currentUser } = useContext(UserContext);


  if (!currentUser) {
    console.log("Current User:", currentUser);
    // Use navigate for programmatic navigation
    navigate("/");
    // Prevent rendering children if the user is not authenticated
    return null;
  }

  return children;
};

export default ProtectedRoute;
