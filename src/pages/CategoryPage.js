// CategoryPage.js
import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams();
  return <h2>Категория: {name}</h2>;
};

export default CategoryPage;
