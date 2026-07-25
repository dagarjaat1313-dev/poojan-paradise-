import React from "react";
import Products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

export default function Shop() {
  return (
    <section className="shop-page">
      <h1>Our Premium Collection</h1>
      <p>Authentic pooja essentials for every ritual</p>

      <div className="product-grid">
        {Products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}