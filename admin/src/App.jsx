import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./components/Login.jsx";
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const backendUrl = import.meta.env.VITE_BACKEND_URL 

const App = () => {
  //authentication
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/dashboard'|| <Dashboard />);
    }
  }, [token]);

  return (
    <>
      <ToastContainer />
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <p>Redirecting to dashboard...</p>
      )}
    </>
  );
};

export default App;
