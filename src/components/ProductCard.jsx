import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img 
          src={product.image}
          alt={product.name}
        />
      </div>

      <h3>{product.name}</h3>

      <p className="price">
        ₹{product.price}
      </p>

      <button className="cart-btn">
        Add To Cart 🛒
      </button>

    </div>
  );
}