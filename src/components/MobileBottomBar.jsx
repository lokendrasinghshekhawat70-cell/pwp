import { NavLink } from "react-router-dom";

export default function MobileBottomBar() {
  return (
    <aside className="mobileBottomBar" aria-label="Mobile quick navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "mBottomItem active" : "mBottomItem"
        }
      >
        <span className="mBottomIcon">🏛️</span>
        <span className="mBottomLabel">Home</span>
      </NavLink>

      <NavLink
        to="/properties"
        className={({ isActive }) =>
          isActive ? "mBottomItem active" : "mBottomItem"
        }
      >
        <span className="mBottomIcon">💎</span>
        <span className="mBottomLabel">Properties</span>
      </NavLink>

      <a
        href="https://wa.me/919876543210?text=Hello%20Plot%20With%20Property,%20I%20am%20interested%20in%20verified%20plots%20and%20luxury%20land%20advisory."
        target="_blank"
        rel="noopener noreferrer"
        className="mBottomItem mBottomWa"
      >
        <div className="mWaBubble">
          <span className="mBottomIconWa">💬</span>
        </div>
        <span className="mBottomLabel">WhatsApp</span>
      </a>

      <a href="tel:+919876543210" className="mBottomItem mBottomCall">
        <span className="mBottomIcon">📞</span>
        <span className="mBottomLabel">Call</span>
      </a>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "mBottomItem active" : "mBottomItem"
        }
      >
        <span className="mBottomIcon">📅</span>
        <span className="mBottomLabel">VIP Visit</span>
      </NavLink>
    </aside>
  );
}
