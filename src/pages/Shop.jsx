import React from "react";
import Products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop-page">

      <div className="shop-header">
        <h1>🛍️ Poojan Paradise Store</h1>
        <p>Premium Pooja Samagri for Every Ritual</p>

        <input
          type="text"
          placeholder="🔍 Search products..."
          className="search-box"
        />
      </div>

      <div className="category-list">
        <button>All</button>
        <button>Kapoor</button>
        <button>Dhoop</button>
        <button>Ghee</button>
        <button>Rudraksh</button>
        <button>Hawan</button>
      </div>

      <div className="product-grid">
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}