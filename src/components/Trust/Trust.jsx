import { motion } from "framer-motion";
import "./Trust.css";

const data = [
  ["15+", "Years of Experience"],
  ["500+", "Matters Guided"],
  ["12", "Practice Areas"],
  ["95%", "Client Satisfaction"],
];

export default function Trust() {
  return (
    <section className="trust">
      <div className="container trust-grid">
        {data.map(([number, label], index) => (
          <motion.div
            className="trust-item"
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="trust-number">
              <span>{number}</span>
            </div>

            <div className="trust-line" />

            <span className="trust-label">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}