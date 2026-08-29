import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Attorneys.css";

const practiceAreas = [
  "Civil Law",
  "Criminal Law",
  "Property & Real Estate",
  "Title Verification",
  "Legal Scrutiny",
  "Legal Drafting",
  "Legal Notices",
  "Family Law",
  "High Court Matters",
  "Corporate & Commercial",
  "Legal Consultation",
];

const values = [
  {
    number: "01",
    title: "Professional Approach",
    text: "A professional and structured approach to each legal matter.",
  },
  {
    number: "02",
    title: "Document-Focused Practice",
    text: "Careful attention to documents, records and relevant facts.",
  },
  {
    number: "03",
    title: "Clear Communication",
    text: "Clear explanation of legal options and considerations.",
  },
  {
    number: "04",
    title: "Confidentiality",
    text: "Client information and legal matters are handled with appropriate confidentiality.",
  },
];

export default function Attorneys() {
  return (
    <section className="attorneys">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="attorneys-bg-word" aria-hidden="true">
        COUNSEL
      </div>

      <div className="attorneys-bg-circle" aria-hidden="true" />

      <div className="container attorneys-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.header
          className="attorneys-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >

          <div className="attorneys-heading">

            <div className="attorneys-eyebrow">
              <span />
              <p>The Advocate</p>
            </div>

            <h1>
              Adv. SHOBHA.H.K
              <br />
              <em>NEEM LEGAL.</em>
            </h1>

          </div>

          <div className="attorneys-intro">

            <span>PROFESSIONAL PROFILE</span>

            <p>
              Advocate practising in Bengaluru, Karnataka, with
              professional interests across civil and criminal matters,
              property and real estate law, legal documentation,
              legal scrutiny, family matters, commercial matters and
              litigation-related services.
            </p>

            <div className="attorneys-india">
              <i />
              <strong>Bengaluru · Karnataka</strong>
            </div>

          </div>

        </motion.header>


        {/* =====================================================
            ADVOCATE PROFILE
        ===================================================== */}

        <motion.article
          className="attorney-feature"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >

          {/* IMAGE */}

          <div className="attorney-feature-image">

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=88"
              alt="Professional legal office"
            />

            <div className="attorney-image-overlay" />

            <div className="attorney-image-frame" />

            <span className="attorney-image-number">
              01
            </span>

            <div className="attorney-image-label">
              <span>NEEM LEGAL</span>
              <span>BENGALURU · KARNATAKA</span>
            </div>

          </div>


          {/* CONTENT */}

          <div className="attorney-feature-content">

            <div className="attorney-feature-top">
              <span>ADVOCATE</span>
              <span>01 / PROFILE</span>
            </div>

            <h2>
              Adv. SHOBHA.H.K
            </h2>

            <p className="attorney-feature-lead">
              Legal practice focused on professional legal assistance,
              documentation, scrutiny, consultation and representation
              according to the nature of the matter and the client's
              instructions.
            </p>


            <div className="attorney-location">

              <span />

              <div>
                <small>PLACE OF PRACTICE</small>
                <strong>Bengaluru, Karnataka</strong>
              </div>

            </div>


            <div className="attorney-profile-line" />


            <div className="attorney-profile-bottom">

              <div className="attorney-practice-copy">

                <small>AREAS OF PRACTICE</small>

                <p>
                  Civil · Criminal · Property
                  <br />
                  Legal Drafting · Litigation
                </p>

              </div>

              <Link
                to="/contact"
                className="attorney-contact-link"
              >
                <span>Discuss a Matter</span>
                <b>↗</b>
              </Link>

            </div>

          </div>

        </motion.article>


        {/* =====================================================
            PRACTICE AREAS
        ===================================================== */}

        <section className="attorneys-practice">

          <div className="attorneys-section-heading">

            <div className="attorneys-eyebrow">
              <span />
              <p>Areas of Practice</p>
            </div>

            <h2>
              Legal matters handled
              <br />
              <em>with clarity.</em>
            </h2>

            <p className="attorneys-section-copy">
              Professional legal assistance across a range of
              civil, criminal, property, documentation and
              commercial matters.
            </p>

          </div>


          <div className="practice-list">

            {practiceAreas.map((area, index) => (
              <div
                className="practice-list-item"
                key={area}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{area}</p>

                <b>↗</b>

              </div>
            ))}

          </div>

        </section>


        {/* =====================================================
            PROFESSIONAL APPROACH
        ===================================================== */}

        <section className="attorneys-philosophy">

          <div className="philosophy-label">
            <span />
            <p>Professional Approach</p>
          </div>

          <div className="philosophy-grid">

            <div className="philosophy-heading">

              <h2>
                Facts first.
                <br />
                <em>Law with clarity.</em>
              </h2>

            </div>

            <div className="philosophy-copy">

              <p>
                Legal matters are approached with attention to the
                facts, relevant documents and applicable law. The
                objective is to provide clear legal assistance based
                on the nature of the matter and the client's
                instructions.
              </p>

              <div className="philosophy-signature">

                <span />

                <div>
                  <strong>Adv. SHOBHA.H.K</strong>
                  <small>NEEM LEGAL · BENGALURU</small>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY NEEM LEGAL
        ===================================================== */}

        <section className="attorneys-values">

          <div className="attorneys-values-head">

            <div className="attorneys-eyebrow">
              <span />
              <p>Why NEEM LEGAL</p>
            </div>

            <h2>
              A professional approach
              <br />
              <em>to every matter.</em>
            </h2>

          </div>


          <div className="values-grid">

            {values.map((value, index) => (
              <motion.article
                className="value-card"
                key={value.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >

                <span className="value-number">
                  {value.number}
                </span>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

              </motion.article>
            ))}

          </div>

        </section>


        {/* =====================================================
            FOOTER CTA
        ===================================================== */}

        <div className="attorneys-footer">

          <div className="attorneys-footer-copy">

            <span>01</span>

            <p>
              Professional legal assistance
            </p>

          </div>

          <Link
            to="/contact"
            className="attorneys-footer-link"
          >
            <span>Contact NEEM LEGAL</span>
            <b>↗</b>
          </Link>

        </div>

      </div>
    </section>
  );
}