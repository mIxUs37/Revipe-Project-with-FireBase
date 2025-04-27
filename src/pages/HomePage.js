import React, { useState } from "react";
import recipesData from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import "./HomePage.css";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = ["Все", ...new Set(recipesData.map(r => r.category))];

  const filteredRecipes = recipesData.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Добро пожаловать на сайт рецептов!</h1>
        <p>Здесь вы найдёте вкусные блюда на любой вкус 🍲</p>

        <div className="search-filter-section">
          <input
            type="text"
            placeholder="Поиск рецептов..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cat === selectedCategory ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="recipes-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))
        ) : (
          <p>Рецептов не найдено 😢</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
