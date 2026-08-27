import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AIAssistant from "../../components/AIAssistant/AIAssistant";
import "./Consultation.css";

const steps = [
  "Legal area",
  "Your matter",
  "Consultation",
  "Your details",
];

const legalAreas = [
  "Corporate & Business",
  "Civil & Commercial",
  "Criminal Defense",
  "Property & Real Estate",
  "Family Law",
  "Cyber & Technology",
  "Intellectual Property",
  "Other Legal Matter",
];

export default function Consultation() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    legalArea: "",
    matter: "",
    consultation: "",
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="consultation-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="consultation-hero">

        <div className="consultation-hero-circle" />

        <div className="container consultation-hero-inner">

          <motion.div
            className="consultation-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >

            <div className="consultation-eyebrow">
              <span />
              <p>Book a Consultation · India</p>
            </div>

            <h1>
              Let's understand
              <br />
              <em>your matter.</em>
            </h1>

            <p>
              A simple guided process to help us understand your
              enquiry and arrange the right next conversation.
            </p>

          </motion.div>


          <motion.div
            className="consultation-hero-side"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >

            <div className="consultation-seal">
              <span>N</span>
            </div>

            <small>NYVORA</small>
            <small>LEGAL COUNSEL</small>

          </motion.div>

        </div>


        <div className="consultation-hero-bottom">
          <span>01 — CONSULTATION</span>
          <span>PRIVATE · CONFIDENTIAL</span>
        </div>

      </section>


      {/* =====================================================
          BOOKING AREA
      ===================================================== */}

      <section className="consultation-section">

        <div className="container consultation-layout">

          {/* LEFT SIDE */}

          <aside className="consultation-sidebar">

            <div className="consultation-sidebar-label">
              <span />
              <p>Your enquiry</p>
            </div>

            <h2>
              Four steps.
              <br />
              <em>One clear direction.</em>
            </h2>

            <p className="consultation-sidebar-copy">
              Tell us a little about what you need. Your information
              helps us understand the nature of your enquiry before
              the consultation.
            </p>


            <div className="consultation-progress">

              {steps.map((item, index) => (
                <div
                  className={`consultation-progress-item ${
                    index === step ? "active" : ""
                  } ${index < step ? "completed" : ""}`}
                  key={item}
                >

                  <span className="consultation-progress-number">
                    0{index + 1}
                  </span>

                  <div>
                    <strong>{item}</strong>

                    {index === step && (
                      <small>Current step</small>
                    )}
                  </div>

                </div>
              ))}

            </div>


            <div className="consultation-private-note">

              <span>✦</span>

              <div>
                <strong>Private & Confidential</strong>

                <p>
                  Information shared through this form is intended
                  only for the purpose of responding to your enquiry.
                </p>
              </div>

            </div>

          </aside>


          {/* RIGHT SIDE */}

          <div className="consultation-form-wrapper">

            <div className="consultation-form-top">

              <span>
                STEP {String(step + 1).padStart(2, "0")} / 04
              </span>

              {step > 0 && !submitted && (
                <button
                  type="button"
                  className="consultation-back"
                  onClick={previousStep}
                >
                  ← Back
                </button>
              )}

            </div>


            <div className="consultation-progress-bar">
              <span
                style={{
                  width: `${((step + 1) / steps.length) * 100}%`,
                }}
              />
            </div>


            <AnimatePresence mode="wait">

              {/* STEP 1 */}

              {step === 0 && (
                <motion.div
                  key="step-one"
                  className="consultation-form-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >

                  <div className="consultation-form-heading">

                    <span>01 · LEGAL AREA</span>

                    <h3>
                      What do you need
                      <br />
                      <em>help with?</em>
                    </h3>

                    <p>
                      Select the area that best describes your
                      legal enquiry.
                    </p>

                  </div>


                  <div className="consultation-options">

                    {legalAreas.map((area) => (
                      <button
                        type="button"
                        key={area}
                        className={
                          form.legalArea === area
                            ? "selected"
                            : ""
                        }
                        onClick={() => {
                          updateForm("legalArea", area);
                          nextStep();
                        }}
                      >

                        <span>{area}</span>

                        <b>↗</b>

                      </button>
                    ))}

                  </div>

                </motion.div>
              )}


              {/* STEP 2 */}

              {step === 1 && (
                <motion.div
                  key="step-two"
                  className="consultation-form-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >

                  <div className="consultation-form-heading">

                    <span>02 · YOUR MATTER</span>

                    <h3>
                      Tell us briefly
                      <br />
                      <em>about the matter.</em>
                    </h3>

                    <p>
                      A short overview is enough. Please do not
                      include highly sensitive or confidential
                      documents at this stage.
                    </p>

                  </div>


                  <div className="consultation-selected-area">

                    <small>SELECTED AREA</small>

                    <strong>{form.legalArea}</strong>

                  </div>


                  <textarea
                    value={form.matter}
                    onChange={(e) =>
                      updateForm("matter", e.target.value)
                    }
                    rows="7"
                    placeholder="Briefly describe your legal enquiry..."
                  />


                  <button
                    type="button"
                    className="consultation-primary-button"
                    onClick={nextStep}
                    disabled={!form.matter.trim()}
                  >
                    <span>Continue</span>
                    <b>↗</b>
                  </button>

                </motion.div>
              )}


              {/* STEP 3 */}

              {step === 2 && (
                <motion.div
                  key="step-three"
                  className="consultation-form-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >

                  <div className="consultation-form-heading">

                    <span>03 · CONSULTATION</span>

                    <h3>
                      How would you like
                      <br />
                      <em>to speak with us?</em>
                    </h3>

                    <p>
                      Choose the format that is most convenient
                      for your initial consultation.
                    </p>

                  </div>


                  <div className="consultation-consultation-options">

                    {[
                      {
                        title: "Video Consultation",
                        text: "A private online conversation.",
                      },
                      {
                        title: "Phone Consultation",
                        text: "Speak with our legal team by phone.",
                      },
                      {
                        title: "In-Person Consultation",
                        text: "Meet our counsel at our office.",
                      },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.title}
                        className={
                          form.consultation === item.title
                            ? "selected"
                            : ""
                        }
                        onClick={() => {
                          updateForm(
                            "consultation",
                            item.title
                          );
                          nextStep();
                        }}
                      >

                        <span className="consultation-option-icon">
                          ✦
                        </span>

                        <div>
                          <strong>{item.title}</strong>
                          <small>{item.text}</small>
                        </div>

                        <b>↗</b>

                      </button>
                    ))}

                  </div>

                </motion.div>
              )}


              {/* STEP 4 */}

              {step === 3 && !submitted && (
                <motion.div
                  key="step-four"
                  className="consultation-form-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >

                  <div className="consultation-form-heading">

                    <span>04 · YOUR DETAILS</span>

                    <h3>
                      Where should we
                      <br />
                      <em>reach you?</em>
                    </h3>

                    <p>
                      Share your basic contact details so our team
                      can respond to your enquiry.
                    </p>

                  </div>


                  <form
                    className="consultation-details-form"
                    onSubmit={submitForm}
                  >

                    <label>
                      <span>FULL NAME</span>

                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          updateForm("name", e.target.value)
                        }
                        placeholder="Your full name"
                        required
                      />
                    </label>


                    <label>
                      <span>EMAIL ADDRESS</span>

                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          updateForm("email", e.target.value)
                        }
                        placeholder="you@example.com"
                        required
                      />
                    </label>


                    <label>
                      <span>PHONE NUMBER</span>

                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          updateForm("phone", e.target.value)
                        }
                        placeholder="+91"
                        required
                      />
                    </label>


                    <button
                      type="submit"
                      className="consultation-primary-button"
                    >
                      <span>Request Consultation</span>
                      <b>↗</b>
                    </button>

                  </form>

                </motion.div>
              )}


              {/* SUCCESS */}

              {submitted && (
                <motion.div
                  key="success"
                  className="consultation-success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                >

                  <div className="consultation-success-mark">
                    ✓
                  </div>

                  <span>ENQUIRY RECEIVED</span>

                  <h3>
                    Thank you for
                    <br />
                    <em>reaching out.</em>
                  </h3>

                  <p>
                    Your consultation enquiry has been recorded.
                    Our team will review the information provided
                    and get back to you regarding the next step.
                  </p>

                  <Link
                    to="/"
                    className="consultation-home-link"
                  >
                    Return to homepage ↗
                  </Link>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}

      <section className="consultation-bottom">

        <div className="container consultation-bottom-inner">

          <div>
            <span>NYVORA</span>
            <p>Legal Counsel · India</p>
          </div>

          <p>
            An initial enquiry does not create an
            advocate-client relationship.
          </p>

          <span>PRIVATE · CONFIDENTIAL</span>

        </div>

      </section>


      <AIAssistant />

    </main>
  );
}