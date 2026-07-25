import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Poojan Paradise 🪔</h1>
        <p>Your one-stop destination for premium pooja items and spiritual essentials</p>
        <div className="hero-buttons">
          <a href="/shop" className="hero-btn primary">Shop Now</a>
          <button className="hero-btn secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}
