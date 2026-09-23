import { NavLink } from "react-router-dom";

export default function MobileBottomBar() {
  return (
    <aside className="mbBottomBar" aria-label="Mobile quick navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "mbBottomItem active" : "mbBottomItem"
        }
      >
        <span className="mbBottomIcon">🏛️</span>
        <span className="mbBottomLabel">Home</span>
      </NavLink>

      <NavLink
        to="/properties"
        className={({ isActive }) =>
          isActive ? "mbBottomItem active" : "mbBottomItem"
        }
      >
        <span className="mbBottomIcon">💎</span>
        <span className="mbBottomLabel">Plots</span>
      </NavLink>

      <a
        href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20verified%20plots."
        target="_blank"
        rel="noopener noreferrer"
        className="mbBottomItem mbBottomWa"
      >
        <div className="mbWaBubble">
          <span className="mbBottomIconWa">💬</span>
        </div>
        <span className="mbBottomLabel">WhatsApp</span>
      </a>

      <a href="tel:+919876543210" className="mbBottomItem mbBottomCall">
        <span className="mbBottomIcon">📞</span>
        <span className="mbBottomLabel">Call</span>
      </a>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "mbBottomItem active" : "mbBottomItem"
        }
      >
        <span className="mbBottomIcon">🚗</span>
        <span className="mbBottomLabel">Site Visit</span>
      </NavLink>
    </aside>
  );
}
