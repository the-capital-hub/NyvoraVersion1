import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Signature.css";

const rows = [
  [
    "01",
    "DISCOVER",
    "Understand the facts, objectives and context.",
  ],
  [
    "02",
    "ASSESS",
    "Identify risks, priorities and legal options.",
  ],
  [
    "03",
    "STRATEGISE",
    "Build a focused approach around your goals.",
  ],
  [
    "04",
    "REPRESENT",
    "Act with preparation, precision and discretion.",
  ],
  [
    "05",
    "RESOLVE",
    "Move toward the strongest practical outcome.",
  ],
];

export default function Signature() {
  return (
    <section className="signature">
      <div className="signature-bg">NYVORA</div>

      <div className="container signature-container">
        {/* HEADER */}
        <motion.div
          className="signature-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="signature-label">
            <span />
            <p>The NYVORA Method</p>
          </div>

          <div className="signature-heading">
            <h2>
              Our thinking,
              <br />
              <em>by design.</em>
            </h2>

            <div className="signature-intro">
              <span>THE PRINCIPLE</span>
              <p>
                From the first conversation to the final resolution, every
                stage is designed to reduce uncertainty and keep you moving.
              </p>
            </div>
          </div>
        </motion.div>

        {/* METHOD */}
        <div className="signature-list">
          {rows.map(([number, title, description], index) => (
            <motion.div
              className="signature-row"
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="signature-number">
                <span>{number}</span>
              </div>

              <div className="signature-title">
                <h3>{title}</h3>
              </div>

              <div className="signature-description">
                <p>{description}</p>
              </div>

              <div className="signature-arrow">↗</div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="signature-footer">
          <div className="signature-footer-mark">
            <span>05</span>
            <p>Steps. One clear direction.</p>
          </div>

          <Link to="/about" className="signature-button">
            <span>Our Approach</span>
            <b>↗</b>
          </Link>
        </div>
      </div>
    </section>
  );
}