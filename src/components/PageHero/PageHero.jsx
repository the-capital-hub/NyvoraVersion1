import { motion } from "framer-motion";
import "./PageHero.css";

export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="page-hero">
      <div className="page-hero-pattern" />
      <div className="page-hero-glow page-hero-glow-one" />
      <div className="page-hero-glow page-hero-glow-two" />

      <div className="page-hero-side">
        <span>NEEM LEGAL</span>
        <span>LEGAL · BENGALURU</span>
      </div>

      <div className="container page-hero-container">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          <div className="page-hero-eyebrow">
            <span />
            <p>{eyebrow}</p>
          </div>

          <h1 className="display">
            {title}
          </h1>

          <div className="page-hero-bottom">
            <span className="page-hero-line" />

            <p>{copy}</p>

            <span className="page-hero-mark">✦</span>
          </div>
        </motion.div>
      </div>

      <div className="page-hero-number">01</div>
    </section>
  );
}