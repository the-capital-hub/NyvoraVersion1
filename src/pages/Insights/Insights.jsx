import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Insights.css";

const posts = [
  {
    slug: "legal-strategy",
    category: "Legal Strategy",
    title: "The value of clarity when the stakes are high.",
    date: "20 AUG 2026",
    image:
      "https://pbs.twimg.com/media/HB6qJ8HaoAAKS8x.jpg",
  },
  {
    slug: "business-law",
    category: "Business Law",
    title:
      "What founders should understand before signing a major contract.",
    date: "14 AUG 2026",
    image:
      "https://www.advocatepriyanpg.com/sites/default/files/inline-images/priyan2-cropped.jpeg",
  },
  {
    slug: "cyber-law",
    category: "Cyber Law",
    title:
      "The legal questions created by a digital-first world.",
    date: "08 AUG 2026",
    image:
      "https://cuzbxokihkesvutjrwwq.supabase.co/storage/v1/object/public/media/news-images/transforming-indian-legal-sector-top-legal-tech-in-1765225708755.png",
  },
];

export default function Insights() {
  const featured = posts[0];

  return (
    <main className="insights-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="insights-hero">

        <div className="container insights-hero-grid">

          <motion.div
            className="insights-hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="insights-label">
              <span />
              <p>NYVORA · LEGAL INSIGHTS</p>
            </div>

            <h1>
              Legal knowledge,
              <br />
              <em>made useful.</em>
            </h1>

            <p>
              Practical perspectives on law, business and technology
              for individuals, founders and organisations navigating
              important decisions in India.
            </p>

            <Link
              to={`/insights/${featured.slug}`}
              className="insights-hero-link"
            >
              <span>Read Latest Insight</span>
              <b>↗</b>
            </Link>

          </motion.div>


          <motion.div
            className="insights-hero-feature"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >

            <img
              src={featured.image}
              alt={featured.title}
            />

            <div className="insights-hero-feature-overlay" />

            <div className="insights-hero-feature-info">

              <span>FEATURED</span>

              <strong>
                {featured.category}
              </strong>

            </div>

            <div className="insights-hero-feature-arrow">
              ↗
            </div>

          </motion.div>

        </div>


        <div className="insights-hero-bottom">

          <span>LEGAL RESEARCH</span>

          <span>COMMENTARY</span>

          <span>INDIA</span>

          <span className="insights-hero-location">
            NEW DELHI · INDIA
          </span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="insights-intro">

        <div className="container insights-intro-grid">

          <div>

            <span className="insights-eyebrow">
              The NYVORA Journal
            </span>

            <h2>
              Thoughtful analysis.
              <br />
              <em>Practical perspective.</em>
            </h2>

          </div>


          <div className="insights-intro-right">

            <p>
              Legal information is most useful when it is clear,
              relevant and connected to real situations. Our journal
              explores legal developments and practical questions
              through that lens.
            </p>

            <div className="insights-intro-detail">

              <span>01</span>

              <div />

              <small>
                RESEARCH · LAW · BUSINESS
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      {/* <section className="insights-featured">

        <div className="container">

          <div className="insights-section-title">

            <div>
              <span className="insights-eyebrow">
                Featured Insight
              </span>

              <h2>
                Latest from
                <br />
                <em>NYVORA.</em>
              </h2>
            </div>

            <span className="insights-section-count">
              01 / 03
            </span>

          </div>


          <Link
            to={`/insights/${featured.slug}`}
            className="featured-card"
          >

            <div className="featured-card-image">

              <img
                src={featured.image}
                alt={featured.title}
              />

              <div className="featured-card-overlay" />

              <span className="featured-card-category">
                {featured.category}
              </span>

              <span className="featured-card-arrow">
                ↗
              </span>

            </div>


            <div className="featured-card-content">

              <div className="featured-card-top">

                <span>
                  {featured.date}
                </span>

                <span>
                  FEATURED ARTICLE
                </span>

              </div>

              <h3>
                {featured.title}
              </h3>

              <p>
                A considered look at why clear legal thinking
                can make difficult decisions easier to navigate.
              </p>

              <div className="featured-card-read">

                <span>Read Article</span>

                <b>→</b>

              </div>

            </div>

          </Link>

        </div>

      </section> */}


      {/* =====================================================
          LATEST ARTICLES
      ===================================================== */}

      <section className="insights-latest">

        <div className="container">

          <div className="latest-top">

            <div>

              <span className="insights-eyebrow">
                Latest Articles
              </span>

              <h2>
                Explore our
                <br />
                <em>latest thinking.</em>
              </h2>

            </div>

            <p>
              Perspectives covering legal strategy,
              business and emerging technology.
            </p>

          </div>


          <div className="article-grid">

            {posts.map((post, index) => (

              <motion.div
                key={post.slug}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >

                <Link
                  to={`/insights/${post.slug}`}
                  className="article-card"
                >

                  <div className="article-image">

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                    <span className="article-number">
                      0{index + 1}
                    </span>

                    <span className="article-arrow">
                      ↗
                    </span>

                  </div>


                  <div className="article-content">

                    <div className="article-meta">

                      <span>
                        {post.category}
                      </span>

                      <small>
                        {post.date}
                      </small>

                    </div>

                    <h3>
                      {post.title}
                    </h3>

                    <div className="article-read">
                      <span>Read insight</span>
                      <b>→</b>
                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TOPICS
      ===================================================== */}

      <section className="insights-topics">

        <div className="container">

          <div className="topics-heading">

            <div>

              <span className="insights-eyebrow">
                Browse Topics
              </span>

              <h2>
                Find what
                <br />
                <em>matters to you.</em>
              </h2>

            </div>

          </div>


          <div className="topics-list">

            <Link to="/insights/legal-strategy">

              <span>01</span>

              <strong>
                Legal Strategy
              </strong>

              <b>↗</b>

            </Link>


            <Link to="/insights/business-law">

              <span>02</span>

              <strong>
                Business Law
              </strong>

              <b>↗</b>

            </Link>


            <Link to="/insights/cyber-law">

              <span>03</span>

              <strong>
                Cyber & Technology
              </strong>

              <b>↗</b>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="insights-cta">

        <div className="container insights-cta-inner">

          <div>

            <span>
              NEED LEGAL GUIDANCE?
            </span>

            <h2>
              Insight informs.
              <br />
              <em>Counsel advises.</em>
            </h2>

          </div>


          <Link
            to="/consultation"
            className="insights-cta-button"
          >
            <span>Speak With Counsel</span>
            <b>↗</b>
          </Link>

        </div>

      </section>

    </main>
  );
}