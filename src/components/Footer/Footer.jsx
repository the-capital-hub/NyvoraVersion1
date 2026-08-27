import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* SUBTLE BACKGROUND */}
      <div className="footer-bg-word">NYVORA</div>
      <div className="footer-ring" />

      <div className="container">
        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              NYVORA
            </Link>

            <div className="footer-tagline">
              <span />
              <p>Law · Intelligence · Justice</p>
            </div>

            <p className="footer-description">
              Modern legal counsel built around clarity, strategy and trust.
              Thoughtful representation for individuals, families, founders
              and businesses across India.
            </p>

            <Link to="/consultation" className="footer-cta">
              <span>Book a Consultation</span>
              <b>↗</b>
            </Link>
          </div>

          {/* EXPLORE */}
          <div className="footer-col">
            <span className="footer-col-number">01</span>

            <h3>Explore</h3>

            <Link to="/about">About</Link>
            <Link to="/practice-areas">Practice Areas</Link>
            <Link to="/attorneys">Attorneys</Link>
            <Link to="/case-results">Case Results</Link>
          </div>

          {/* RESOURCES */}
          <div className="footer-col">
            <span className="footer-col-number">02</span>

            <h3>Resources</h3>

            <Link to="/insights">Legal Insights</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/consultation?ai=1">NYVORA AI</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* CONNECT */}
          <div className="footer-col footer-connect">
            <span className="footer-col-number">03</span>

            <h3>Connect</h3>

            <a href="mailto:hello@nyvora.example">
              hello@nyvora.example
            </a>

            <a href="tel:+910000000000">
              +91 00000 00000
            </a>

            <div className="footer-socials">

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

</div>

            <div className="footer-location">
              <span className="footer-location-dot" />

              <div>
                <strong>New Delhi</strong>
                <small>India</small>
              </div>
            </div>
          </div>
        </div>



        {/* BOTTOM */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 NYVORA. All rights reserved.
          </span>

          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <i>•</i>
            <Link to="/terms">Terms</Link>
            <i>•</i>
            <Link to="/disclaimer">Legal Disclaimer</Link>
          </div>

          <span className="footer-india">
            LEGAL COUNSEL · INDIA
          </span>
        </div>
      </div>
    </footer>
  );
}