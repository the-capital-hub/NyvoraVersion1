import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Attorneys.css";

const people = [
  {
    slug: "arjun-pratap",
    name: "Adv. Arjun Pratap",
    role: "Senior Advocate",
    practice: "Corporate & Commercial",
    location: "New Delhi · India",
    image:
      "https://t3.ftcdn.net/jpg/12/09/55/22/360_F_1209552279_3D78R1gAqFzErnHy0cwaa7BA0RweQp4Z.jpg",
    intro:
      "Advises businesses, founders and institutions on corporate strategy, commercial transactions and complex legal matters.",
  },
  {
    slug: "meera-sharma",
    name: "Adv. Meera Sharma",
    role: "Partner",
    practice: "Civil & Commercial Litigation",
    location: "New Delhi · India",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnXtK2u_vr29HcLPHDAA91BUf9iUbM6yWCeC-_2L9IA&s=10",
    intro:
      "Focuses on civil and commercial disputes with an emphasis on preparation, strategy and practical resolution.",
  },
  {
    slug: "raghav-sinha",
    name: "Adv. Raghav Sinha",
    role: "Senior Counsel",
    practice: "Technology & Cyber Law",
    location: "New Delhi · India",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYED4clCQRMsRgk-vOVhcvT8KZb-U5oSVJbkP0kXv1nNqD0Otr9GV8Zt0&s=10",
    intro:
      "Works with technology-driven businesses on cyber law, digital regulation, contracts and emerging legal risks.",
  },
];

const principles = [
  {
    number: "01",
    title: "Preparation",
    text: "Every matter deserves careful preparation before action is taken.",
  },
  {
    number: "02",
    title: "Discretion",
    text: "Sensitive matters require confidentiality, restraint and professional judgment.",
  },
  {
    number: "03",
    title: "Strategy",
    text: "Legal knowledge becomes valuable when it is turned into a clear course of action.",
  },
];

export default function Attorneys() {
  return (
    <main className="attorneys-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="attorneys-hero">
        <div className="attorneys-hero-orbit" />

        <div className="container attorneys-hero-inner">

          <motion.div
            className="attorneys-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="attorneys-eyebrow">
              <span />
              <p>The Counsel · India</p>
            </div>

            <h1>
              Advocates behind
              <br />
              <em>the strategy.</em>
            </h1>

            <p className="attorneys-hero-copy">
              Meet the people behind NYVORA — a multidisciplinary legal
              team focused on preparation, sound judgment and practical
              representation.
            </p>

            <div className="attorneys-hero-meta">
              <span>NYVORA</span>
              <i />
              <span>LEGAL COUNSEL</span>
              <i />
              <span>NEW DELHI</span>
            </div>
          </motion.div>

          <motion.div
            className="attorneys-hero-mark"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="attorneys-seal">
              <span>N</span>
            </div>

            <small>NYVORA</small>
            <small>LEGAL COUNSEL</small>
          </motion.div>

        </div>

        <div className="attorneys-hero-bottom">
          <span>01 — ATTORNEYS</span>
          <span>COUNSEL · INDIA</span>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
{/* 
      <section className="attorneys-intro">
        <div className="container attorneys-intro-grid">

          <motion.div
            className="attorneys-intro-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="attorneys-section-label">
              <span />
              <p>The NYVORA Counsel</p>
            </div>

            <h2>
              Indian legal
              <br />
              <em>perspective.</em>
            </h2>
          </motion.div>


          <motion.div
            className="attorneys-intro-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <p>
              Every matter begins with understanding. Our counsel considers
              the legal position, the facts, the people involved and the
              practical outcome the client is seeking.
            </p>

            <div className="attorneys-india-note">
              <span>✦</span>

              <div>
                <strong>Advocates & Legal Counsel</strong>

                <small>
                  Preparation · Strategy · Representation
                </small>
              </div>
            </div>
          </motion.div>

        </div>
      </section> */}


      {/* =====================================================
          ATTORNEYS DIRECTORY
      ===================================================== */}

      <section className="attorneys-directory">
        <div className="container">

          <div className="attorneys-directory-head">

            <div>
              <div className="attorneys-section-label">
                <span />
                <p>Our Advocates</p>
              </div>

              <h2>
                Counsel built around
                <br />
                <em>your matter.</em>
              </h2>
            </div>

            <span className="attorneys-count">
              03 / ADVOCATES
            </span>

          </div>


          <div className="attorneys-grid">

            {people.map((person, index) => (
              <motion.article
                className="attorney-card"
                key={person.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >

                <Link
                  to={`/attorneys/${person.slug}`}
                  className="attorney-image-link"
                >
                  <div className="attorney-image">

                    <img
                      src={person.image}
                      alt={person.name}
                    />

                    <div className="attorney-image-shade" />

                    <div className="attorney-image-top">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>NYVORA</span>
                    </div>

                    <div className="attorney-image-bottom">
                      <span>{person.role}</span>

                      <b>↗</b>
                    </div>

                  </div>
                </Link>


                <div className="attorney-card-content">

                  <div className="attorney-card-role">
                    {person.practice}
                  </div>

                  <h3>{person.name}</h3>

                  <div className="attorney-card-location">
                    <span />
                    {person.location}
                  </div>

                  <p>{person.intro}</p>

                  <Link
                    to={`/attorneys/${person.slug}`}
                    className="attorney-profile-link"
                  >
                    <span>View profile</span>
                    <b>↗</b>
                  </Link>

                </div>

              </motion.article>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="attorneys-philosophy">

        <div className="container attorneys-philosophy-grid">

          <div className="attorneys-philosophy-heading">

            <div className="attorneys-dark-label">
              <span />
              <p>Our Approach</p>
            </div>

            <h2>
              Preparation
              <br />
              before
              <br />
              <em>representation.</em>
            </h2>

          </div>


          <div className="attorneys-philosophy-copy">

            <p>
              Strong advocacy begins long before entering a courtroom or
              negotiating across a table. We believe in understanding the
              documents, evidence, legal position and practical realities
              first.
            </p>

            <p>
              Our objective is not simply to respond to a legal issue,
              but to build a considered strategy around it.
            </p>

            <div className="attorneys-philosophy-rule">
              <span />
              <p>Preparation creates perspective.</p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="attorneys-values">

        <div className="container">

          <div className="attorneys-values-heading">

            <div className="attorneys-section-label">
              <span />
              <p>The Standard</p>
            </div>

            <h2>
              Experience.
              <br />
              <em>Judgment.</em>
            </h2>

          </div>


          <div className="attorneys-values-list">

            {principles.map((item, index) => (
              <motion.div
                className="attorneys-value"
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >

                <span className="attorneys-value-number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="attorneys-value-arrow">
                  ↗
                </span>

              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="attorneys-cta">

        <div className="container attorneys-cta-inner">

          <div className="attorneys-section-label">
            <span />
            <p>Start a Conversation</p>
            <span />
          </div>

          <h2>
            Need the right
            <br />
            <em>legal counsel?</em>
          </h2>

          <p>
            Tell us what you are dealing with. We will listen,
            understand the matter and help identify the right next step.
          </p>

          <Link
            to="/consultation"
            className="attorneys-cta-button"
          >
            <span>Book a Consultation</span>
            <b>↗</b>
          </Link>

          <div className="attorneys-cta-bottom">
            <span>PRIVATE</span>
            <i />
            <span>CONFIDENTIAL</span>
            <i />
            <span>STRATEGIC</span>
          </div>

        </div>
      </section>

    </main>
  );
}