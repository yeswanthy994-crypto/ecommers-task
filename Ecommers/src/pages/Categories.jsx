import React from "react";

const categories = [
  "All iPhones",
  "iPhone 16 Series",
  "iPhone 15 Series",
  "iPhone 14 Series",
  "iPhone SE"
];

export default function Categories({ onSelectCategory }) {
  return (
    <div style={{ padding: "2rem" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.5rem"
        }}
      >
        <h1>iPhone Store</h1>
        <span style={{ color: "#6b7280" }}>Logged in</span>
      </header>

      <h2 style={{ marginBottom: "1rem" }}>Select iPhone Category</h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap"
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "999px",
              border: "1px solid #e5e7eb",
              cursor: "pointer",
              background: "#ffffff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.03)"
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
