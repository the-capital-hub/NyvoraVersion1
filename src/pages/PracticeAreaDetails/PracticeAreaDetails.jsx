import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import "./Page.css";

const practiceData = {
  "corporate-commercial": {
    number: "01",
    title: "Corporate & Commercial",
    eyebrow: "Business · Strategy · Transactions",
    description:
      "Practical legal counsel for businesses navigating transactions, contracts, governance and commercial decisions.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=88",
    services: [
      "Corporate Structuring",
      "Commercial Contracts",
      "Mergers & Acquisitions",
      "Shareholder & Partnership Matters",
      "Corporate Governance",
      "Business Advisory",
    ],
    approach: [
      [
        "01",
        "Understand",
        "We begin with the commercial objective behind the legal question.",
      ],
      [
        "02",
        "Assess",
        "Risks, obligations and available options are carefully examined.",
      ],
      [
        "03",
        "Advise",
        "The legal position is translated into clear practical choices.",
      ],
      [
        "04",
        "Execute",
        "We remain focused through negotiation, documentation and implementation.",
      ],
    ],
  },

  "civil-litigation": {
    number: "02",
    title: "Civil Litigation",
    eyebrow: "Disputes · Representation · Resolution",
    description:
      "Measured representation for civil disputes, property matters, contractual disagreements and contested claims.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=88",
    services: [
      "Civil Disputes",
      "Property Disputes",
      "Contractual Claims",
      "Injunction Matters",
      "Recovery Proceedings",
      "Strategic Litigation",
    ],
    approach: [
      [
        "01",
        "Examine",
        "Facts, documents and the legal position are carefully mapped.",
      ],
      [
        "02",
        "Prepare",
        "The strongest available legal and factual case is developed.",
      ],
      [
        "03",
        "Represent",
        "Arguments and proceedings are handled with preparation and discipline.",
      ],
      [
        "04",
        "Resolve",
        "The focus remains on achieving the strongest practical outcome.",
      ],
    ],
  },

  "technology-cyber": {
    number: "03",
    title: "Technology & Cyber",
    eyebrow: "Digital · Data · Technology",
    description:
      "Legal guidance for technology businesses, digital risks, data concerns and emerging cyber issues.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=88",
    services: [
      "Technology Contracts",
      "Data Protection",
      "Cyber Incidents",
      "Digital Compliance",
      "IT & Software Agreements",
      "Technology Advisory",
    ],
    approach: [
      [
        "01",
        "Map",
        "The technology, business model and legal environment are understood.",
      ],
      [
        "02",
        "Identify",
        "Key digital, contractual and regulatory risks are isolated.",
      ],
      [
        "03",
        "Protect",
        "Practical safeguards and legal solutions are developed.",
      ],
      [
        "04",
        "Respond",
        "We help navigate disputes, incidents and regulatory concerns.",
      ],
    ],
  },

  "property-real-estate": {
    number: "04",
    title: "Property & Real Estate",
    eyebrow: "Property · Transactions · Disputes",
    description:
      "Counsel across property transactions, documentation, ownership questions and real-estate disputes.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=88",
    services: [
      "Property Transactions",
      "Title & Due Diligence",
      "Sale & Purchase Agreements",
      "Lease Documentation",
      "Property Disputes",
      "Real Estate Advisory",
    ],
    approach: [
      [
        "01",
        "Verify",
        "Documents, title and relevant property records are examined.",
      ],
      [
        "02",
        "Evaluate",
        "Legal and commercial risks are identified before action.",
      ],
      [
        "03",
        "Structure",
        "Documentation and strategy are built around the objective.",
      ],
      [
        "04",
        "Complete",
        "The matter is carried through with attention to detail.",
      ],
    ],
  },

  "family-law": {
    number: "05",
    title: "Family Law",
    eyebrow: "Families · Rights · Resolution",
    description:
      "Sensitive legal guidance for family matters where discretion, empathy and sound judgment matter.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=88",
    services: [
      "Family Disputes",
      "Divorce & Separation",
      "Maintenance Matters",
      "Child & Custody Matters",
      "Domestic Disputes",
      "Family Settlements",
    ],
    approach: [
      [
        "01",
        "Listen",
        "The circumstances and priorities of the family are understood.",
      ],
      [
        "02",
        "Protect",
        "Immediate legal and practical concerns are identified.",
      ],
      [
        "03",
        "Guide",
        "Available legal routes are explained clearly and respectfully.",
      ],
      [
        "04",
        "Resolve",
        "We work toward a considered and sustainable resolution.",
      ],
    ],
  },

  "intellectual-property": {
    number: "06",
    title: "Intellectual Property",
    eyebrow: "Brands · Innovation · Protection",
    description:
      "Strategic support for protecting brands, creative work, technology and valuable intellectual assets.",
    image:
      "https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&w=1400&q=88",
    services: [
      "Trademark Advisory",
      "Copyright Matters",
      "Brand Protection",
      "IP Agreements",
      "IP Disputes",
      "Portfolio Strategy",
    ],
    approach: [
      [
        "01",
        "Identify",
        "The intellectual assets and business objectives are mapped.",
      ],
      [
        "02",
        "Protect",
        "Appropriate legal protection is identified and structured.",
      ],
      [
        "03",
        "Enforce",
        "Potential infringement and enforcement options are evaluated.",
      ],
      [
        "04",
        "Grow",
        "The IP strategy remains aligned with the wider business.",
      ],
    ],
  },

  "criminal-law": {
    number: "07",
    title: "Criminal Law",
    eyebrow: "Defence · Representation · Rights",
    description:
      "Focused representation in criminal matters with careful preparation and respect for due process.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=88",
    services: [
      "Criminal Defence",
      "Bail Matters",
      "Criminal Complaints",
      "White Collar Matters",
      "Investigations",
      "Court Representation",
    ],
    approach: [
      [
        "01",
        "Understand",
        "The facts and procedural position are examined carefully.",
      ],
      [
        "02",
        "Prepare",
        "Documents, evidence and legal issues are systematically reviewed.",
      ],
      [
        "03",
        "Defend",
        "Representation is built around the rights and interests of the client.",
      ],
      [
        "04",
        "Proceed",
        "Every stage is approached with preparation and discipline.",
      ],
    ],
  },
};

