import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Consultation.css";

const steps = [
  [
    "01",
    "Initial Discussion",
    "Understanding the client's legal concern, facts and the nature of the matter.",
  ],
  [
    "02",
    "Document Review",
    "Examining relevant documents and records where appropriate.",
  ],
  [
    "03",
    "Legal Analysis",
    "Identifying applicable provisions, issues and possible courses of action.",
  ],
  [
    "04",
    "Legal Guidance",
    "Explaining available legal options and procedural considerations.",
  ],
  [
    "05",
    "Documentation / Representation",
    "Where required and agreed, preparing legal documents or taking appropriate legal steps.",
  ],
];

const prepare = [
  "Brief description of the legal matter",
  "Relevant documents and records",
  "Important dates or events",
  "Previous notices or correspondence, where applicable",
];

export default function Consultation() {
  return (
    <main className="consultation-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="consultation-hero">

        <div className="consultation-hero-detail">
          <span />
          <span />
          <span />
        </div>

        <div className="container consultation-hero-inner">

          <motion.div
            className="consultation-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <div className="consultation-eyebrow">
              <span />
              <p>Consultation · NEEM LEGAL</p>
            </div>

            <h1>
              Let’s understand
              <br />
              <em>your matter.</em>
            </h1>

            <p>
              A legal consultation generally begins with understanding
              the client's facts, reviewing relevant documents and
              identifying the legal issues involved.
            </p>

            <div className="consultation-hero-meta">
              <span>ADV. SHOBHA.H.K</span>
              <i />
              <span>BENGALURU · KARNATAKA</span>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="consultation-section">

        <div className="container consultation-layout">

          {/* SIDEBAR */}

          <motion.aside
            className="consultation-sidebar"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="consultation-sidebar-label">
              <span />
              <p>Consultation Process</p>
            </div>

            <h2>
              Five steps.
              <br />
              <em>One clear direction.</em>
            </h2>

            <p className="consultation-sidebar-copy">
              The consultation process remains focused on the facts,
              relevant documents, applicable law and the nature of
              the legal matter.
            </p>

          </motion.aside>


          {/* MAIN */}

          <div className="consultation-main">

            {steps.map(([number, title, description], index) => (
              <motion.div
                className="consultation-step"
                key={number}
                initial={{
                  opacity: 0,
                  y: 18,
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
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >

                <span className="consultation-step-number">
                  {number}
                </span>

                <div className="consultation-step-content">

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                </div>

                <span className="consultation-step-arrow">
                  ↗
                </span>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BEFORE CONSULTATION
      ===================================================== */}

      <section className="consultation-preparation">

        <div className="container">

          <div className="consultation-preparation-grid">

            <div className="consultation-preparation-heading">

              <div className="consultation-label">
                <span />
                <p>Before the Consultation</p>
              </div>

              <h2>
                Come prepared.
                <br />
                <em>Start with the facts.</em>
              </h2>

            </div>


            <div className="consultation-preparation-list">

              {prepare.map((item, index) => (
                <div
                  className="consultation-preparation-item"
                  key={item}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="consultation-cta">

        <div className="container">

          <motion.div
            className="consultation-cta-inner"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="consultation-cta-label">
              <span />
              <p>Begin an Enquiry</p>
              <span />
            </div>

            <h2>
              Discuss your
              <br />
              <em>legal matter.</em>
            </h2>

            <p>
              To discuss a legal matter, please contact the office
              and provide a brief description of the matter and
              relevant documents, where appropriate.
            </p>


            <div className="consultation-contact-details">

              <div>
                <small>PHONE</small>
                <a href="tel:+919886112141">
                  9886112141
                </a>
              </div>

              <div>
                <small>EMAIL</small>
                <a href="mailto:attorneyshobha@gmail.com">
                  attorneyshobha@gmail.com
                </a>
              </div>

            </div>


            <div className="consultation-cta-actions">

              <a
                href="tel:+919886112141"
                className="consultation-primary-button"
              >
                <span>Call the Office</span>
                <b>↗</b>
              </a>

              <Link
                to="/contact"
                className="consultation-secondary-button"
              >
                <span>Contact Page</span>
                <b>↗</b>
              </Link>

            </div>


            <div className="consultation-cta-bottom">

              <span>ADV. SHOBHA.H.K</span>

              <i />

              <span>NEEM LEGAL</span>

              <i />

              <span>BENGALURU · KARNATAKA</span>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}