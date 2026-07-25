import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import "./Shop.css";

export default function Shop() {
  const { addToCart } = useCart();
  const [filteredCategory, setFilteredCategory] = useState("All");

  const filteredProducts = filteredCategory === "All" 
    ? products 
    : products.filter(p => p.category === filteredCategory);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>🛍️ Our Shop</h1>
        <p>Find everything you need for your spiritual journey</p>
      </div>

      <div className="shop-content">
        {/* Sidebar - Categories */}
        <aside className="shop-sidebar">
          <h3>Categories</h3>
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${filteredCategory === category ? 'active' : ''}`}
                onClick={() => setFilteredCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Products Grid */}
        <main className="shop-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                
                <div className="product-rating">
                  <span className="stars">⭐ {product.rating}</span>
                  <span className="reviews">({product.reviews} reviews)</span>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-footer">
                  <span className="product-price">₹{product.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
