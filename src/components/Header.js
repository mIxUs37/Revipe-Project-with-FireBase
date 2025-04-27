// src/components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./Header.css";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="site-header">
      <div className="nav-bar">
        <Link to="/" className="home-button">🏠 Главная</Link>
        <h1 className="site-title">🍽 Рецепты</h1>
        <div className="nav-links">
          <Link to="/favorites" className="favorites-button">⭐ Избранные</Link>

          {!user ? (
            <>
              <Link to="/login" className="auth-button">Вход</Link>
              <Link to="/register" className="auth-button">Регистрация</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="auth-button">
              Выйти
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
