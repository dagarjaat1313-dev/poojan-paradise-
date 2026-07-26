import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-left">

          <span className="hero-tag">
            ✨ Premium Pooja Essentials
          </span>

          <h1>
            Bring Divine Energy
            <br />
            <span className="red">
              Poojan Paradise
            </span>
          </h1>

          <p>
            Discover premium pooja samagri crafted with
            purity, devotion and tradition for every ritual.
          </p>

          <div className="hero-buttons">

            <button className="shop-btn">
              🛍 Shop Now
            </button>

            <button className="explore-btn">
              ✨ Explore Collection
            </button>

          </div>


          <div className="trust-points">

            <span>🪔 Pure Products</span>
            <span>🌸 Premium Quality</span>
            <span>🚚 Fast Delivery</span>

          </div>

        </div>


        <div className="hero-right">

          <div className="image-frame">

            <img
              src="/images/hero.jpg"
              alt="Poojan Paradise"
            />

          </div>

        </div>

      </section>


      <section className="categories">

        <h2>
          Popular Categories
        </h2>


        <div className="category-grid">

          <div className="category-card">
            🪔 Diyas
          </div>

          <div className="category-card">
            🔥 Kapoor
          </div>

          <div className="category-card">
            🌸 Dhoop
          </div>

          <div className="category-card">
            🧴 Pooja Oil
          </div>

          <div className="category-card">
            📿 Rudraksh
          </div>

          <div className="category-card">
            🌼 Hawan Samagri
          </div>

        </div>

      </section>

    </>
  );
}