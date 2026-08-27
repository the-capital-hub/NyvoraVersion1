import { motion } from "framer-motion";
import "./HowWeWork.css";

const steps = [
  [
    "01",
    "Discover",
    "Understand the matter, context and objectives.",
  ],
  [
    "02",
    "Assess",
    "Identify the legal landscape, risks and options.",
  ],
  [
    "03",
    "Strategise",
    "Build a focused approach around your goals.",
  ],
  [
    "04",
    "Represent",
    "Act with preparation, precision and communication.",
  ],
  [
    "05",
    "Resolve",
    "Move toward the strongest practical outcome.",
  ],
];

export default function HowWeWork() {
  return (
    <section className="process">
      {/* PREMIUM BACKGROUND DETAIL */}
      <div
        className="process-bg-detail"
        aria-hidden="true"
      >
        <span className="process-detail-circle" />
        <span className="process-detail-line process-detail-line-one" />
        <span className="process-detail-line process-detail-line-two" />
        <span className="process-detail-mark">
          NYVORA · 05
        </span>
      </div>

      <div className="container process-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="process-head"
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="process-eyebrow">
            <span />
            <p>Our Approach</p>
          </div>

          <div className="process-heading-row">

            <h2>
              A clearer path
              <br />
              through <em>complexity.</em>
            </h2>

            <div className="process-intro">
              <span>05 STEPS</span>

              <p>
                From the first conversation to the final outcome,
                every matter is approached with preparation,
                strategy and purpose.
              </p>
            </div>

          </div>
        </motion.div>


        {/* =================================================
            PROCESS
        ================================================= */}

        <div className="process-track">

          {/* CONNECTING LINE */}

          <div
            className="process-line"
            aria-hidden="true"
          >
            <span />
          </div>


          {steps.map(
            ([number, title, description], index) => (

              <motion.div
                className="process-step"
                key={number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.58,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* NODE */}

                <div className="process-node">
                  <span>{number}</span>
                </div>


                {/* CONTENT */}

                <div className="process-content">

                  <span className="process-small">
                    STEP {number}
                  </span>

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                </div>


                {/* ARROW */}

                <span
                  className="process-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
}