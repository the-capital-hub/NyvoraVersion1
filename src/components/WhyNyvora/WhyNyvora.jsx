import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./WhyNyvora.css";

const points = [
  [
    "01",
    "Experienced counsel",
    "Deep legal knowledge backed by thoughtful preparation.",
  ],
  [
    "02",
    "Transparent communication",
    "Clear answers and honest communication at every stage.",
  ],
  [
    "03",
    "Strategic, practical thinking",
    "Legal strategy designed around real-world outcomes.",
  ],
  [
    "04",
    "Technology-enabled service",
    "Modern tools supporting a more efficient legal experience.",
  ],
];

export default function WhyNyvora() {
  return (
    <section className="why">
      {/* PREMIUM BACKGROUND DETAIL */}
      <div
        className="why-bg-detail"
        aria-hidden="true"
      >
        <span className="why-detail-circle" />
        <span className="why-detail-line why-detail-line-one" />
        <span className="why-detail-line why-detail-line-two" />
        <span className="why-detail-mark">
          NYVORA · 04
        </span>
      </div>

      <div className="container why-container">

        {/* =================================================
            IMAGE
        ================================================= */}

        <motion.div
          className="why-visual"
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="why-image">

            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=88"
              alt="Law books in a legal library"
              loading="lazy"
            />

            <div className="why-image-overlay" />

            <div className="why-image-top">
              <span>NYVORA</span>
              <span>04 / 06</span>
            </div>

            <div className="why-image-bottom">

              <span>OUR PROMISE</span>

              <h3>
                Human judgment.
                <br />
                <em>Digital precision.</em>
              </h3>

            </div>
          </div>

          <div className="why-gold-detail" />

          <div className="why-side-note">
            <span>LEGAL COUNSEL</span>
            <strong>INDIA</strong>
          </div>
        </motion.div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <motion.div
          className="why-content"
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="why-eyebrow">
            <span />
            <p>Why NYVORA</p>
          </div>

          <h2>
            Complex law.
            <br />
            <em>Clear direction.</em>
          </h2>

          <p className="why-description">
            Good legal counsel should not leave you wondering what happens
            next. We combine preparation, strategy and clear communication to
            help you move forward with confidence.
          </p>


          {/* POINTS */}

          <div className="why-list">

            {points.map(
              ([number, title, description]) => (
                <div
                  className="why-item"
                  key={number}
                >

                  <div className="why-number">
                    {number}
                  </div>

                  <div className="why-item-content">

                    <div className="why-item-heading">

                      <strong>
                        {title}
                      </strong>

                      <span>
                        ↗
                      </span>

                    </div>

                    <p>
                      {description}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>


          {/* CTA */}

          <Link
            to="/about"
            className="why-button"
          >
            <span>
              Discover NYVORA
            </span>

            <b>
              ↗
            </b>
          </Link>

        </motion.div>

      </div>
    </section>
  );
}