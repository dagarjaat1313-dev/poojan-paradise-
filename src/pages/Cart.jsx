import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/shop" className="continue-shopping-btn">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>🛒 Shopping Cart</h1>
        <p>{cartItems.length} item(s) in cart</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="cart-item">
                  <td>
                    <div className="product-cell">
                      <img src={item.image} alt={item.name} />
                      <div className="product-details">
                        <h4>{item.name}</h4>
                        <p>{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="price-cell">₹{item.price}</td>
                  <td>
                    <div className="quantity-control">
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>−</button>
                      <input type="number" className="qty-input" value={item.quantity} readOnly />
                      <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  <td className="total-cell">₹{item.price * item.quantity}</td>
                  <td className="action-cell">
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-item">
            <span>Tax (18%):</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          
          <div className="summary-item">
            <span className="shipping-free">Shipping:</span>
            <span className="shipping-free">FREE</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
          <Link to="/shop" className="continue-shopping-link">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}