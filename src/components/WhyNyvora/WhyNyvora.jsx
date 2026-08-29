import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./WhyNyvora.css";
const points = [
  [
    "01",
    "Professional approach",
    "Legal matters are approached with attention to facts, documents and applicable law.",
  ],
  [
    "02",
    "Document-focused practice",
    "Particular attention is given to examination and organisation of legal and property documents.",
  ],
  [
    "03",
    "Clear communication",
    "Legal issues are explained to help clients understand their position and available options.",
  ],
  [
    "04",
    "Confidentiality",
    "Client information and documents are handled with professional confidentiality, subject to applicable law and professional obligations.",
  ],
];
export default function WhyNyvora() {
  return (
    <section className="why">
      <div className="why-bg-detail">
        <span className="why-detail-circle" />
        <span className="why-detail-line why-detail-line-one" />
        <span className="why-detail-line why-detail-line-two" />
        <span className="why-detail-mark">NEEM LEGAL · 04</span>
      </div>
      <div className="container why-container">
        <motion.div
          className="why-visual"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=88"
              alt="Legal documents and law books"
            />
            <div className="why-image-overlay" />
            <div className="why-image-top">
              <span>NEEM LEGAL</span>
              <span>BENGALURU</span>
            </div>
            <div className="why-image-bottom">
              <span>OUR APPROACH</span>
              <h3>
                Practical legal
                <br />
                <em>assistance.</em>
              </h3>
            </div>
          </div>
          <div className="why-gold-detail" />
          <div className="why-side-note">
            <span>LEGAL PRACTICE</span>
            <strong>KARNATAKA</strong>
          </div>
        </motion.div>
        <motion.div
          className="why-content"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="why-eyebrow">
            <span />
            <p>Why NEEM LEGAL</p>
          </div>
          <h2>
            Professional.
            <br />
            <em>Practical. Clear.</em>
          </h2>
          <p className="why-description">
            The practice focuses on careful examination, legal research and
            analysis, structured drafting, property scrutiny, practical
            solutions, professional communication and confidential handling of
            client information.
          </p>
          <div className="why-list">
            {points.map(([n, t, d]) => (
              <div className="why-item" key={n}>
                <div className="why-number">{n}</div>
                <div className="why-item-content">
                  <div className="why-item-heading">
                    <strong>{t}</strong>
                    <span>↗</span>
                  </div>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="why-link">
            Learn about NEEM LEGAL <b>↗</b>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
