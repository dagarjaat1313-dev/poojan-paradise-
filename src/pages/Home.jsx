import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">

        <div className="hero-left">

          <span className="hero-tag">
            ✨ Premium Pooja Essentials
          </span>

          <h1>
            <span className="red">Poojan Paradise</span>
          </h1>

          <p>
            Pure, authentic and premium pooja samagri for every ritual,
            festival and spiritual journey.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">
              Shop Now
            </button>

            <button className="explore-btn">
              Explore Collection
            </button>
          </div>

        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1604608672516-7d3b7aef5f31"
            alt="Pooja Diya"
          />
        </div>

      </section>

      {/* Categories */}

      <section className="categories">

        <h2>Popular Categories</h2>

        <div className="category-grid">

          <div className="category-card">🪔 Diyas</div>
          <div className="category-card">🔥 Kapoor</div>
          <div className="category-card">🌸 Dhoop</div>
          <div className="category-card">🧴 Pooja Oil</div>
          <div className="category-card">📿 Rudraksh</div>
          <div className="category-card">🌼 Hawan Samagri</div>

        </div>

      </section>

      {/* Best Seller */}

      <section className="best-seller">

        <h2>🔥 Best Selling Products</h2>

        <div className="best-grid">

          <div className="best-card">
            <h3>Kapoor Bheem Seni</h3>
            <p>₹199</p>
            <button>Buy Now</button>
          </div>

          <div className="best-card">
            <h3>Pooja Ghee</h3>
            <p>₹499</p>
            <button>Buy Now</button>
          </div>

          <div className="best-card">
            <h3>Rudraksh Mala</h3>
            <p>₹599</p>
            <button>Buy Now</button>
          </div>

        </div>

      </section>

    </>
  );
}