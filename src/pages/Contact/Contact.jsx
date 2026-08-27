import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Contact.css";

const practiceAreas = [
  "Corporate & Business",
  "Property & Real Estate",
  "Civil Litigation",
  "Criminal Defense",
  "Family Law",
  "Cyber & Technology",
  "Intellectual Property",
];

const legalPath = [
  {
    number: "01",
    title: "Understand",
    text: "We first understand the facts, people, documents and objectives involved.",
  },
  {
    number: "02",
    title: "Assess",
    text: "We identify the relevant legal area, priorities and possible routes forward.",
  },
  {
    number: "03",
    title: "Proceed",
    text: "The next step is shaped around the matter and the client's objectives.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    enquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-circle" />

        <div className="container contact-hero-inner">

          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >

            <div className="contact-eyebrow">
              <span />
              <p>Contact · New Delhi, India</p>
            </div>

            <h1>
              Start a
              <br />
              <em>conversation.</em>
            </h1>

            <p>
              Tell us what you need help with. Our team can help direct
              your enquiry to the relevant practice area or consultation
              path.
            </p>

            <div className="contact-hero-meta">
              <span>PRIVATE</span>
              <i />
              <span>CONFIDENTIAL</span>
              <i />
              <span>NEW DELHI</span>
            </div>

          </motion.div>


          <motion.div
            className="contact-hero-mark"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >

            <div className="contact-seal">
              <span>N</span>
            </div>

            <small>NYVORA</small>
            <small>LEGAL COUNSEL</small>

          </motion.div>

        </div>


        <div className="contact-hero-bottom">
          <span>01 — CONTACT</span>
          <span>COUNSEL · INDIA</span>
        </div>

      </section>


      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="contact-intro">

        <div className="container contact-intro-grid">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >

            <div className="contact-section-label">
              <span />
              <p>Connect With NYVORA</p>
            </div>

            <h2>
              A considered first
              <br />
              <em>conversation.</em>
            </h2>

          </motion.div>


          <motion.div
            className="contact-intro-copy"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >

            <p>
              Every matter begins differently. Tell us a little about
              what you are facing and we will help identify the most
              appropriate next step.
            </p>

            <div className="contact-intro-note">
              <span>✦</span>

              <div>
                <strong>Legal Counsel · India</strong>
                <small>
                  Listen · Understand · Advise
                </small>
              </div>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT
      ===================================================== */}

      <section className="contact-main">

        <div className="container contact-main-grid">

          {/* OFFICE */}

          <motion.div
            className="contact-office"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >

            <div className="contact-block-label">
              <span>01</span>
              <p>Our Office</p>
            </div>

            <h3>
              New Delhi
              <br />
              <em>India.</em>
            </h3>

            <p className="contact-office-copy">
              NYVORA is designed around a modern India-first legal
              experience, combining careful legal thinking with clear
              communication and thoughtful technology.
            </p>


            <div className="contact-details">

              <div>
                <small>Email</small>
                <a href="mailto:hello@nyvora.example">
                  hello@nyvora.example
                </a>
              </div>

              <div>
                <small>Phone</small>
                <a href="tel:+910000000000">
                  +91 00000 00000
                </a>
              </div>

              <div>
                <small>Office Hours</small>
                <strong>Monday — Friday</strong>
                <span>9:30 AM — 6:30 PM</span>
              </div>

              <div>
                <small>Appointments</small>
                <strong>By prior appointment</strong>
              </div>

            </div>


            <div className="contact-office-seal">

              <div className="contact-office-seal-inner">

                <span>✦</span>

                <strong>NYVORA</strong>

                <small>LEGAL COUNSEL</small>

                <em>NEW DELHI · INDIA</em>

              </div>

            </div>

          </motion.div>


          {/* FORM */}

          <motion.div
            className="contact-enquiry"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
          >

            {!submitted ? (
              <>

                <div className="contact-form-top">

                  <div>
                    <span>02</span>
                    <small>PRIVATE ENQUIRY</small>
                  </div>

                  <span>NYVORA · INDIA</span>

                </div>


                <div className="contact-form-heading">

                  <span>Begin here.</span>

                  <h3>
                    Tell us about
                    <br />
                    <em>your matter.</em>
                  </h3>

                  <p>
                    Please provide a brief overview. You do not need
                    to include confidential or highly sensitive
                    information at this stage.
                  </p>

                </div>


                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <label>
                    <span>01 · FULL NAME</span>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        handleChange("name", e.target.value)
                      }
                      placeholder="Your full name"
                      required
                    />
                  </label>


                  <div className="contact-form-row">

                    <label>
                      <span>02 · EMAIL</span>

                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          handleChange("email", e.target.value)
                        }
                        placeholder="you@example.com"
                        required
                      />
                    </label>


                    <label>
                      <span>03 · PHONE</span>

                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          handleChange("phone", e.target.value)
                        }
                        placeholder="+91"
                        required
                      />
                    </label>

                  </div>


                  <label>
                    <span>04 · PRACTICE AREA</span>

                    <select
                      value={form.practice}
                      onChange={(e) =>
                        handleChange("practice", e.target.value)
                      }
                      required
                    >

                      <option value="" disabled>
                        Select a legal area
                      </option>

                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}

                    </select>

                  </label>


                  <label>
                    <span>05 · YOUR ENQUIRY</span>

                    <textarea
                      rows="6"
                      value={form.enquiry}
                      onChange={(e) =>
                        handleChange("enquiry", e.target.value)
                      }
                      placeholder="Briefly tell us what you need help with..."
                      required
                    />

                  </label>


                  <div className="contact-form-footer">

                    <small>
                      General enquiries only. Submitting this form
                      does not establish an advocate-client relationship.
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

              </>
            ) : (

              <motion.div
                className="contact-success"
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.45 }}
              >

                <div className="contact-success-mark">
                  ✓
                </div>

                <span>ENQUIRY RECEIVED</span>

                <h3>
                  Thank you for
                  <br />
                  <em>reaching out.</em>
                </h3>

                <p>
                  Your enquiry has been recorded. Our team will
                  review the information provided and get back to
                  you regarding the next step.
                </p>

                <Link
                  to="/consultation"
                  className="contact-success-link"
                >
                  Book a consultation ↗
                </Link>

              </motion.div>

            )}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          LEGAL PATH
      ===================================================== */}

      <section className="contact-path">

        <div className="container contact-path-grid">

          <div>

            <div className="contact-section-label">
              <span />
              <p>The First Step</p>
            </div>

            <h2>
              Good counsel begins
              <br />
              with <em>listening.</em>
            </h2>

          </div>


          <div className="contact-path-list">

            {legalPath.map((item) => (
              <div
                className="contact-path-item"
                key={item.number}
              >

                <span>{item.number}</span>

                <div>
                  <strong>{item.title}</strong>

                  <p>{item.text}</p>
                </div>

                <b>↗</b>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONSULTATION CTA
      ===================================================== */}

      <section className="contact-cta">

        <div className="contact-cta-circle" />

        <div className="container contact-cta-inner">

          <div className="contact-section-label contact-light-label">
            <span />
            <p>Prefer A Guided Start?</p>
          </div>

          <h2>
            Book a
            <br />
            <em>consultation.</em>
          </h2>

          <p>
            If you already know what you need, take the guided
            consultation route and tell us more about your matter.
          </p>

          <Link
            to="/consultation"
            className="contact-cta-button"
          >
            <span>Start Consultation</span>
            <b>↗</b>
          </Link>


          <div className="contact-cta-bottom">
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