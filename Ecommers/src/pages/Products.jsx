// src/pages/Products.jsx
import React from "react";
import { iphones } from "../data/iphones";

export default function Products({ category, onBack }) {
  const filtered =
    category === "All iPhones"
      ? iphones
      : iphones.filter((p) => p.category === category);

  return (
    <div style={{ padding: "2rem" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <button
            onClick={onBack}
            style={{
              padding: "0.5rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              cursor: "pointer",
            }}
          >
            ← Categories
          </button>
          <h1>iPhone Store</h1>
        </div>
        <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
          Category: {category}
        </span>
      </header>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              width: 240,
              borderRadius: 16,
              border: "1px solid #e5e7eb",
              padding: "1rem",
              background: "#ffffff",
              boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 220,
                borderRadius: 12,
                marginBottom: "0.75rem",
                background: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>
              {p.name}
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#6b7280",
                marginBottom: "0.25rem",
              }}
            >
              {p.category}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#4b5563",
                marginBottom: "0.5rem",
              }}
            >
              {p.description}
            </p>
            <p
              style={{
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              ₹{p.price.toLocaleString("en-IN")}
            </p>
            <button
              style={{
                width: "100%",
                padding: "0.6rem 0.8rem",
                borderRadius: 999,
                border: "none",
                background:
                  "linear-gradient(to right, #0ea5e9, #6366f1, #a855f7)",
                color: "#ffffff",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
