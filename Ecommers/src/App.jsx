import React, { useState } from "react";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Products from "./pages/Products";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  if (!selectedCategory) {
    return <Categories onSelectCategory={setSelectedCategory} />;
  }

  return (
    <Products
      category={selectedCategory}
      onBack={() => setSelectedCategory(null)}
    />
  );
}
