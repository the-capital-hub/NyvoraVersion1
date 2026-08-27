import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Page.css";

const values = [
  {
    no: "01",
    title: "Clarity",
    text: "We turn complex legal questions into clear, understandable choices.",
  },
  {
    no: "02",
    title: "Strategy",
    text: "Every recommendation begins with the wider objective behind the matter.",
  },
  {
    no: "03",
    title: "Integrity",
    text: "Discretion, honesty and professional responsibility remain central to our work.",
  },
  {
    no: "04",
    title: "Judgment",
    text: "We look beyond the immediate issue to understand risk, timing and consequence.",
  },
];

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">
        <div className="about-hero-line" />

        <div className="container about-hero-inner">

          <motion.div
            className="about-hero-main"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-kicker">
              <span />
              <p>About Nyvora</p>
            </div>

            <h1>
              Legal counsel
              <br />
              <em>with perspective.</em>
            </h1>

            <p className="about-hero-copy">
              A modern Indian legal practice built around clear thinking,
              considered strategy and trusted representation.
            </p>

            <div className="about-hero-meta">
              <span>INDIA</span>
              <i />
              <span>LEGAL COUNSEL</span>
              <i />
              <span>EST. 2026</span>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-side"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <div className="about-emblem">
              <span>N</span>
            </div>

            <p>
              Thoughtful advice
              <br />
              for consequential
              <br />
              decisions.
            </p>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="about-story">
        <div className="container about-story-grid">

          <motion.div
            className="about-story-media"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <a
              href="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=88"
              target="_blank"
              rel="noopener noreferrer"
              className="about-image-link"
            >
              <div className="about-story-image">

                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=88"
                  alt="Legal books and Indian legal heritage"
                />

                <div className="about-image-overlay" />

                <div className="about-image-top">
                  <span>NYVORA</span>
                  <span>01 — OUR STORY</span>
                </div>

                <div className="about-image-bottom">
                  <span>LAW</span>
                  <i />
                  <span>INDIA</span>
                </div>

              </div>
            </a>

            <div className="about-image-caption">
              <span />
              <p>Grounded in the Indian legal tradition</p>
            </div>
          </motion.div>


          <motion.div
            className="about-story-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <div className="about-kicker light">
              <span />
              <p>Our Story</p>
            </div>

            <h2>
              Law should make
              <br />
              decisions <em>clearer.</em>
            </h2>

            <p>
              Nyvora was created around a simple idea: legal advice should
              be practical, understandable and connected to the reality
              of the people and businesses it serves.
            </p>

            <p>
              We begin by understanding the situation before looking for
              the answer. That means considering the legal position alongside
              commercial priorities, personal circumstances, timing and risk.
            </p>

            <p>
              The result is counsel designed not merely to explain the law,
              but to help clients make better decisions with confidence.
            </p>

            <div className="about-story-note">
              <span />
              <p>Clarity before complexity.</p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values">
        <div className="container">

          <div className="about-values-heading">

            <div>
              <div className="about-kicker dark">
                <span />
                <p>Our Principles</p>
              </div>

              <h2>
                What guides
                <br />
                <em>our practice.</em>
              </h2>
            </div>

            <p>
              Strong legal work depends on more than knowledge. It depends
              on how that knowledge is applied.
            </p>

          </div>


          <div className="about-values-list">

            {values.map((value, index) => (
              <motion.div
                className="about-value"
                key={value.no}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <span className="about-value-number">
                  {value.no}
                </span>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

                <span className="about-value-arrow">
                  ↗
                </span>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="about-approach">
        <div className="container about-approach-grid">

          <motion.div
            className="about-approach-content"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-kicker light">
              <span />
              <p>Our Approach</p>
            </div>

            <h2>
              Understand.
              <br />
              Advise.
              <br />
              <em>Act.</em>
            </h2>

            <p>
              Every matter is different. Our approach is therefore designed
              to remain personal, responsive and focused on the outcome that
              actually matters to the client.
            </p>

            <Link
              to="/practice-areas"
              className="about-text-link"
            >
              <span>Explore our practice</span>
              <b>↗</b>
            </Link>

          </motion.div>


          <motion.div
            className="about-approach-panel"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="about-approach-item">
              <span>01</span>
              <div>
                <h3>Understand the matter</h3>
                <p>
                  We first identify the objective, context and legal issues.
                </p>
              </div>
            </div>

            <div className="about-approach-item">
              <span>02</span>
              <div>
                <h3>Assess the options</h3>
                <p>
                  We evaluate the available routes, risks and consequences.
                </p>
              </div>
            </div>

            <div className="about-approach-item">
              <span>03</span>
              <div>
                <h3>Build the strategy</h3>
                <p>
                  We translate analysis into a practical course of action.
                </p>
              </div>
            </div>

            <div className="about-approach-item">
              <span>04</span>
              <div>
                <h3>Move forward</h3>
                <p>
                  We remain focused on execution, communication and results.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CLOSING CTA
      ===================================================== */}

      <section className="about-closing">

        <div className="container about-closing-inner">

          <div className="about-kicker dark">
            <span />
            <p>Start a Conversation</p>
            <span />
          </div>

          <h2>
            Good counsel begins
            <br />
            with <em>understanding.</em>
          </h2>

          <p>
            Tell us what you are dealing with. We will help you understand
            the legal path and identify the right next step.
          </p>

          <Link
            to="/consultation"
            className="about-closing-button"
          >
            <span>Book a Consultation</span>
            <b>↗</b>
          </Link>

          <div className="about-closing-bottom">
            <span>PRIVATE</span>
            <i />
            <span>CONFIDENTIAL</span>
            <i />
            <span>CONSIDERED</span>
          </div>

        </div>

      </section>

    </main>
  );
}