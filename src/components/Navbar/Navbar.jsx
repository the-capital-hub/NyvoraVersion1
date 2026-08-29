
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* =====================================================
     SCROLL DETECTION
  ===================================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =====================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setOpen(false);
  };

  /* =====================================================
     NAV LINK CLASS
  ===================================================== */

  const navClass = ({ isActive }) =>
    `nav-item ${isActive ? "active" : ""}`;

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label="NEEM LEGAL Home"
        >
          <img
            className="brand-logo"
            src="/neem-legal-logo.png"
            alt="NEEM LEGAL"
          />
        </Link>


        {/* =================================================
            MOBILE HAMBURGER
        ================================================= */}

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


        {/* =================================================
            NAVIGATION
        ================================================= */}

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


          <NavLink
            to="/practice-areas"
            className={navClass}
            onClick={closeMenu}
          >
            Practice Areas
          </NavLink>


          <NavLink
            to="/attorneys"
            className={navClass}
            onClick={closeMenu}
          >
            Advocate
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
            <span>Consultation</span>
            <b>↗</b>
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

