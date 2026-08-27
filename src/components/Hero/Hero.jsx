import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* BACKGROUND */}
      <div className="hero-bg-pattern" />
      <div className="hero-light hero-light-one" />
      <div className="hero-light hero-light-two" />

      {/* MAIN */}
      <div className="hero-main container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="hero-kicker-line" />

            <span>
              Strategic Legal Counsel · India
            </span>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            The law
            <br />
            <span>made clear.</span>
          </motion.h1>


          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Thoughtful legal counsel for individuals,
            families, founders and businesses navigating
            matters where clarity, strategy and trust
            matter most.
          </motion.p>


          {/* ACTIONS */}

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.72,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Link
              to="/consultation"
              className="hero-primary-btn"
            >
              <span>
                Begin a Consultation
              </span>

              
            </Link>


            <Link
              to="/practice-areas"
              className="hero-text-link"
            >
              <span>
                Explore Expertise
              </span>

              <span className="hero-link-arrow">
                →
              </span>
            </Link>

          </motion.div>


          {/* META */}

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.95,
            }}
          >

            <div className="hero-meta-item">
              <strong>01</strong>
              <span>Individuals</span>
            </div>

            <div className="hero-meta-item">
              <strong>02</strong>
              <span>Businesses</span>
            </div>

            <div className="hero-meta-item">
              <strong>03</strong>
              <span>Disputes</span>
            </div>

          </motion.div>

        </div>


        {/* RIGHT VISUAL */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 25,
            scale: 1.025,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="hero-image">

            <img
              src="https://www.krmangalam.edu.in/_next/image?q=75&url=https%3A%2F%2Ftruthful-cabbage-82fd27e8f6.media.strapiapp.com%2FScope_image_a74cdc69f2.jpg&w=1600"
              alt="Indian advocate in a traditional courtroom setting"
            />

            <div className="hero-image-overlay" />


            {/* IMAGE TOP */}

            <div className="hero-image-top">
              <span>
                LAW · INDIA
              </span>

              <span>
                01 / 06
              </span>
            </div>


            {/* IMAGE BOTTOM */}

            <div className="hero-image-bottom">

              <div>

                <span className="hero-image-small">
                  OUR APPROACH
                </span>

                <h2>
                  Clarity
                  <br />
                  <em>
                    over complexity.
                  </em>
                </h2>

              </div>


              <span className="hero-image-arrow">
                ↗
              </span>

            </div>

          </div>


          <div className="hero-gold-detail" />

        </motion.div>

      </div>


      {/* FOOTER STRIP */}

      <motion.div
        className="hero-footer container"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          delay: 1.05,
        }}
      >

        <div className="hero-footer-left">
          <span>
            LEGAL COUNSEL
          </span>

          <span className="footer-dot">
            •
          </span>

          <span>
            INDIA
          </span>
        </div>


        <div className="hero-footer-center">
          <span>
            Confidential
          </span>

          <span>
            Strategic
          </span>

          <span>
            Client Focused
          </span>
        </div>


        <div className="hero-scroll">
          <span>
            SCROLL
          </span>

          <span className="scroll-arrow">
            ↓
          </span>
        </div>

      </motion.div>

    </section>
  );
}