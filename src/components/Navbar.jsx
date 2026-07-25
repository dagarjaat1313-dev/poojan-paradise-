import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          🛕 <span>Poojan Paradise</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <a href="#contact">Contact</a>
        </nav>

        <button className="shop-btn">Shop Now</button>
      </div>
    </header>
  );
}