// src/pages/FavoritesPage.js
import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";
import "./FavoritesPage.css";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigate = useNavigate();

  const handleViewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  if (favorites.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>⭐ Избранные рецепты</h1>
        <p>Вы ещё не добавили рецепты в избранное.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>⭐ Мои избранные рецепты</h1>
      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="favorite-card">
            <img
              src={recipe.image}
              alt={recipe.title}
              onClick={() => handleViewRecipe(recipe.id)}
              className="favorite-image"
            />
            <h3>{recipe.title}</h3>
            <p className="category">{recipe.category}</p>
            <button
              className="remove-button"
              onClick={() => removeFromFavorites(recipe.id)}
            >
              ❌ Удалить из избранного
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
