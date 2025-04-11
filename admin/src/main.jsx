import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import ProductForm from './pages/ProductForm'
import Products from './pages/Products'
import Settings from './pages/Settings'
import Users from './pages/Users'
import PrivateRoute from './components/ProtectedRoute.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/addProduct" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
