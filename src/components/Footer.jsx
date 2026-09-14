import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <div className="footerLogoBox">
            <img src="/emblem.png" alt="Plot With Property Emblem" className="footerEmblemImg" />
            <img src="/brand-text-white.png" alt="Plot With Property" className="footerBrandImg" />
          </div>
          <p className="footerTagline">
            <strong>Where Legacy Takes Shape. Where Vision Becomes Value.</strong>
          </p>
          <p className="footerDesc">
            ✨ <strong>Raju Verma</strong> | Real Estate Expert • Gokul Kripa Sales & Marketing.<br />
            Specializing in 100% JDA Approved & RERA Registered Townships across Jaipur, Navi Mumbai, Bhiwadi, Ajmer, and Kishangarh.
          </p>
          <div className="contactPills">
            <span>📞 Direct Hotline: +91 98765 43210</span>
            <span>✉️ Inquiries: contact@plotwithproperty.com</span>
            <span>📍 Projects in: Jaipur • Navi Mumbai • Bhiwadi • Ajmer • Kishangarh</span>
          </div>
        </div>

        <div className="footerCol">
          <h4>Explore</h4>
          <Link to="/">Home Overview</Link>
          <Link to="/properties">Featured Townships</Link>
          <Link to="/about">Raju Verma & Team</Link>
          <Link to="/services">Services & Advisory</Link>
          <Link to="/#reviews">Client Reviews (4.9 ★)</Link>
          <Link to="/contact">Schedule Site Visit</Link>
        </div>

        <div className="footerCol">
          <h4>Projects in 5 Cities</h4>
          <Link to="/properties?loc=Jaipur">📍 Jaipur (Ajmer Rd & Ring Rd)</Link>
          <Link to="/properties?loc=Navi%20Mumbai">📍 Navi Mumbai (Airport & Panvel)</Link>
          <Link to="/properties?loc=Bhiwadi">📍 Bhiwadi (NCR Industrial Hub)</Link>
          <Link to="/properties?loc=Ajmer">📍 Ajmer (Expressway & Pushkar)</Link>
          <Link to="/properties?loc=Kishangarh">📍 Kishangarh (Marble City Highway)</Link>
        </div>

        <div className="footerCol">
          <h4>Legal & Trust</h4>
          <p className="trustBadgeItem">✅ <strong>JDA Approved Townships</strong></p>
          <p className="trustBadgeItem">📜 <strong>RERA Registered Projects</strong></p>
          <p className="trustBadgeItem">🏛️ <strong>Bank Loan Approved (SBI/HDFC)</strong></p>
          <p className="trustBadgeItem">⚡ <strong>Instant Demarcation & Patta</strong></p>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 Plot With Property (PWP). All Rights Reserved.</p>
        <div className="footerLegal">
          <a href="#privacy">Privacy Policy</a>
          <span>•</span>
          <a href="#terms">Terms of Service</a>
          <span>•</span>
          <a href="#rera">RERA Compliance</a>
          <span>•</span>
          <a href="#disclaimer">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
