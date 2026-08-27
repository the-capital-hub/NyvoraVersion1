import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Insights.css";

const posts = [
  {
    number: "01",
    category: "Legal Strategy",
    title: "The value of clarity when the stakes are high.",
    slug: "legal-strategy",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "02",
    category: "Business Law",
    title:
      "What founders should understand before signing a major contract.",
    slug: "business-law",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "03",
    category: "Cyber Law",
    title: "The legal questions created by a digital-first world.",
    slug: "cyber-law",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Insights() {
  return (
    <section className="insights">
      <div className="container insights-container">

        {/* HEADER */}
        <motion.div
          className="insights-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
        >
          <div className="insights-head-main">
            <div className="insights-eyebrow">
              <span />
              <p>Legal Insights</p>
            </div>

            <h2>
              Ideas that make
              <br />
              <em>law clearer.</em>
            </h2>
          </div>

          <div className="insights-intro" style={{padding:"0px"}}>
            <span>KNOWLEDGE · INDIA</span>

            <p>
              Practical perspectives, explainers and legal updates written to
              help you make informed decisions.
            </p>
          </div>
        </motion.div>

        {/* INSIGHT CARDS */}
        <div className="insight-grid">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="insight-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >
              <Link
                to={`/insights/${post.slug}`}
                className="insight"
              >
                {/* IMAGE */}
                <div className="insight-img">
                  <img
                    src={post.image}
                    alt={post.title}
                  />

                  <div className="insight-img-overlay" />

                  <span className="insight-number">
                    {post.number}
                  </span>

                  <span className="insight-image-label">
                    NYVORA
                  </span>

                  <span className="insight-arrow">
                    ↗
                  </span>
                </div>

                {/* META */}
                <div className="insight-meta">
                  <span className="insight-category">
                    {post.category}
                  </span>

                  <span className="insight-read">
                    5 MIN READ
                  </span>
                </div>

                {/* TITLE */}
                <h3>{post.title}</h3>

                {/* BOTTOM */}
                <div className="insight-bottom">
                  <span>Legal Perspective</span>

                  <span className="insight-read-link">
                    Read insight
                    <b>↗</b>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="insights-footer">
          <span>
            Knowledge creates better decisions.
          </span>

          <Link to="/insights">
            Explore all insights
            <b>↗</b>
          </Link>
        </div>
      </div>
    </section>
  );
}