import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CaseResults.css";

const matters = [
  {
    number: "01",
    category: "Corporate & Commercial",
    type: "Commercial Dispute",
    title: "Strategic resolution of a high-stakes contractual dispute.",
    challenge:
      "A complex contractual disagreement involving commercial obligations and significant business interests.",
    approach:
      "Detailed contract review, negotiation strategy and structured commercial discussions.",
    outcome:
      "Favourable negotiated resolution while protecting the client's wider commercial position.",
  },
  {
    number: "02",
    category: "Civil Litigation",
    type: "Property & Commercial Claim",
    title: "Protecting a client's position through focused litigation strategy.",
    challenge:
      "A contested matter involving ownership, contractual rights and competing claims.",
    approach:
      "Evidence-led preparation combined with focused pleadings and procedural strategy.",
    outcome:
      "The client's legal position was successfully protected through the proceedings.",
  },
  {
    number: "03",
    category: "Technology & Cyber Law",
    type: "Technology Advisory",
    title: "Building a legal framework for a growing technology business.",
    challenge:
      "A technology company required clarity around contracts, data responsibilities and regulatory exposure.",
    approach:
      "Legal risk assessment, contract restructuring and practical compliance guidance.",
    outcome:
      "A clearer legal framework supporting continued business growth and risk management.",
  },
];

export default function CaseResults() {
  return (
    <main className="case-results-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="case-hero">

        <div className="case-hero-orbit" />

        <div className="container case-hero-inner">

          <motion.div
            className="case-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >

            <div className="case-eyebrow">
              <span />
              <p>Selected Matters · India</p>
            </div>

            <h1>
              Experience that
              <br />
              <em>speaks quietly.</em>
            </h1>

            <p>
              Selected matters reflecting how careful preparation,
              strategic thinking and practical legal judgment can
              shape meaningful outcomes.
            </p>

          </motion.div>

          <div className="case-hero-side">
            <span>NYVORA</span>

            <div className="case-hero-seal">
              <b>N</b>
            </div>

            <small>LEGAL COUNSEL</small>
            <small>NEW DELHI · INDIA</small>
          </div>

        </div>

        <div className="case-hero-bottom">
          <span>01 — CASE RESULTS</span>
          <span>SELECTED MATTERS</span>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="case-intro-section">

        <div className="container case-intro-grid">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >

            <div className="case-section-label">
              <span />
              <p>The Work</p>
            </div>

            <h2>
              Strategy behind
              <br />
              <em>the outcome.</em>
            </h2>

          </motion.div>


          <motion.div
            className="case-intro-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >

            <p>
              Legal work is rarely defined by a single moment. The
              strongest outcomes are often built through preparation,
              careful analysis and decisions made long before the
              final stage of a matter.
            </p>

            <p>
              The matters below are presented in a generalised form
              to respect client confidentiality and professional
              obligations.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          MATTERS
      ===================================================== */}

      <section className="case-matters">

        <div className="container">

          <div className="case-matters-head">

            <div className="case-section-label">
              <span />
              <p>Representative Matters</p>
            </div>

            <span className="case-matters-count">
              03 / SELECTED
            </span>

          </div>


          <div className="case-list">

            {matters.map((matter, index) => (
              <motion.article
                className="case-matter"
                key={matter.number}
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

                <div className="case-matter-number">
                  {matter.number}
                </div>


                <div className="case-matter-main">

                  <div className="case-matter-top">

                    <span className="case-matter-category">
                      {matter.category}
                    </span>

                    <span className="case-matter-type">
                      {matter.type}
                    </span>

                  </div>

                  <h3>
                    {matter.title}
                  </h3>

                  <div className="case-matter-details">

                    <div>
                      <span>Challenge</span>
                      <p>{matter.challenge}</p>
                    </div>

                    <div>
                      <span>Approach</span>
                      <p>{matter.approach}</p>
                    </div>

                    <div>
                      <span>Outcome</span>
                      <p>{matter.outcome}</p>
                    </div>

                  </div>

                </div>


                <div className="case-matter-arrow">
                  ↗
                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONFIDENTIALITY
      ===================================================== */}

      <section className="case-confidential-section">

        <div className="container case-confidential-grid">

          <div className="case-confidential-mark">
            <span>✦</span>
          </div>

          <div>

            <div className="case-section-label case-light-label">
              <span />
              <p>Confidentiality</p>
            </div>

            <h2>
              Good legal work
              <br />
              <em>respects privacy.</em>
            </h2>

          </div>


          <div className="case-confidential-copy">

            <p>
              Client confidentiality is fundamental to professional
              legal practice. For that reason, identifying details,
              sensitive documents and commercially confidential
              information are not disclosed on this page.
            </p>

            <p>
              The matters shown here are illustrative descriptions
              intended to communicate the nature of our approach,
              rather than disclose confidential client information.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="case-approach">

        <div className="container">

          <div className="case-approach-heading">

            <div className="case-section-label">
              <span />
              <p>Our Method</p>
            </div>

            <h2>
              From legal issue
              <br />
              <em>to clear direction.</em>
            </h2>

          </div>


          <div className="case-approach-grid">

            <div>
              <span>01</span>

              <h3>Understand</h3>

              <p>
                We begin by understanding the facts, documents,
                objectives and practical circumstances surrounding
                the matter.
              </p>
            </div>


            <div>
              <span>02</span>

              <h3>Assess</h3>

              <p>
                The legal position, available options, risks and
                commercial realities are carefully evaluated.
              </p>
            </div>


            <div>
              <span>03</span>

              <h3>Act</h3>

              <p>
                A focused strategy is developed around the client's
                objectives and the most practical course forward.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="case-cta">

        <div className="case-cta-orbit" />

        <div className="container case-cta-inner">

          <div className="case-section-label case-light-label">
            <span />
            <p>Discuss Your Matter</p>
          </div>

          <h2>
            Your matter deserves
            <br />
            <em>careful strategy.</em>
          </h2>

          <p>
            Tell us what you are dealing with. We can help you
            understand the legal position and identify the right
            next step.
          </p>

          <Link
            to="/consultation"
            className="case-cta-button"
          >
            <span>Book a Consultation</span>
            <b>↗</b>
          </Link>

          <div className="case-cta-bottom">
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