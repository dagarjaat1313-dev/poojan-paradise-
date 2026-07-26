import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h2>पूजन Paradise</h2>
          <p>
            Your One Stop Shop For All Pooja Needs.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Customer Care</h3>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2021 Poojan Paradise. All Rights Reserved.
      </div>

    </footer>
  );
}