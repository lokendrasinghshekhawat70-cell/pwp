import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Auto-close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logoBox" onClick={() => setMenuOpen(false)}>
          <img src="/emblem.png" alt="Plot With Property Emblem" className="navEmblemImg" />
          <img src="/brand-text.png" alt="Plot With Property" className="navBrandImg" />
        </Link>

        {/* Backdrop for mobile */}
        {menuOpen && (
          <div className="mobileBackdrop" onClick={() => setMenuOpen(false)}></div>
        )}

        <div className={`navLinks ${menuOpen ? "navOpen" : ""}`}>
          <div className="mobileMenuHeader">
            <span className="mobileMenuTitle">NAVIGATION</span>
            <button className="mobileMenuClose" onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/properties" 
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            onClick={() => setMenuOpen(false)}
          >
            Properties
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <div className="mobileMenuFooter">
            <Link to="/contact" className="goldBtn fullWidthBtn" onClick={() => setMenuOpen(false)}>
              Schedule VIP Visit →
            </Link>
            <a href="tel:+919876543210" className="mobileCallLink">
              📞 +91 98765 43210
            </a>
          </div>
        </div>

        <div className="navActions">
          <Link to="/properties" className="navBtn desktopOnlyBtn">
            Explore Properties
          </Link>
          <button 
            className={`mobileToggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
