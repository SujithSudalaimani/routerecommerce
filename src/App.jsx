import React from 'react';
import { CartProvider } from "./Components/Cartcontext";
import ProductList from './Pages/ProductList';
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <CartProvider>
      <Router>
          <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
