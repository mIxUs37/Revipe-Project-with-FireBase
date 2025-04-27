import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipes";
import "./RecipePage.css";

const RecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Рецепт не найден 😢</h2>;
  }

  return (
    <div className="recipe-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p><strong>Категория:</strong> {recipe.category}</p>

      <h3>Ингредиенты:</h3>
      <ul className="ingredients-list">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Описание приготовления:</h3>
      <p className="recipe-description">{recipe.description}</p>
    </div>
  );
};

export default RecipePage;
