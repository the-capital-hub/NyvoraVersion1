import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Introduction.css";

const values = [
  {
    number: "01",
    title: "Strategic Counsel",
    text: "Advice shaped around your objectives.",
  },
  {
    number: "02",
    title: "Client First",
    text: "Clear communication at every stage.",
  },
  {
    number: "03",
    title: "India Focused",
    text: "Legal insight grounded in local context.",
  },
];

export default function Introduction() {
  return (
    <section className="intro">
      {/* Very subtle background detail */}
      

      <div className="container intro-container">

        {/* TOP BAR */}
        <motion.div
          className="intro-top"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="intro-label">
            <span className="intro-label-line" />
            <span>The Nyvora Approach</span>
          </div>

          <span className="intro-location">
            Legal Counsel · India
          </span>
        </motion.div>


        {/* MAIN INTRO */}
        <div className="intro-main">

          {/* LEFT HEADING */}
          <motion.div
            className="intro-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="intro-overline">
              Counsel with purpose
            </p>

            <h2>
              Legal expertise
              <br />
              should feel
              <br />
              <em>clear.</em>
            </h2>

            <div className="intro-heading-line" />
          </motion.div>


          {/* RIGHT CONTENT */}
          <motion.div
            className="intro-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="intro-description">
              When the stakes are high, clarity matters.
              NYVORA combines experienced counsel,
              strategic thinking and technology-enabled
              service to make complex legal matters easier
              to understand and decisions easier to make.
            </p>

            <div className="intro-values">
              {values.map((value) => (
                <div
                  className="intro-value"
                  key={value.number}
                >
                  <span className="intro-value-number">
                    {value.number}
                  </span>

                  <div className="intro-value-content">
                    <strong>{value.title}</strong>
                    <p>{value.text}</p>
                  </div>

                  <span className="intro-value-arrow">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="intro-link"
            >
              <span>Discover our story</span>
              <b>↗</b>
            </Link>
          </motion.div>
        </div>


        {/* IMAGE */}
        <motion.div
          className="intro-visual"
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 0.95,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="intro-image-wrap">

            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=90"
              alt="Legal books representing legal expertise"
            />

            <div className="intro-image-overlay" />

            <div className="intro-image-top">
              <span>NYVORA</span>
              <span>02 / 06</span>
            </div>

            <div className="intro-image-caption">
              <span>OUR PHILOSOPHY</span>

              <h3>
                Understand
                <br />
                before you <em>act.</em>
              </h3>
            </div>

            <div className="intro-image-corner" />
          </div>

          <div className="intro-gold-bar" />
        </motion.div>

      </div>
    </section>
  );
}