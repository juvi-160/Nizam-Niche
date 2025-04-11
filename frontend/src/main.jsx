import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Women from "./pages/Women.jsx";
import Men from "./pages/Men.jsx";
import Artifacts from "./pages/Artifacts.jsx";
import Books from "./pages/Books.jsx";
import Culture from "./pages/Culture.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Shop from "./pages/shop.jsx";
import Orders from "./pages/ShowOrders.jsx";
import Admin from "./admin/admin.jsx";
import Dashboard from "./admin/pages/Dashboard.jsx";
import Users from "./admin/pages/Users.jsx";
import Products from "./admin/pages/Products.jsx";
import OrdersAdmin from "./admin/pages/Orders.jsx";
import Settings from "./admin/pages/Settings.jsx";

import 'flowbite';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/books" element={<Books />} />
        <Route path="/culture-heritage" element={<Culture />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<OrdersAdmin />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
