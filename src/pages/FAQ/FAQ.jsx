import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./FAQ.css";

const q = [
  [
    "01",
    "What information should I provide for a consultation?",
    "A brief description of the matter, important dates, names of persons or entities involved, relevant agreements or documents, previous notices, court case details and the specific assistance required can help in understanding the matter.",
  ],

  [
    "02",
    "What documents may be required?",
    "Depending on the matter, clients may be requested to provide identity and address documents, property documents, sale deeds, tax receipts, Khata documents, RTC/revenue records, Encumbrance Certificate, court orders, notices, agreements, contracts, bank documents, company documents or family/succession documents.",
  ],

  [
    "03",
    "Do you handle property title verification?",
    "Yes. The stated practice includes property title verification and examination of ownership, title flow, encumbrances, revenue records and supporting property documents.",
  ],

  [
    "04",
    "What legal documents can be drafted?",
    "The stated services include sale deeds, agreements to sell, gift deeds, partition deeds, release deeds, settlement deeds, rectification deeds, confirmation deeds, MoUs, JDAs, powers of attorney, lease/rent agreements, construction agreements, affidavits, undertakings, declarations, legal notices and replies.",
  ],

  [
    "05",
    "Does website information constitute legal advice?",
    "No. The website information is for general informational purposes and does not constitute legal advice or create an advocate-client relationship. A professional legal consultation should be obtained based on the specific facts and circumstances of each matter.",
  ],
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

        <div className="faq-hero-detail">
          <span />
          <span />
          <span />
        </div>

        <div className="container faq-hero-inner">

          <motion.div
            className="faq-hero-content"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <div className="faq-kicker">
              <span />
              <p>Frequently Asked Questions</p>
            </div>

            <h1>
              Clear answers to
              <br />
              <em>common questions.</em>
            </h1>

            <p>
              Information about consultations, documents and the
              legal services provided by NEEM LEGAL.
            </p>

            <div className="faq-hero-meta">
              <span>NEEM LEGAL</span>
              <i />
              <span>BENGALURU · KARNATAKA</span>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <section className="faq-list-section">

        <div className="container faq-list-container">

          <div className="faq-list-intro">

            <div className="faq-section-label">
              <span />
              <p>Questions & Answers</p>
            </div>

            <p>
              The following information is provided for general
              guidance. Each legal matter depends on its specific
              facts and circumstances.
            </p>

          </div>


          <div className="faq-list">

            {q.map(([number, question, answer], index) => {

              const isOpen = open === index;

              return (
                <motion.div
                  className={`faq-item ${
                    isOpen ? "active" : ""
                  }`}
                  key={number}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                >

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="faq-question"
                  >

                    <span className="faq-number">
                      {number}
                    </span>

                    <strong>
                      {question}
                    </strong>

                    <b
                      className={`faq-toggle ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </b>

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

                        <div className="faq-answer-inner">

                          <span />

                          <p>
                            {answer}
                          </p>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="faq-cta">

        <div className="container faq-cta-inner">

          <motion.div
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
              amount: 0.2,
            }}
          >

            <div className="faq-cta-label">

              <span />

              <p>Still Have Questions?</p>

              <span />

            </div>

            <h2>
              Discuss your
              <br />
              <em>matter directly.</em>
            </h2>

            <p>
              To discuss a legal matter, please contact the office
              and provide a brief description of the matter and
              relevant documents, where appropriate.
            </p>

            <div className="faq-cta-actions">

              <Link
                to="/consultation"
                className="faq-primary-button"
              >
                <span>Begin Consultation</span>
                <b>↗</b>
              </Link>

              <Link
                to="/contact"
                className="faq-secondary-button"
              >
                <span>Contact Office</span>
                <b>↗</b>
              </Link>

            </div>

          </motion.div>


          <div className="faq-cta-bottom">

            <span>ADV. SHOBHA.H.K</span>

            <i />

            <span>NEEM LEGAL</span>

            <i />

            <span>BENGALURU · KARNATAKA</span>

          </div>

        </div>

      </section>

    </main>
  );
}