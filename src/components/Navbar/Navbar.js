import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">GoGreen</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/Home">
        <Link to="/" className="link-cursor">Home</Link>
        </a>
        <a href="/Products">
        <Link to="/products" className="link-cursor">Products</Link>
        </a>
        <a href="/cart"><Link to="/cart" className="link-cursor">Cart</Link></a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;