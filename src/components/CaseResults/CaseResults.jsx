import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CaseResults.css";

export default function CaseResults() {
  return (
    <section className="case">
      <div className="case-bg-number">01</div>

      <div className="container case-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="case-intro"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="case-eyebrow">
            <span />
            <p>Selected Matters</p>
          </div>

          <h2>
            Experience that
            <br />
            <em>speaks quietly.</em>
          </h2>

          <p className="case-description">
            We present selected matters as strategic stories while respecting
            client confidentiality and professional obligations.
          </p>

          <Link to="/case-results" className="case-link">
            <span>View Case Results</span>
            <b>↗</b>
          </Link>

          <div className="case-confidential">
            <span>CONFIDENTIALITY</span>
            <p>
              Details are presented in a manner that protects client identity
              and sensitive information.
            </p>
          </div>
        </motion.div>

        {/* CASE CARD */}
        <motion.div
          className="case-card"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
        >
          <div className="case-card-frame" />

          <div className="case-card-top">
            <span>01 / CORPORATE</span>
            <span>FEATURED MATTER</span>
          </div>

          <div className="case-card-content">
            <span className="case-card-label">
              COMMERCIAL DISPUTE
            </span>

            <h3>
              A complex commercial dispute resolved through
              <em> strategic negotiation.</em>
            </h3>

            <div className="case-info">
              <div>
                <small>Challenge</small>
                <b>High-stakes contractual dispute</b>
              </div>

              <div>
                <small>Approach</small>
                <b>Negotiation & commercial strategy</b>
              </div>

              <div>
                <small>Outcome</small>
                <b>Favourable resolution</b>
              </div>
            </div>
          </div>

          <div className="case-card-footer">
            <span>NYVORA · LEGAL INDIA</span>
            <span className="case-arrow">↗</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}