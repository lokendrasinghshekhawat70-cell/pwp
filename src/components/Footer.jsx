import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mbFooter">
      {/* Top Banner */}
      <div className="mbFooterTopStrip">
        <div className="mbFooterTopContainer">
          <div className="mbFooterTrustItem">
            <span className="mbTrustIcon">🛡️</span>
            <div>
              <strong>100% JDA & RERA Approved Plots</strong>
              <p>Complete statutory legal security & clear marketable title</p>
            </div>
          </div>

          <div className="mbFooterTrustItem">
            <span className="mbTrustIcon">🚗</span>
            <div>
              <strong>Free Family AC Cab Visit</strong>
              <p>Complimentary doorstep pickup and site inspection</p>
            </div>
          </div>

          <div className="mbFooterTrustItem">
            <span className="mbTrustIcon">🏦</span>
            <div>
              <strong>Up to 80% Bank Loan Support</strong>
              <p>Pre-approved by SBI, HDFC, ICICI & Axis Bank</p>
            </div>
          </div>

          <div className="mbFooterTrustItem">
            <span className="mbTrustIcon">🤝</span>
            <div>
              <strong>0% Brokerage • Direct Developer Price</strong>
              <p>Transparent dealing with instant on-ground possession</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mbFooterMain">
        <div className="mbFooterContainer">
          {/* Brand Info Col */}
          <div className="mbFooterBrandCol">
            <div className="mbFooterLogo">
              <img src="/emblem.png" alt="Plot With Property Emblem" className="mbFooterEmblem" />
              <img src="/brand-text-white.png" alt="Plot With Property" className="mbFooterBrandText" />
            </div>
            <p className="mbFooterTagline">
              <strong>Where Trust Builds Lasting Value. Generational Security.</strong>
            </p>
            <p className="mbFooterDesc">
              Chief Real Estate Advisor <strong>Raju Verma</strong> (Gokul Kripa Sales & Marketing). Trusted land advisory for 100% legally verified, high-growth township plots across Jaipur, Navi Mumbai, Bhiwadi, Ajmer & Kishangarh.
            </p>
            
            <div className="mbFooterContactBox">
              <a href="tel:+919876543210" className="mbFooterPhone">
                📞 Hotline: +91 98765 43210
              </a>
              <span className="mbFooterEmail">✉️ contact@plotwithproperty.com</span>
            </div>
          </div>

          {/* Col 1: Explore */}
          <div className="mbFooterCol">
            <h4>Quick Navigation</h4>
            <Link to="/">Home Portal</Link>
            <Link to="/properties">Buy Verified Plots</Link>
            <Link to="/about">Meet Leadership (About Us)</Link>
            <Link to="/services">Legal Audit & Loans (Services)</Link>
            <Link to="/#reviews">Client Reviews (4.9 ★)</Link>
            <Link to="/contact">Book Free Site Visit</Link>
          </div>

          {/* Col 2: Growth Corridors */}
          <div className="mbFooterCol">
            <h4>Projects Across 5 Cities</h4>
            <Link to="/properties?loc=Jaipur">📍 Jaipur (Ajmer Road, Ring Road)</Link>
            <Link to="/properties?loc=Navi%20Mumbai">📍 Navi Mumbai (Panvel, Airport Zone)</Link>
            <Link to="/properties?loc=Bhiwadi">📍 Bhiwadi (Alwar Highway, NCR Belt)</Link>
            <Link to="/properties?loc=Ajmer">📍 Ajmer (Expressway, Pushkar Bypass)</Link>
            <Link to="/properties?loc=Kishangarh">📍 Kishangarh (NH-8 Highway)</Link>
          </div>

          {/* Col 3: Services & Legal */}
          <div className="mbFooterCol">
            <h4>Property Services</h4>
            <Link to="/services">30-Year Mother Deed Due Diligence</Link>
            <Link to="/services">80% Bank Loan Processing</Link>
            <Link to="/services">On-ground Pillar Demarcation</Link>
            <Link to="/services">Registry & Mutation Assistance</Link>
            <Link to="/services">High-Yield Land Investment</Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mbFooterBottom">
        <div className="mbFooterBottomContainer">
          <p>© 2026 Plot With Property (PWP). All rights reserved.</p>
          <div className="mbFooterLegalLinks">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms & Conditions</a>
            <span>•</span>
            <a href="#rera">RERA Compliance</a>
            <span>•</span>
            <a href="#disclaimer">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
