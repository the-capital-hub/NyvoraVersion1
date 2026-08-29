import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you. Please contact the office directly to complete your enquiry."
    );
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-decoration" aria-hidden="true">
          <span className="contact-ring contact-ring-one" />
          <span className="contact-ring contact-ring-two" />
          <span className="contact-cross contact-cross-one" />
          <span className="contact-cross contact-cross-two" />
        </div>

        <div className="container contact-hero-inner">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="contact-eyebrow">
              <span />
              <p>Contact · Bengaluru, Karnataka</p>
            </div>

            <h1>
              Contact
              <br />
              <em>NEEM LEGAL.</em>
            </h1>

            <p className="contact-hero-description">
              To discuss a legal matter, please contact the office and
              provide a brief description of the matter and relevant
              documents, where appropriate.
            </p>

            <div className="contact-hero-meta">
              <span>ADV. SHOBHA.H.K</span>
              <i />
              <span>NEEM LEGAL</span>
              <i />
              <span>BENGALURU</span>
            </div>
          </motion.div>

          <motion.div
            className="contact-hero-mark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div className="contact-seal">
              <span>NL</span>
            </div>

            <small>LEGAL</small>
            <small>COUNSEL</small>
          </motion.div>
        </div>

        <div className="contact-hero-bottom">
          <span>NEEM LEGAL</span>
          <span>LEGAL CONSULTATION</span>
          <span>01 / CONTACT</span>
        </div>
      </section>


      {/* =====================================================
          OFFICE DETAILS
      ===================================================== */}

      <section className="contact-intro">
        <div className="container contact-intro-grid">

          <motion.div
            className="contact-intro-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-section-label">
              <span />
              <p>Office Details</p>
            </div>

            <h2>
              Adv. SHOBHA.H.K
              <br />
              <em>NEEM LEGAL</em>
            </h2>

            <p className="contact-office-description">
              For legal consultation and assistance, please contact
              the office directly using the details provided.
            </p>
          </motion.div>


          <motion.div
            className="contact-details-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
          >

            <div className="contact-detail">
              <div className="contact-detail-label">
                <span>01</span>
                <small>OFFICE</small>
              </div>

              <div className="contact-detail-value">
                <strong>Bengaluru, Karnataka</strong>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-detail-label">
                <span>02</span>
                <small>PHONE</small>
              </div>

              <div className="contact-detail-value">
                <a href="tel:+919886112141">
                  9886112141
                </a>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-detail-label">
                <span>03</span>
                <small>EMAIL</small>
              </div>

              <div className="contact-detail-value">
                <a href="mailto:attorneyshobha@gmail.com">
                  attorneyshobha@gmail.com
                </a>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-detail-label">
                <span>04</span>
                <small>WEBSITE</small>
              </div>

              <div className="contact-detail-value">
                <span>www.neemlegal.com</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONSULTATION FORM
      ===================================================== */}

      <section className="contact-form-section">
        <div className="container">

          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >

            <div className="contact-form-intro">

              <div className="contact-section-label">
                <span />
                <p>Consultation Enquiry</p>
              </div>

              <h2>
                Share a brief
                <br />
                <em>description of your matter.</em>
              </h2>

              <p>
                Please provide a concise description of your legal
                matter and the relevant information. Documents may be
                shared where appropriate.
              </p>

              <div className="contact-form-note">
                <span>✦</span>

                <div>
                  <strong>Clear information helps.</strong>
                  <small>
                    Please provide relevant facts and documents where
                    appropriate.
                  </small>
                </div>
              </div>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-top">
                <span>ENQUIRY FORM</span>
                <small>NEEM LEGAL</small>
              </div>


              <div className="contact-form-row">

                <label>
                  <span>Your Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>


                <label>
                  <span>Email Address</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>

              </div>


              <label>
                <span>Phone Number</span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </label>


              <label>
                <span>Brief Description of the Matter</span>

                <textarea
                  name="message"
                  placeholder="Please briefly describe your legal matter..."
                  rows="7"
                  required
                />
              </label>


              <div className="contact-form-footer">

                <small>
                  Please do not include highly confidential information
                  in this initial enquiry.
                </small>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>Send Enquiry</span>
                  <b>↗</b>
                </button>

              </div>

            </form>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CLIENT INFORMATION
      ===================================================== */}

      <section className="contact-information">
        <div className="container contact-information-grid">

          <div>
            <div className="contact-section-label">
              <span />
              <p>Before Consultation</p>
            </div>

            <h2>
              Information that
              <br />
              <em>may be useful.</em>
            </h2>
          </div>


          <div className="contact-information-list">

            <div className="contact-information-item">
              <span>01</span>

              <div>
                <strong>Brief description</strong>
                <p>
                  A brief description of the legal matter and the
                  assistance required.
                </p>
              </div>
            </div>


            <div className="contact-information-item">
              <span>02</span>

              <div>
                <strong>Important dates</strong>
                <p>
                  Relevant dates or deadlines connected with the
                  matter, where applicable.
                </p>
              </div>
            </div>


            <div className="contact-information-item">
              <span>03</span>

              <div>
                <strong>Relevant documents</strong>
                <p>
                  Documents, notices, agreements or other records
                  relevant to the matter, where appropriate.
                </p>
              </div>
            </div>


            <div className="contact-information-item">
              <span>04</span>

              <div>
                <strong>Previous proceedings</strong>
                <p>
                  Details of any previous legal proceedings or
                  related matters, if applicable.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-cta">

        <div
          className="contact-cta-decoration"
          aria-hidden="true"
        >
          <span />
          <span />
        </div>

        <div className="container contact-cta-inner">

          <div className="contact-light-label">
            <span />
            <p>NEEM LEGAL</p>
            <span />
          </div>

          <h2>
            Need to discuss
            <br />
            <em>a legal matter?</em>
          </h2>

          <p>
            Contact the office in Bengaluru to discuss your legal
            matter and the assistance required.
          </p>

          <a
            className="contact-cta-button"
            href="tel:+919886112141"
          >
            <span>Call 9886112141</span>
            <b>↗</b>
          </a>

          <div className="contact-cta-bottom">
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