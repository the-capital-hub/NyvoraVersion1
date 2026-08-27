import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const data = [
  [
    "They made a complicated situation feel understandable from the first conversation.",
    "Client · Corporate Matter",
  ],
  [
    "Clear advice, strong preparation and communication we could actually rely on.",
    "Client · Property Matter",
  ],
  [
    "The team combined professionalism with a genuinely human approach.",
    "Client · Civil Matter",
  ],
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((current) => (current - 1 + data.length) % data.length);
  };

  const next = () => {
    setIndex((current) => (current + 1) % data.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonial-pattern" />

      <div className="container">
        {/* HEADER */}
        <motion.div
          className="testimonial-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="testimonial-eyebrow">
            <span />
            <p>Client Perspective</p>
          </div>

          <span className="testimonial-india">
            NYVORA · INDIA
          </span>
        </motion.div>

        {/* QUOTE */}
        <div className="quote">
          

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <blockquote>
                {data[index][0]}
              </blockquote>

              <div className="quote-client">
                <span />
                <p>{data[index][1]}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="controls">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="testimonial-counter">
              <strong>
                0{index + 1}
              </strong>

              <span>/</span>

              <small>
                0{data.length}
              </small>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="testimonial-footer">
          <span>
            Trust is built through clarity.
          </span>

          <span>
            Confidential · Considered · Human
          </span>
        </div>
      </div>
    </section>
  );
}