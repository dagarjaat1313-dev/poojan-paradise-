import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      
      <section className="features">
        <div className="container">
          <h2>Why Choose Poojan Paradise?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Authentic Products</h3>
              <p>Genuine, high-quality pooja items sourced directly from trusted suppliers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to ensure your items arrive on time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with regular discounts and offers for our valued customers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Checkout</h3>
              <p>Safe and encrypted payment methods to protect your personal information.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Popular Categories</h2>
          <div className="categories-grid">
            <div className="category-item">
              <div className="category-image">🕯️</div>
              <h3>Diyas & Candles</h3>
            </div>
            <div className="category-item">
              <div className="category-image">🌺</div>
              <h3>Flowers & Garlands</h3>
            </div>
            <div className="category-item">
              <div className="category-image">🧴</div>
              <h3>Oils & Incense</h3>
            </div>
            <div className="category-item">
              <div className="category-image">🔔</div>
              <h3>Bells & Instruments</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Customer Reviews</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Excellent quality products and super fast delivery! Highly recommended."</p>
              <h4>- Raj Kumar</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Best place to buy pooja items. Great customer service and authentic products."</p>
              <h4>- Priya Singh</h4>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Amazing variety and competitive prices. Will definitely shop again!"</p>
              <h4>- Amit Patel</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
