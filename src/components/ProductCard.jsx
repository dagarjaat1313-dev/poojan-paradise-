import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <span className="offer-badge">10% OFF</span>

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <div className="rating">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="price">₹{product.price}</p>

      <button className="buy-btn">
        🛒 Add to Cart
      </button>

    </div>
  );
}