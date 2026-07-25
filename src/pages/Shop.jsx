import React from "react";
import Products from "../data/Products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div className="shop">
      <h1>🪔 Poojan Paradise Shop</h1>

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