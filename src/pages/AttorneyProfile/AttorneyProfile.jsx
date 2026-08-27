import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../../components/PageHero/PageHero";
import "./Page.css";

const data = {
  aarav: {
    name: "Aarav Mehta",
    role: "Senior Partner",
    area: "Corporate & Commercial",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=88",
    education: "B.A. LL.B. · Delhi",
    experience: "15+ Years",
    focus: "Corporate disputes, commercial contracts & strategic advisory",
  },

  ananya: {
    name: "Ananya Rao",
    role: "Partner",
    area: "Civil Litigation",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=88",
    education: "B.A. LL.B. · Delhi",
    experience: "11+ Years",
    focus: "Civil disputes, property matters & commercial litigation",
  },

  kabir: {
    name: "Kabir Singh",
    role: "Senior Counsel",
    area: "Technology & Cyber",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=88",
    education: "B.B.A. LL.B. · Delhi",
    experience: "10+ Years",
    focus: "Cyber matters, technology contracts & digital disputes",
  },
};

export default function AttorneyProfile() {
  const { id } = useParams();
  const p = data[id] || data.aarav;

  return (
    <>
      {/* HERO */}

      <PageHero
        eyebrow={`${p.role} · NYVORA INDIA`}
        title={
          <>
            {p.name}
            <br />
            <span>{p.area}</span>
          </>
        }
        copy={`Focused legal counsel across ${p.area.toLowerCase()}, with an emphasis on preparation, strategy and clear communication.`}
      />

      {/* PROFILE */}

      <section className="attorney-profile section">
        <div className="container">

          <div className="attorney-profile-grid">

            {/* IMAGE */}

            <motion.div
              className="attorney-image-wrap"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="attorney-image-frame">

                <img
                  src={p.image}
                  alt={p.name}
                />

                <div className="attorney-image-overlay" />

                <div className="attorney-image-top">
                  <span>NYVORA</span>
                  <span>INDIA</span>
                </div>

                <div className="attorney-image-bottom">
                  <small>{p.role}</small>
                  <strong>{p.name}</strong>
                </div>

                <div className="attorney-image-number">
                  01
                </div>

              </div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              className="attorney-profile-content"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >

              <div className="eyebrow">
                Counsel Profile
              </div>

              <h2 className="display section-title">
                Focused counsel.
                <br />
                <span>Practical strategy.</span>
              </h2>

              <p className="section-copy">
                {p.name} works with clients navigating consequential
                legal and commercial decisions. The approach combines
                careful preparation, practical legal analysis and
                direct communication.
              </p>

              <p className="section-copy">
                Matters are approached with attention to the facts,
                applicable law, commercial realities and the client's
                objectives.
              </p>

              {/* PROFILE DATA */}

              <div className="attorney-facts">

                <div>
                  <span>01</span>
                  <small>Experience</small>
                  <strong>{p.experience}</strong>
                </div>

                <div>
                  <span>02</span>
                  <small>Education</small>
                  <strong>{p.education}</strong>
                </div>

                <div>
                  <span>03</span>
                  <small>Primary Focus</small>
                  <strong>{p.focus}</strong>
                </div>

              </div>

              <Link
                className="btn btn-dark"
                to="/consultation"
              >
                Request a Consultation ↗
              </Link>

            </motion.div>

          </div>

        </div>
      </section>

      {/* PRACTICE FOCUS */}

      <section className="attorney-focus section">

        <div className="container">

          <div className="attorney-focus-head">

            <div>
              <div className="eyebrow">
                Areas of Focus
              </div>

              <h2 className="display">
                Experience shaped
                <br />
                around <span>the matter.</span>
              </h2>
            </div>

            <p>
              Legal strategy is strongest when it is built around
              the specific facts, objectives and realities of each
              matter.
            </p>

          </div>

          <div className="attorney-focus-list">

            <div>
              <span>01</span>
              <strong>Strategic Assessment</strong>
              <p>
                Understanding the legal position, risks and
                practical options available.
              </p>
              <b>↗</b>
            </div>

            <div>
              <span>02</span>
              <strong>Preparation & Representation</strong>
              <p>
                Building a considered approach around the
                client's objectives and priorities.
              </p>
              <b>↗</b>
            </div>

            <div>
              <span>03</span>
              <strong>Clear Communication</strong>
              <p>
                Keeping clients informed throughout the
                legal process and important decisions.
              </p>
              <b>↗</b>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="attorney-cta">

        <div className="container">

          <div>
            <div className="eyebrow">
              Discuss Your Matter
            </div>

            <h2 className="display">
              The right strategy
              <br />
              starts with <span>clarity.</span>
            </h2>
          </div>

          <Link
            to="/consultation"
            className="btn btn-gold"
          >
            Book a Consultation ↗
          </Link>

        </div>

      </section>
    </>
  );
}