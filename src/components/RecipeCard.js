// src/components/RecipeCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import "./RecipeCard.css";

const RecipeCard = ({ id, title, image, category }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToFavorites } = useFavorites();

  const handleNavigate = () => {
    navigate(`/recipe/${id}`);
  };

  const handleAddToFavorites = (e) => {
    e.stopPropagation();
    if (!user) {
      alert("Пожалуйста, войдите в аккаунт, чтобы добавлять в избранные.");
      return;
    }
    addToFavorites({ id, title, image, category });
    alert(`Рецепт "${title}" добавлен в избранные!`);
  };

  return (
    <div className="recipe-card" onClick={handleNavigate}>
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h3>{title}</h3>
        <p className="category">{category}</p>
        <button className="favorite-button" onClick={handleAddToFavorites}>
          ⭐ Добавить в избранное
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
