import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./FAQ.css";

const questions = [
  {
    number: "01",
    question: "How do I book a consultation?",
    answer:
      "You can begin by selecting the consultation option and sharing a brief description of your matter. Our team can then guide you toward the appropriate legal area and next step.",
  },
  {
    number: "02",
    question: "Can I request an online consultation?",
    answer:
      "Yes. Depending on the nature of the matter and availability, consultations may be arranged through an online meeting.",
  },
  {
    number: "03",
    question: "What information should I provide?",
    answer:
      "A brief description of the matter, relevant dates, people or organisations involved, and important documents can help provide useful context before the consultation.",
  },
  {
    number: "04",
    question: "Can I choose a specific attorney?",
    answer:
      "You may express a preference for a particular attorney or practice area. The final allocation can depend on the nature of the matter, expertise required and availability.",
  },
  {
    number: "05",
    question: "How is my information handled?",
    answer:
      "Information shared during the consultation process should be handled with appropriate confidentiality and care. Please avoid submitting highly sensitive documents through an unsecured channel.",
  },
  {
    number: "06",
    question: "Does NYVORA AI provide legal advice?",
    answer:
      "NYVORA AI is designed to provide general legal information and help users navigate relevant resources. It does not replace advice from a qualified lawyer.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const toggleFAQ = (index) => {
    setOpen(open === index ? -1 : index);
  };

  return (
    <main className="faq-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="faq-hero">

        <div className="container faq-hero-inner">

          <motion.div
            className="faq-hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="faq-kicker">
              <span />
              <p>Frequently Asked Questions</p>
            </div>

            <h1>
              Questions deserve
              <br />
              <em>clear answers.</em>
            </h1>

            <p>
              A straightforward guide to consultations, confidentiality,
              legal enquiries and working with NYVORA.
            </p>

          </motion.div>


          <motion.div
            className="faq-hero-side"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >

            <div className="faq-hero-seal">
              <span>✦</span>
              <strong>N</strong>
            </div>

            <p>
              NYVORA
              <br />
              LEGAL COUNSEL
            </p>

          </motion.div>

        </div>


        <div className="faq-hero-footer">

          <span>01 — FAQ</span>

          <span>NEW DELHI · INDIA</span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="faq-intro">

        <div className="container">

          <div className="faq-intro-grid">

            <motion.div
              className="faq-intro-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <span className="faq-overline">
                Before You Begin
              </span>

              <h2>
                Start with
                <br />
                <em>clarity.</em>
              </h2>

            </motion.div>


            <motion.div
              className="faq-intro-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >

              <p>
                Legal matters can feel complicated before the first
                conversation even begins. These answers explain the
                basic process and what you can expect.
              </p>

              <div className="faq-intro-rule">

                <span>NYVORA</span>

                <i />

                <span>LEGAL COUNSEL · INDIA</span>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="faq-content">

        <div className="container">

          <div className="faq-content-heading">

            <div>

              <span className="faq-overline">
                Common Questions
              </span>

              <h2>
                What would you
                <br />
                like to <em>know?</em>
              </h2>

            </div>

            <p>
              Select a question to read the answer.
            </p>

          </div>


          <div className="faq-main-grid">

            {/* SIDE INDEX */}

            <aside className="faq-index">

              <span className="faq-index-number">
                06
              </span>

              <div className="faq-index-line" />

              <p>
                Six common questions covering the
                consultation and enquiry process.
              </p>

            </aside>


            {/* QUESTIONS */}

            <div className="faq-list">

              {questions.map((item, index) => {

                const isOpen = open === index;

                return (
                  <motion.div
                    className={`faq-item ${
                      isOpen ? "active" : ""
                    }`}
                    key={item.number}
                    layout
                  >

                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >

                      <span className="faq-item-number">
                        {item.number}
                      </span>

                      <span className="faq-item-question">
                        {item.question}
                      </span>

                      <span className="faq-item-icon">
                        {isOpen ? "−" : "+"}
                      </span>

                    </button>


                    <AnimatePresence initial={false}>

                      {isOpen && (
                        <motion.div
                          className="faq-answer"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        >

                          <p>
                            {item.answer}
                          </p>

                        </motion.div>
                      )}

                    </AnimatePresence>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEGAL NOTE
      ===================================================== */}

      <section className="faq-legal-note">

        <div className="container faq-legal-inner">

          <div className="faq-legal-icon">
            ⚖
          </div>

          <div className="faq-legal-copy">

            <span className="faq-overline">
              Legal Information
            </span>

            <h3>
              Information is useful.
              <br />
              <em>Context makes it meaningful.</em>
            </h3>

            <p>
              General information available through this website or
              NYVORA AI should not be treated as legal advice for a
              specific matter. Every legal situation depends on its
              facts, documents and applicable law.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="faq-cta">

        <div className="container faq-cta-inner">

          <div>

            <span className="faq-cta-kicker">
              Need More Guidance?
            </span>

            <h2>
              Let's make the
              <br />
              <em>next step clear.</em>
            </h2>

          </div>


          <Link
            to="/consultation"
            className="faq-cta-button"
          >
            <span>Start a Consultation</span>
            <b>↗</b>
          </Link>

        </div>

      </section>

    </main>
  );
}