import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <img
          src="/logo.png"
          alt="Poojan Paradise Logo"
        />

        <h2>
          <span className="hindi">पूजन</span>{" "}
          <span className="english">Paradise</span>
        </h2>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search pooja products..."
        />

      </div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/cart">🛒 Cart</Link>

      </nav>

    </header>
  );
}