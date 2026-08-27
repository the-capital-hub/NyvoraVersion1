import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  const navClass = ({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`;

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">

        {/* =====================================================
            BRAND
        ===================================================== */}

        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label="NYVORA Home"
        >
          <span className="brand-symbol">
            N
          </span>

          <span className="brand-copy">
            <strong>NYVORA</strong>

            <small>
              LAW · INTELLIGENCE · JUSTICE
            </small>
          </span>
        </Link>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          className={`hamb ${open ? "active" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <i />
          <i />
        </button>


        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <nav
          className={`nav-links ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >

          <NavLink
            to="/"
            end
            className={navClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>


          <NavLink
            to="/about"
            className={navClass}
            onClick={closeMenu}
          >
            About
          </NavLink>


          {/* =================================================
              EXPERTISE — NOW NORMAL LINK
          ================================================= */}

         

          <NavLink
            to="/attorneys"
            className={navClass}
            onClick={closeMenu}
          >
            Attorneys
          </NavLink>


          <NavLink
            to="/case-results"
            className={navClass}
            onClick={closeMenu}
          >
            Results
          </NavLink>


          <NavLink
            to="/insights"
            className={navClass}
            onClick={closeMenu}
          >
            Insights
          </NavLink>


          <NavLink
            to="/faq"
            className={navClass}
            onClick={closeMenu}
          >
            FAQ
          </NavLink>


          <NavLink
            to="/contact"
            className={navClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>


          {/* =================================================
              CONSULTATION
          ================================================= */}

          <NavLink
            to="/consultation"
            className={({ isActive }) =>
              `nav-cta ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            <span>
              Consultation
            </span>

            <b>
              ↗
            </b>
          </NavLink>

        </nav>

      </div>
    </header>
  );
}