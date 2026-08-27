import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./AIAssistant.css";

const suggestions = [
  "Property dispute",
  "Contract matter",
  "Cyber law issue",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = useRef(null);

  const askQuestion = (value = question) => {
    const text = value.trim();

    if (!text) return;

    setMessages((current) => [
      ...current,
      {
        role: "user",
        text,
      },
      {
        role: "ai",
        text:
          "This may fall within a relevant legal practice area. We can help you understand where to begin, but advice for a specific matter requires review by a qualified lawyer.",
      },
    ]);

    setQuestion("");
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop =
        messagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.aside
            className="ny-ai-panel"
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 18,
              scale: 0.97,
            }}
            transition={{
              duration: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* HEADER */}

            <header className="ny-ai-header">

              <div className="ny-ai-brand">

                <div className="ny-ai-monogram">
                  N
                </div>

                <div className="ny-ai-brand-copy">
                  <strong>NYVORA AI</strong>

                  <span>
                    LEGAL INFORMATION
                  </span>
                </div>

              </div>

              <button
                type="button"
                className="ny-ai-close"
                onClick={() => setOpen(false)}
                aria-label="Close AI assistant"
              >
                ×
              </button>

            </header>


            {/* CHAT CONTENT */}

            <div
              className="ny-ai-content"
              ref={messagesRef}
            >

              {messages.length === 0 ? (
                <div className="ny-ai-empty">

                  <div className="ny-ai-emblem">
                    ✦
                  </div>

                  <span className="ny-ai-overline">
                    A FIRST STEP
                  </span>

                  <h2>
                    Where should
                    <br />
                    <em>we begin?</em>
                  </h2>

                  <p>
                    Ask a general legal question and
                    explore the area that may be relevant
                    to your matter.
                  </p>

                </div>
              ) : (
                <div className="ny-ai-messages">

                  {messages.map((message, index) => (
                    <motion.div
                      key={`${message.role}-${index}`}
                      className={`ny-ai-message ${
                        message.role === "user"
                          ? "user"
                          : "assistant"
                      }`}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >

                      <div className="ny-ai-message-meta">
                        {message.role === "user"
                          ? "YOU"
                          : "NYVORA AI"}
                      </div>

                      <div className="ny-ai-message-text">
                        {message.text}
                      </div>

                    </motion.div>
                  ))}

                </div>
              )}

            </div>


            {/* SUGGESTIONS */}

            {messages.length === 0 && (
              <div className="ny-ai-suggestions">

                <span>
                  QUICK START
                </span>

                <div>
                  {suggestions.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() =>
                        askQuestion(item)
                      }
                    >
                      {item}
                      <b>↗</b>
                    </button>
                  ))}
                </div>

              </div>
            )}


            {/* INPUT */}

            <form
              className="ny-ai-input"
              onSubmit={(event) => {
                event.preventDefault();
                askQuestion();
              }}
            >

              <input
                value={question}
                onChange={(event) =>
                  setQuestion(event.target.value)
                }
                placeholder="Ask a legal question..."
                aria-label="Ask a legal question"
              />

              <button
                type="submit"
                disabled={!question.trim()}
                aria-label="Send"
              >
                ↗
              </button>

            </form>


            {/* FOOTER */}

            <footer className="ny-ai-footer">
              <span>●</span>
              General information only · Not legal advice
            </footer>

          </motion.aside>
        )}
      </AnimatePresence>


      {/* =====================================================
          FLOATING LAUNCHER
      ===================================================== */}

      <motion.button
        type="button"
        className={`ny-ai-launcher ${
          open ? "opened" : ""
        }`}
        onClick={() => setOpen((value) => !value)}
        whileTap={{ scale: 0.97 }}
        aria-label={
          open
            ? "Close NYVORA AI"
            : "Open NYVORA AI"
        }
        aria-expanded={open}
      >

        <span className="ny-ai-launcher-mark">
          {open ? "×" : "✦"}
        </span>

        <span className="ny-ai-launcher-name">
          NYVORA AI
        </span>

        <span className="ny-ai-launcher-line" />

        <span className="ny-ai-launcher-action">
          {open ? "CLOSE" : "ASK"}
        </span>

      </motion.button>
    </>
  );
}