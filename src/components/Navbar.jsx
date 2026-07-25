import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import "./Navbar.css";

export default function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🪔</span>
          <span className="brand-text">Poojan Paradise</span>
        </Link>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="search-btn" title="Search">
            <span>🔍</span>
          </button>
          <Link to="/cart" className="cart-btn">
            <span>🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="user-btn" title="Account">
            <span>👤</span>
          </button>
        </div>
      </div>
    </nav>
  );
}