export default function PracticeAreaDetails() {
  const { slug } = useParams();

  const data =
    practiceData[slug] || practiceData["corporate-commercial"];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <PageHero
        eyebrow={`Practice Area · ${data.number}`}
        title={
          <>
            {data.title}
            <br />
            <em>with perspective.</em>
          </>
        }
        description={data.description}
        number={data.number}
      />

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="practice-detail">
        <div className="container practice-detail-grid">
          <motion.div
            className="practice-detail-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="practice-image-frame">
              <img
                src={data.image}
                alt={data.title}
              />

              <div className="practice-image-overlay" />

              <div className="practice-image-top">
                <span>NYVORA</span>
                <span>LEGAL COUNSEL · INDIA</span>
              </div>

              <div className="practice-image-bottom">
                <small>{data.eyebrow}</small>

                <strong>
                  Considered
                  <br />
                  <em>legal counsel.</em>
                </strong>
              </div>

              <span className="practice-image-number">
                {data.number}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="practice-detail-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">
              <span />
              <p>The Practice</p>
            </div>

            <h2 className="section-title">
              Law that understands
              <br />
              <span>the larger picture.</span>
            </h2>

            <p className="practice-lead">
              Legal advice is strongest when it understands both
              the law and the circumstances in which that law operates.
            </p>

            <p className="section-copy">
              Our work in {data.title.toLowerCase()} combines
              careful legal analysis with practical judgment. We focus
              on understanding the objective first, then developing a
              strategy that is proportionate, clear and meaningful.
            </p>

            <p className="section-copy">
              From the first consultation through documentation,
              negotiation, proceedings or resolution, our approach
              remains focused on preparation, communication and discretion.
            </p>

            <Link
              to="/consultation"
              className="practice-primary-link"
            >
              <span>Discuss your matter</span>
              <b>↗</b>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="practice-services">
        <div className="container">
          <div className="practice-services-head">
            <div>
              <div className="section-label section-label-light">
                <span />
                <p>Scope of Work</p>
              </div>

              <h2 className="section-title section-title-light">
                What we <span>help with.</span>
              </h2>
            </div>

            <p className="section-copy section-copy-light">
              Focused legal support shaped around the nature of
              the matter, the objective and the level of intervention
              required.
            </p>
          </div>

          <div className="practice-services-list">
            {data.services.map((service, index) => (
              <motion.div
                key={service}
                className="practice-service-row"
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{service}</h3>

                <b aria-hidden="true">↗</b>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="practice-approach">
        <div className="container">
          <div className="practice-approach-head">
            <div className="section-label">
              <span />
              <p>Our Approach</p>
            </div>

            <h2 className="section-title">
              Four steps.{" "}
              <span>One clear direction.</span>
            </h2>

            <p className="section-copy">
              A disciplined process helps reduce uncertainty and
              keeps every stage of the matter moving with purpose.
            </p>
          </div>

          <div className="practice-steps">
            {data.approach.map(
              ([number, title, text]) => (
                <motion.article
                  key={number}
                  className="practice-step"
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <span>{number}</span>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="practice-cta">
        <div className="container">
          <div>
            <div className="section-label section-label-light">
              <span />
              <p>Private Consultation</p>
            </div>

            <h2>
              Your matter deserves
              <br />
              <span>careful attention.</span>
            </h2>
          </div>

          <Link
            to="/consultation"
            className="practice-primary-link"
          >
            <span>Book a Consultation</span>
            <b>↗</b>
          </Link>
        </div>
      </section>
    </>
  );
}