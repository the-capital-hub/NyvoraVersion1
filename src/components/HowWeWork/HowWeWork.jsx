import { motion } from "framer-motion";
import "./HowWeWork.css";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the facts and legal concerns presented by the client.",
  },
  {
    number: "02",
    title: "Examine",
    description:
      "Relevant documents and records are reviewed.",
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Applicable legal provisions and potential issues are analysed.",
  },
  {
    number: "04",
    title: "Advise",
    description:
      "The client is informed about available legal options and considerations.",
  },
  {
    number: "05",
    title: "Draft",
    description:
      "Where required, appropriate legal documents, notices or pleadings are prepared.",
  },
  {
    number: "06",
    title: "Proceed",
    description:
      "Further legal steps or representation may be undertaken according to the matter and client's instructions.",
  },
];

export default function HowWeWork() {
  return (
    <section className="process">

      {/* =====================================================
          BACKGROUND DETAIL
      ===================================================== */}

      <div className="process-bg-detail" aria-hidden="true">
        <span className="process-detail-circle" />
        <span className="process-detail-line process-detail-line-one" />
        <span className="process-detail-line process-detail-line-two" />
        <span className="process-detail-mark">
          NEEM LEGAL · 05
        </span>
      </div>


      <div className="container process-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="process-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >

          <div className="process-eyebrow">
            <span />
            <p>Our Legal Process</p>
          </div>


          <div className="process-heading-row">

            <h2>
              A clear process for
              <br />
              <em>informed decisions.</em>
            </h2>


            <div className="process-intro">
              <span>OUR APPROACH</span>

              <p>
                From the initial understanding of a matter to
                documentation or further legal steps, the process
                remains focused on facts, documents and applicable law.
              </p>
            </div>

          </div>

        </motion.div>


        {/* =================================================
            PROCESS TRACK
        ================================================= */}

        <div className="process-track">

          {/* CONNECTING LINE */}

          <div className="process-line" aria-hidden="true">
            <span />
          </div>


          {/* STEPS */}

          {steps.map((step, index) => (
            <motion.article
              className="process-step"
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
            >

              {/* NUMBER */}

              <div className="process-node">
                <span>{step.number}</span>
              </div>


              {/* CONTENT */}

              <div className="process-content">

                <span className="process-small">
                  STEP {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>


              {/* ARROW */}

              <span className="process-arrow" aria-hidden="true">
                ↗
              </span>

            </motion.article>
          ))}

        </div>


        {/* =================================================
            BOTTOM LABEL
        ================================================= */}

        <div className="process-footer-label">
          <span />
          <p>Our Legal Process</p>
        </div>

      </div>
    </section>
  );
}