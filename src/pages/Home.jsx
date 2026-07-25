import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="tag">✨ Premium Pooja Essentials</span>

<h1 className="brand-name">
  Poojan Paradise
</h1>

          <p>
            Pure, authentic and premium pooja samagri for every ritual and
            every festival.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Shop Now</button>
            <button className="secondary-btn">Explore</button>
          </div>
        </div>

        <div className="hero-image">
  <img
    src="https://images.unsplash.com/photo-1604608672516-7d3b7aef5f31"
    alt="Pooja Thali Diya"
  />
</div>
         
      </section>

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
    </>
  );
}