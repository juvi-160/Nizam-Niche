import React, { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Orders from "./pages/Orders.jsx";
import ProductForm from "./pages/ProductForm.jsx";
import Products from "./pages/Products.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import PrivateRoute from "./components/ProtectedRoute.jsx";
import Update from "./pages/Update.jsx";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  

  return (
    <>
      <ToastContainer />
      {token === null ? (
        <Login setToken={setToken} />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
              <Route path="/addProduct" element={<ProductForm token={token} />} />
              <Route path="/products" element={<Products token={token} />} />
              <Route path="/settings" element={<Settings token={token} />} />
              <Route path="/users" element={<Users token={token} />} />
              <Route path="/update/:id" element={<Update />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
