import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      {/* SUBTLE BACKGROUND */}
      <div className="cta-glow" />
      <div className="cta-orbit cta-orbit-one" />
      <div className="cta-orbit cta-orbit-two" />

      {/* BRAND MARK */}
      <div className="cta-brand-mark">
        <span>NYVORA</span>
        <small>LEGAL · INDIA</small>
      </div>

      <motion.div
        className="container cta-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      >
        {/* EYEBROW */}
        <div className="cta-eyebrow">
          <span />
          <p>Start a Conversation</p>
          <span />
        </div>

        {/* HEADING */}
        <h2>
          Let’s discuss <em>your legal matter.</em>
        </h2>

        {/* DESCRIPTION */}
        <p className="cta-description">
          Tell us what you need help with. We’ll listen carefully and guide you
          toward the right next step with clarity and discretion.
        </p>

        {/* ACTIONS */}
        <div className="cta-actions">
          <Link to="/consultation" className="cta-primary">
            <span>Book a Consultation</span>
            <b>↗</b>
          </Link>

          <Link to="/contact" className="cta-secondary">
            <span>Contact our office</span>
            <b>→</b>
          </Link>
        </div>

        {/* BOTTOM */}
        <div className="cta-bottom">
          <span>CONFIDENTIAL</span>

          <i />

          <span>STRATEGIC</span>

          <i />

          <span>CLIENT FOCUSED</span>
        </div>
      </motion.div>
    </section>
  );
}