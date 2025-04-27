// src/context/FavoritesContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useAuth } from "./AuthContext";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where
} from "firebase/firestore";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();

  const loadFavorites = async (userId) => {
    const q = query(
      collection(db, "favorites"),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    const loadedFavorites = querySnapshot.docs.map((doc) => ({
      id: doc.data().recipeId,
      title: doc.data().title,
      image: doc.data().image,
      category: doc.data().category,
      docId: doc.id,
    }));
    setFavorites(loadedFavorites);
  };

  useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    } else {
      setFavorites([]);
    }
  }, [user]);

  const addToFavorites = async (recipe) => {
    if (!user) return;

    const exists = favorites.some((item) => item.id === recipe.id);
    if (exists) return;

    await addDoc(collection(db, "favorites"), {
      userId: user.uid,
      recipeId: recipe.id,
      title: recipe.title,
      image: recipe.image,
      category: recipe.category,
    });

    await loadFavorites(user.uid); // <--- ПЕРЕЗАГРУЖАЕМ после добавления
  };

  const removeFromFavorites = async (recipeId) => {
    if (!user) return;

    const favoriteToDelete = favorites.find((fav) => fav.id === recipeId);
    if (!favoriteToDelete) return;

    await deleteDoc(doc(db, "favorites", favoriteToDelete.docId));

    await loadFavorites(user.uid); // <--- ПЕРЕЗАГРУЖАЕМ после удаления
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
