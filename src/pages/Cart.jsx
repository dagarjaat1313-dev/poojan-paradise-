import { useCart } from "../context/CartContext";
import { Trash2, ShoppingBag, Plus, Minus } from "lucide-react";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <ShoppingBag size={80} />
          <h2>Your Cart is Empty</h2>
          <p>Start shopping to add items to your cart</p>
          <a href="/shop" className="continue-shopping-btn">Continue Shopping</a>
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
        {/* Cart Items */}
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
                  <td className="product-cell">
                    <img src={item.image} alt={item.name} />
                    <div className="product-details">
                      <h4>{item.name}</h4>
                      <p>{item.category}</p>
                    </div>
                  </td>
                  <td className="price-cell">₹{item.price}</td>
                  <td className="quantity-cell">
                    <div className="quantity-control">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="qty-btn"
                      >
                        <Minus size={16} />
                      </button>
                      <input 
                        type="number" 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        className="qty-input"
                      />
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="qty-btn"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="total-cell">₹{item.price * item.quantity}</td>
                  <td className="action-cell">
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove from cart"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Summary */}
        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>₹{getTotalPrice()}</span>
          </div>
          <div className="summary-item">
            <span>Shipping:</span>
            <span className="shipping-free">Free</span>
          </div>
          <div className="summary-item">
            <span>Tax (10%):</span>
            <span>₹{Math.round(getTotalPrice() * 0.1)}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-total">
            <span>Total:</span>
            <span>₹{Math.round(getTotalPrice() * 1.1)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
          <a href="/shop" className="continue-shopping-link">Continue Shopping</a>
        </aside>
      </div>
    </div>
  );
}
