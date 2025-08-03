// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../api/axiosConfig";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const check = async () => {
      try {
        const res = await axios.get("/doctor/me"); // 🔐 secure route
        if (res.data?.doctorEmail === "admin@example.com") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
        console.log(err);
      }
    };
    check();
  }, []);

  if (isAuthenticated === null)
    return <p className="text-center mt-10">Checking auth...</p>;
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
