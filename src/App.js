import "./App.css";
import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Products from "./pages/Products/Products";
import Cart from "./components/Cart/Cart"
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>  
        </Routes>
    </BrowserRouter>
  );
}

export default App;

