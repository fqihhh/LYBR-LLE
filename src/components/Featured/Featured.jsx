import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="title">Featured Collections</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi
          cras augue egestas dictum habitasse. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Viverra morbi cras augue egestas dictum
          habitasse.
        </p>

        <div className="collections">
          <div className="collection-item">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=600&q=80"
              alt="T-Shirts"
            />
            <span className="label">T-Shirts</span>
          </div>

          <div className="collection-item small">
            <img
              src="https://images.unsplash.com/photo-1593032465171-8ce12da6e8c9?auto=format&fit=crop&w=600&q=80"
              alt="Shirts"
            />
            <span className="label arrow">Shirts ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
