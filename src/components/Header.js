import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="nav-bar">
        <Link to="/" className="home-button">🏠 Главная</Link>
        <h1 className="site-title">🍽 Рецепты</h1>
      </div>
    </header>
  );
};

export default Header;
