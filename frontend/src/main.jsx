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
import Collections from "./pages/Collections.jsx";
import Product from "./pages/Product.jsx";
import Orders from "./pages/Orders.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import "flowbite";
import ShopContextProvider from "./context/ShopContext.jsx";
import Profile from "./pages/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
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
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
