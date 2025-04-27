import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ id, title, image, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="recipe-card" onClick={handleClick}>
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h3>{title}</h3>
        <p className="category">{category}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
