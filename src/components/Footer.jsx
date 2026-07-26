import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-box">
        <h2>Poojan Paradise</h2>
        <p>
          Premium pooja samagri for your daily rituals and festivals.
        </p>
      </div>

      <div className="footer-box">
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Shop</p>
        <p>Cart</p>
      </div>

      <div className="footer-box">
        <h3>Payment</h3>
        <p>💳 UPI</p>
        <p>📱 PhonePe</p>
        <p>🔒 Secure Payment</p>
      </div>

      <div className="footer-box">
        <h3>Contact</h3>
        <p>📞 +91 XXXXX XXXXX</p>
        <p>✉️ info@poojanparadise.com</p>
      </div>

    </footer>
  );
}