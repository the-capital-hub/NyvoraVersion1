import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Attorneys.css";

const people = [
  {
    number: "01",
    name: "Aarav Mehta",
    role: "Senior Partner",
    practice: "Corporate & Commercial",
    slug: "aarav",
    image:
      "https://law4u.in/advocate-profileImage/profileImage7356.jpg",
  },
  {
    number: "02",
    name: "Ananya Rao",
    role: "Partner",
    practice: "Civil Litigation",
    slug: "ananya",
    image:
      "https://shieldlawfirm.in/assets/sr-priya-sharma-lFg6jMSu.jpg",
  },
  {
    number: "03",
    name: "Kabir Singh",
    role: "Senior Counsel",
    practice: "Technology & Cyber",
    slug: "kabir",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Advocate%20Akash%20Nanda%20at%20Chamber.png",
  },
];

export default function Attorneys() {
  return (
    <section className="attorneys">
      <div className="attorneys-bg-word">COUNSEL</div>

      <div className="container attorneys-container">

        {/* HEADER */}
        <motion.div
          className="attorneys-head"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="attorneys-heading">
            <div className="attorneys-eyebrow">
              <span />
              <p>The Counsel</p>
            </div>

            <h2>
              People behind
              <br />
              <em>the strategy.</em>
            </h2>
          </div>

          <div className="attorneys-intro">
            <span>THE TEAM</span>

            <p>
              A multidisciplinary team built around preparation, clarity and
              client trust.
            </p>

            <div className="attorneys-india">
              <i />
              <strong>Legal Counsel · India</strong>
            </div>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="attorney-grid">
          {people.map((person, index) => (
            <motion.article
              key={person.slug}
              className="attorney-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <Link
                to={`/attorneys/${person.slug}`}
                className="attorney-link"
              >
                {/* IMAGE */}
                <div className="attorney-image">
                  <img
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                  />

                  <div className="attorney-overlay" />

                  <div className="attorney-frame" />

                  <div className="attorney-number">
                    {person.number}
                  </div>

                  <div className="attorney-top-label">
                    <span>NYVORA</span>
                    <span>INDIA</span>
                  </div>

                  <div className="attorney-profile">
                    <span>View Profile</span>
                    <b>↗</b>
                  </div>
                </div>

                {/* INFORMATION */}
                <div className="attorney-info">
                  <div className="attorney-info-head">
                    <span>{person.role}</span>

                    <span className="attorney-index">
                      {person.number}
                    </span>
                  </div>

                  <h3>{person.name}</h3>

                  <div className="attorney-practice">
                    <span />
                    <p>{person.practice}</p>
                  </div>

                  <div className="attorney-info-arrow">
                    ↗
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="attorneys-footer">
          <div className="attorneys-footer-copy">
            <span>03</span>
            <p>Experience · Preparation · Judgment</p>
          </div>

          <Link
            to="/attorneys"
            className="attorneys-footer-link"
          >
            <span>Meet the full team</span>
            <b>↗</b>
          </Link>
        </div>
      </div>
    </section>
  );
}