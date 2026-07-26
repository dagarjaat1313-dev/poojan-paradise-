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
            Welcome to <br />
            <span className="red">Poojan Paradise</span>
          </h1>

          <p>
            Pure • Authentic • Divine <br />
            Premium Pooja Samagri for every ritual and every festival.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">🛍 Shop Now</button>
            <button className="explore-btn">✨ Explore</button>
          </div>

        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1604608672516-7d3b7aef5f31"
            alt="Pooja Diya"
          />
        </div>

      </section>
    </>
  );
}