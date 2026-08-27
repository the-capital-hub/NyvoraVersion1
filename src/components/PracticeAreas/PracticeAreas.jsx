import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PracticeAreas.css";

const areas = [
  [
    "01",
    "Corporate & Business",
    "corporate",
    "Advisory, contracts, transactions and commercial risk.",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=88",
  ],
  [
    "02",
    "Property & Real Estate",
    "property",
    "Ownership, documentation, transactions and disputes.",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=88",
  ],
  [
    "03",
    "Civil Litigation",
    "civil",
    "Focused representation for contested legal matters.",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=88",
  ],
  [
    "04",
    "Criminal Defense",
    "criminal",
    "Strategic representation with discretion and preparation.",
    "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1200&q=88",
  ],
  [
    "05",
    "Cyber & Technology",
    "cyber",
    "Legal guidance for digital products, data and technology.",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=88",
  ],
  [
    "06",
    "Intellectual Property",
    "ip",
    "Protecting brands, ideas, creative work and innovation.",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=88",
  ],
];

export default function PracticeAreas() {
  return (
    <section className="practice">
      {/* PREMIUM BACKGROUND DETAIL */}
      <div
        className="practice-bg-detail"
        aria-hidden="true"
      >
        <span className="detail-circle" />
        <span className="detail-line detail-line-one" />
        <span className="detail-line detail-line-two" />
        <span className="detail-mark">
          NYVORA · 03
        </span>
      </div>

      <div className="container practice-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="practice-header"
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
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="practice-heading">

            <div className="practice-eyebrow">
              <span />
              <p>Areas of Expertise</p>
            </div>

            <h2>
              Focused counsel.
              <br />
              <em>Meaningful direction.</em>
            </h2>

          </div>

          <div className="practice-intro-copy">

            <span className="practice-section-number">
              03
            </span>

            <p>
              Legal work is rarely one-size-fits-all.
              Our practice areas are structured around
              the decisions, risks and disputes that matter
              most to our clients.
            </p>

            <div className="practice-india">
              <span>●</span>
              <strong>
                Legal Practice · India
              </strong>
            </div>

          </div>
        </motion.div>


        {/* =================================================
            PRACTICE LIST
        ================================================= */}

        <div className="practice-list">

          {areas.map((area, index) => (

            <motion.div
              key={area[2]}
              className="practice-item"
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.58,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <Link
                className="practice-card"
                to={`/practice-areas/${area[2]}`}
              >

                {/* NUMBER */}

                <div className="practice-number">
                  <span>{area[0]}</span>
                  <i />
                </div>


                {/* CONTENT */}

                <div className="practice-info">

                  <div className="practice-title-row">

                    <h3>
                      {area[1]}
                    </h3>

                    <span className="practice-mobile-arrow">
                      ↗
                    </span>

                  </div>

                  <p>
                    {area[3]}
                  </p>

                  <span className="practice-explore">
                    Explore Practice
                    <b>↗</b>
                  </span>

                </div>


                {/* IMAGE */}

                <div className="practice-image">

                  <img
                    src={area[4]}
                    alt={area[1]}
                    loading="lazy"
                  />

                  <div className="practice-image-overlay" />

                  <span className="practice-image-label">
                    {area[0]} / 06
                  </span>

                  <span className="practice-image-arrow">
                    ↗
                  </span>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="practice-footer">

          <span>
            Six areas. One standard of counsel.
          </span>

          <Link to="/practice-areas">

            <span>
              View complete expertise
            </span>

            <b>
              ↗
            </b>

          </Link>

        </div>

      </div>
    </section>
  );
}