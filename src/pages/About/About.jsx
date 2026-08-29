import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Page.css";

const values = [
  [
    "01",
    "Careful Examination",
    "Careful examination of facts and documents before considering the appropriate legal position.",
  ],
  [
    "02",
    "Legal Research",
    "Relevant legal provisions, issues and available legal considerations are researched and analysed.",
  ],
  [
    "03",
    "Clear Drafting",
    "Legal documents, notices and other required documents are prepared in a clear and structured manner.",
  ],
  [
    "04",
    "Property Scrutiny",
    "Property titles and relevant documents are reviewed to identify potential legal issues.",
  ],
  [
    "05",
    "Issue Identification",
    "Potential legal issues are identified from the facts, documents and circumstances of the matter.",
  ],
  [
    "06",
    "Practical Solutions",
    "The objective is to identify practical and legally appropriate options according to the matter.",
  ],
  [
    "07",
    "Professional Communication",
    "Clients are kept informed about relevant legal considerations and available options.",
  ],
  [
    "08",
    "Confidentiality",
    "Client information and legal matters are handled with appropriate confidentiality.",
  ],
];

const approach = [
  [
    "01",
    "Understand",
    "Understanding the facts, documents and legal concerns presented by the client.",
  ],
  [
    "02",
    "Examine",
    "Reviewing relevant documents, records and available information.",
  ],
  [
    "03",
    "Analyse",
    "Analysing applicable legal provisions and potential legal issues.",
  ],
  [
    "04",
    "Advise",
    "Explaining available legal options and relevant considerations.",
  ],
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
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <div className="about-kicker dark">
              <span />
              <p>About NEEM LEGAL</p>
            </div>

            <h1>
              Professional legal
              <br />
              <em>assistance in Bengaluru.</em>
            </h1>

            <p className="about-hero-copy">
              NEEM LEGAL is a legal practice focused on professional
              legal assistance, legal documentation, property-related
              legal scrutiny, litigation support and advisory services.
            </p>

            <div className="about-hero-meta">
              <span>ADV. SHOBHA.H.K</span>
              <i />
              <span>NEEM LEGAL</span>
              <i />
              <span>BENGALURU</span>
            </div>

          </motion.div>


          <motion.div
            className="about-hero-side"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <div className="about-emblem">
              <span>NL</span>
            </div>

            <p>
              Legal assistance
              <br />
              with clarity.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          THE PRACTICE
      ===================================================== */}

      <section className="about-story">

        <div className="container">

          <div className="about-story-grid">

            <motion.div
              className="about-story-media"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
            >

              <div className="about-story-image">

                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=88"
                  alt="Legal documents and law office"
                />

                <div className="about-image-overlay" />

                <div className="about-image-top">
                  <span>NEEM LEGAL</span>
                  <span>01</span>
                </div>

                <div className="about-image-bottom">
                  <span>ADV. SHOBHA.H.K</span>
                  <i />
                  <span>BENGALURU</span>
                </div>

              </div>

              <div className="about-image-caption">
                <span />
                <p>Professional Legal Practice</p>
              </div>

            </motion.div>


            <motion.div
              className="about-story-content"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: 0.08,
              }}
            >

              <div className="about-kicker light">
                <span />
                <p>The Practice</p>
              </div>

              <h2>
                Understanding the legal position
                <br />
                <em>before taking the next step.</em>
              </h2>

              <p>
                Adv. SHOBHA.H.K is an Advocate practising in Bengaluru,
                Karnataka, with professional interests in civil and
                criminal matters, property and real estate law, legal
                documentation, legal scrutiny, family matters,
                commercial matters and litigation-related services.
              </p>

              <p>
                The objective is to assist clients in understanding
                their legal position and taking informed decisions
                based on the facts and applicable law.
              </p>

              <div className="about-story-note">
                <span />
                <p>
                  Facts · Documents · Applicable Law
                </p>
              </div>

            </motion.div>

          </div>

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
                <p>Our Approach</p>
              </div>

              <h2>
                Careful. Clear.
                <br />
                <em>Practical.</em>
              </h2>

            </div>

            <p>
              The practice remains focused on facts, documents,
              applicable law and clear communication with clients.
            </p>

          </div>


          <div className="about-values-list">

            {values.map(([number, title, text]) => (
              <motion.div
                className="about-value"
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
                }}
              >

                <span className="about-value-number">
                  {number}
                </span>

                <h3>{title}</h3>

                <p>{text}</p>

                <span className="about-value-arrow">
                  ↗
                </span>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEGAL APPROACH
      ===================================================== */}

      <section className="about-approach">

        <div className="container about-approach-grid">

          <motion.div
            className="about-approach-content"
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
          >

            <div className="about-kicker light">
              <span />
              <p>Legal Process</p>
            </div>

            <h2>
              Understand.
              <br />
              <em>Examine.</em>
              <br />
              Advise.
            </h2>

            <p>
              From the initial understanding of a matter to
              documentation or further legal steps, the process
              remains focused on the facts, relevant documents and
              applicable law.
            </p>

            <Link
              to="/practice-areas"
              className="about-text-link"
            >
              <span>Explore Practice Areas</span>
              <b>↗</b>
            </Link>

          </motion.div>


          <div className="about-approach-panel">

            {approach.map(([number, title, text], index) => (
              <motion.div
                className="about-approach-item"
                key={number}
                initial={{
                  opacity: 0,
                  x: 18,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
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

                <span>{number}</span>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="about-closing">

        <div className="container about-closing-inner">

          <div className="about-kicker dark">
            <span />
            <p>Professional Profile</p>
            <span />
          </div>

          <h2>
            Adv. SHOBHA.H.K
          </h2>

          <p>
            Designation: Advocate · Firm: NEEM LEGAL ·
            Place of Practice: Bengaluru, Karnataka
          </p>

          <Link
            to="/contact"
            className="about-closing-button"
          >
            <span>Contact the Office</span>
            <b>↗</b>
          </Link>

          <div className="about-closing-bottom">

            <span>ADV. SHOBHA.H.K</span>

            <i />

            <span>BENGALURU, KARNATAKA</span>

            <i />

            <span>NEEM LEGAL</span>

          </div>

        </div>

      </section>

    </main>
  );
}