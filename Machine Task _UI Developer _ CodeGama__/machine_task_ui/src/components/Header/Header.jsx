import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="header"  
      style={{ backgroundImage: "url('/assets/images/banner-avater.png')" }}
    >
      <div className="navbar">
        <img src="/assets/images/LOGO.png" alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={menuOpen ? "open" : ""}>
          <ul>
            <li>Features</li>
            <li>Resources</li>
            <li>Comparison</li>
            <li>Blogs</li>
          </ul>
        </nav>
      </div>

      <div className="hero">
        <button className="funding-button">
          Raised $1.5 Million funding • Read More
        </button>
        <h1>Manage your sales and analytics at one place</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Sign up for Framer to publish your own website.</p>
        <div className="cta-buttons">
          <button className="buy-template">Buy template</button>
          <button className="book-demo">Book Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
