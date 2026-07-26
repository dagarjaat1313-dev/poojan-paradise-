import "./Home.css";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <span className="hero-tag">
            ✨ Premium Pooja Essentials
          </span>

          <h1>
            <span className="hindi-title">पूजन</span>{" "}
            <span className="english-title">Paradise</span>
          </h1>

          <p>
            Bringing purity, devotion and tradition to every home with premium
            pooja essentials for every festival and every ritual.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">
              Shop Now
            </button>

            <button className="explore-btn">
              Explore Collection
            </button>
          </div>

          <div className="trust">
            <div>🪔 Premium Quality</div>
            <div>🚚 Fast Delivery</div>
            <div>🙏 100% Authentic</div>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/images/hero.jpg"
            alt="Poojan Paradise"
          />
        </div>
      </section>

      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="card">🪔 Diyas</div>
          <div className="card">🔥 Kapoor</div>
          <div className="card">📿 Rudraksh</div>
          <div className="card">🌸 Dhoop</div>
          <div className="card">🧴 Pooja Oil</div>
          <div className="card">🌼 Hawan Samagri</div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />
    </>
  );
}