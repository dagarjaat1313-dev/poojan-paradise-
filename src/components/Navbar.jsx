import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ❤️ Poojan Paradise
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>
      </ul>

    </nav>
  );
}