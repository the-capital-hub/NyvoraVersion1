import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PracticeAreas.css";

const PracticeAreas = [
  {
    number: "01",
    category: "Business & Transactions",
    title: "Corporate & Commercial",
    shortTitle: "Corporate",
    description:
      "Strategic legal support for businesses, founders and organisations across contracts, transactions, governance and commercial decisions.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=88",
    slug: "corporate-commercial",
  },
  {
    number: "02",
    category: "Disputes & Resolution",
    title: "Civil Litigation",
    shortTitle: "Litigation",
    description:
      "Focused representation in civil disputes, contractual claims, property matters and contested proceedings.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=88",
    slug: "civil-litigation",
  },
  {
    number: "03",
    category: "Digital & Technology",
    title: "Technology & Cyber",
    shortTitle: "Technology",
    description:
      "Legal guidance for technology businesses, digital risks, data concerns, cyber matters and emerging technology issues.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=88",
    slug: "technology-cyber",
  },
  {
    number: "04",
    category: "Property & Transactions",
    title: "Property & Real Estate",
    shortTitle: "Property",
    description:
      "Counsel across property transactions, documentation, title concerns, ownership questions and real-estate disputes.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=88",
    slug: "property-real-estate",
  },
  {
    number: "05",
    category: "Families & Relationships",
    title: "Family Law",
    shortTitle: "Family",
    description:
      "Sensitive legal guidance for family matters where discretion, empathy and sound judgment matter most.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=88",
    slug: "family-law",
  },
  {
    number: "06",
    category: "Brands & Innovation",
    title: "Intellectual Property",
    shortTitle: "IP",
    description:
      "Strategic support for protecting brands, creative work, technology and valuable intellectual assets.",
    image:
      "https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&w=1400&q=88",
    slug: "intellectual-property",
  },
  {
    number: "07",
    category: "Defence & Representation",
    title: "Criminal Law",
    shortTitle: "Criminal",
    description:
      "Careful representation in criminal matters with focused preparation, strategic defence and respect for due process.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=88",
    slug: "criminal-law",
  },
];

export default function PracticeAreas() {
  return (
    <main className="practice-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="practice-page-hero">
        <div className="practice-page-grid" />

        <div className="practice-page-orbit practice-page-orbit-one" />
        <div className="practice-page-orbit practice-page-orbit-two" />

        <div className="container practice-page-hero-inner">

          <motion.div
            className="practice-page-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="practice-page-eyebrow">
              <span />
              <p>Our Expertise · India</p>
            </div>

            <h1>
              Legal expertise
              <br />
              <em>with perspective.</em>
            </h1>

            <div className="practice-page-rule" />

            <p>
              Focused legal counsel across business, disputes,
              technology, property, families, intellectual property
              and criminal matters.
            </p>
          </motion.div>

          <motion.div
            className="practice-page-hero-side"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <span>NYVORA</span>

            <strong>
              Seven areas.
              <br />
              <em>One considered approach.</em>
            </strong>

            <small>
              Strategic · Clear · Human
            </small>
          </motion.div>
        </div>

        <div className="practice-page-hero-bottom">
          <span>LAW · INTELLIGENCE · JUSTICE</span>

          <span>01 — 07</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="practice-page-intro">
        <div className="container practice-page-intro-grid">

          <div className="practice-page-intro-label">
            <span />
            <p>Where We Help</p>
          </div>

          <div className="practice-page-intro-content">
            <h2>
              The right legal
              <br />
              <em>thinking for the matter.</em>
            </h2>

            <p>
              Every legal matter carries its own circumstances,
              risks and objectives. Our practice areas are designed
              around understanding those differences before deciding
              on the right course of action.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          PRACTICE CARDS
      ===================================================== */}

      <section className="practice-list">
        <div className="container">

          <div className="practice-list-head">
            <div>
              <span>01</span>
              <p>Practice Areas</p>
            </div>

            <span>
              COUNSEL · INDIA
            </span>
          </div>

          <div className="practice-cards">

            {practiceAreas.map((area, index) => (
              <motion.article
                key={area.slug}
                className={`practice-card practice-card-${index + 1}`}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.65,
                  delay: index * 0.06,
                }}
              >
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="practice-card-link"
                >

                  {/* IMAGE */}
                  <div className="practice-card-image">

                    <img
                      src={area.image}
                      alt={area.title}
                    />

                    <div className="practice-card-image-overlay" />

                    <span className="practice-card-number">
                      {area.number}
                    </span>

                    <span className="practice-card-category">
                      {area.category}
                    </span>

                    <span className="practice-card-arrow">
                      ↗
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div className="practice-card-content">

                    <div className="practice-card-meta">
                      <span>
                        PRACTICE {area.number}
                      </span>

                      <span>
                        {area.shortTitle}
                      </span>
                    </div>

                    <h3>
                      {area.title}
                    </h3>

                    <p>
                      {area.description}
                    </p>

                    <div className="practice-card-footer">

                      <span>
                        Explore Practice
                      </span>

                      <b>
                        ↗
                      </b>

                    </div>

                  </div>

                </Link>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="practice-page-cta">
        <div className="practice-page-cta-ring" />

        <div className="container practice-page-cta-inner">

          <div className="practice-page-cta-label">
            <span />
            <p>Need Legal Guidance?</p>
            <span />
          </div>

          <h2>
            Not sure where
            <br />
            <em>your matter fits?</em>
          </h2>

          <p>
            Tell us what you are dealing with. We can help
            identify the relevant legal area and the right
            next step.
          </p>

          <Link
            to="/consultation"
            className="practice-page-cta-button"
          >
            <span>Start a Conversation</span>
            <b>↗</b>
          </Link>

          <div className="practice-page-cta-bottom">
            <span>CONFIDENTIAL</span>
            <i />
            <span>STRATEGIC</span>
            <i />
            <span>CLIENT FOCUSED</span>
          </div>

        </div>
      </section>

    </main>
  );
}