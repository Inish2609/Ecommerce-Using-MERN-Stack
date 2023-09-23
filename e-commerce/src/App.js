import React from 'react'
import {
  Routes, // instead of "Switch"
  Route,
  Navigate,
} from "react-router-dom";
// import Pay from './Pages/Pay'
import Success from './Pages/Success';
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Product } from './Pages/Product'
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'

const App = () => {
  const user = false;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categories" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path='/success' element={<Success/>}/>
        
      </Routes>
    </div>
  );
}

export default App