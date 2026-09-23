import { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleCityChange = (city) => {
    setSelectedCity(city);
    if (city === "All Cities") {
      navigate("/properties");
    } else {
      navigate(`/properties?loc=${encodeURIComponent(city)}`);
    }
  };

  return (
    <>
      {/* MAGICBRICKS STYLE TOP UTILITY STRIP */}
      <div className="mbTopBar">
        <div className="mbTopBarContainer">
          <div className="mbTopLeft">
            <span className="mbTopBadge">⭐ 100% JDA & RERA Approved Plots</span>
            <span className="mbTopDivider">|</span>
            <span className="mbTopText">Direct Developer Price • 0% Brokerage</span>
          </div>

          <div className="mbTopRight">
            <div className="mbCityDropdownWrap">
              <span className="mbCityIcon">📍</span>
              <select 
                className="mbCitySelect"
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
              >
                <option value="All Cities">All Cities (5 Growth Hubs)</option>
                <option value="Jaipur">Jaipur (Ajmer & Ring Road)</option>
                <option value="Navi Mumbai">Navi Mumbai (Airport Zone)</option>
                <option value="Bhiwadi">Bhiwadi (NCR Industrial)</option>
                <option value="Ajmer">Ajmer (Expressway Corridor)</option>
                <option value="Kishangarh">Kishangarh (NH-8 Highway)</option>
              </select>
            </div>
            <span className="mbTopDivider">|</span>
            <a href="tel:+919876543210" className="mbTopPhone">
              📞 +91 98765 43210
            </a>
            <span className="mbTopDivider">|</span>
            <span className="mbExpertName">Raju Verma (Gokul Kripa)</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
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
            <div className="mobileMenuLogo">
              <img src="/emblem.png" alt="Emblem" className="mobileMenuEmblem" />
              <span>PLOT WITH PROPERTY</span>
            </div>
            <button className="mobileMenuClose" onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          <div className="mobileCitySection">
            <span className="mobileCityTitle">SELECT CITY:</span>
            <div className="mobileCityChips">
              {["Jaipur", "Navi Mumbai", "Bhiwadi", "Ajmer", "Kishangarh"].map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`mobileCityChip ${selectedCity === c ? "active" : ""}`}
                  onClick={() => {
                    handleCityChange(c);
                    setMenuOpen(false);
                  }}
                >
                  📍 {c}
                </button>
              ))}
            </div>
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
            Buy Plots
            <span className="navTagPill">500+</span>
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            onClick={() => setMenuOpen(false)}
          >
            Services & Loans
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "navLink active" : "navLink")}
            onClick={() => setMenuOpen(false)}
          >
            About Us
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
              🚗 Book Free AC Cab Site Visit →
            </Link>
            <a 
              href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20JDA%20approved%20plots." 
              className="mobileWaLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Chat
            </a>
            <a href="tel:+919876543210" className="mobileCallLink">
              📞 Direct Call: +91 98765 43210
            </a>
          </div>
        </div>

        <div className="navActions">
          <a
            href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20JDA/RERA%20township%20plots."
            target="_blank"
            rel="noopener noreferrer"
            className="navWaBtn desktopOnlyBtn"
            title="Chat on WhatsApp"
          >
            <span className="waDot"></span>
            <span>WhatsApp</span>
          </a>

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
