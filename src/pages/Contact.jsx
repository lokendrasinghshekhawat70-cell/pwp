import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const defaultProperty = searchParams.get("property") || "";
  const defaultService = searchParams.get("service") || "";

  const MAX_WORDS = 50;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "Jaipur",
    inquiryType: defaultProperty ? "Property Visit" : defaultService ? "Service Consultation" : "General Inquiry",
    propertyInterest: defaultProperty || defaultService || "",
    preferredDate: "",
    message: ""
  });

  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultProperty) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Property Visit",
        propertyInterest: defaultProperty,
        message: `Interested in scheduling a VIP site visit for ${defaultProperty}.`
      }));
    } else if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Service Consultation",
        propertyInterest: defaultService,
        message: `Requesting legal and strategic consultation for ${defaultService}.`
      }));
    }
  }, [defaultProperty, defaultService]);

  // Handle phone change (strict 10 digits numeric only)
  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (rawValue.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: rawValue }));
      if (rawValue.length > 0 && rawValue.length < 10) {
        setPhoneError("Please enter complete 10-digit mobile number");
      } else {
        setPhoneError("");
      }
    }
  };

  // Helper to count words
  const getWordCount = (text) => {
    const trimmed = text.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  // Handle message change with word limit
  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);
    if (text.trim() === "" || words.length <= MAX_WORDS) {
      setFormData((prev) => ({ ...prev, message: text }));
    } else {
      const limitedText = words.slice(0, MAX_WORDS).join(" ");
      setFormData((prev) => ({ ...prev, message: limitedText }));
    }
  };

  const wordCount = getWordCount(formData.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="pageContainer">
      {/* PAGE HEADER */}
      <section className="pageHeader">
        <div className="headerOverlay"></div>
        <div className="headerContent">
          <p className="smallTitle">✨ RAJU VERMA • GOKUL KRIPA SALES & MARKETING</p>
          <h1>Where Vision <span>Becomes Value.</span></h1>
          <p className="headerSubtext">
            PLOT WITH PROPERTY — Own Your Legacy. Connect directly with <strong>Raju Verma</strong> to schedule a complimentary VIP site visit for JDA Approved & RERA Registered townships.
          </p>
        </div>
      </section>

      {/* CONTACT MAIN SECTION */}
      <section className="contactMainSection">
        {/* MOBILE INSTANT CONNECT ACTION BAR */}
        <div className="mobileContactQuickRow">
          <a
            href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20JDA/RERA%20township%20plots."
            target="_blank"
            rel="noopener noreferrer"
            className="mQuickWaBtn"
          >
            <span className="mQuickIcon">💬</span>
            <div className="mQuickText">
              <strong>WhatsApp Chat</strong>
              <small>Instant Response</small>
            </div>
          </a>
          <a href="tel:+919876543210" className="mQuickCallBtn">
            <span className="mQuickIcon">📞</span>
            <div className="mQuickText">
              <strong>Call Advisor</strong>
              <small>+91 98765 43210</small>
            </div>
          </a>
        </div>

        <div className="contactGrid">
          {/* CONTACT INFO SIDEBAR */}
          <div className="contactInfoCard">
            <p className="goldText">REACH US DIRECTLY</p>
            <h2>Connect With Raju Verma</h2>
            <p className="contactSubtitle">
              Real Estate Expert | Gokul Kripa Sales & Marketing. Advisory desk for Jaipur, Navi Mumbai, Bhiwadi, Ajmer & Kishangarh.
            </p>

            {/* ASSURANCE QUOTE BOX */}
            <div className="contactAssuranceBox">
              <span className="assuranceQuoteMark">“</span>
              <p>
                Invest. Build. Grow. Every plot represents a lasting family legacy. We guarantee 100% legal due diligence, transparent government registry, and on-ground demarcation.
              </p>
              <div className="assuranceAuthor">
                <strong>Raju Verma | Gokul Kripa Sales & Marketing</strong>
                <span>Jaipur • Navi Mumbai • Bhiwadi • Ajmer • Kishangarh</span>
              </div>
            </div>

            <div className="contactMethodList">
              <a href="tel:+919876543210" className="contactMethodItem">
                <div className="methodIcon">📞</div>
                <div>
                  <strong>Direct Advisory Line</strong>
                  <p>+91 98765 43210 / +91 98290 12345</p>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20JDA%20approved%20plots."
                target="_blank"
                rel="noopener noreferrer"
                className="contactMethodItem waItem"
              >
                <div className="methodIcon">💬</div>
                <div>
                  <strong>WhatsApp Concierge (Instant Response)</strong>
                  <p>Township Layouts, GPS Pins & Brochures</p>
                </div>
              </a>

              <a href="mailto:contact@plotwithproperty.com" className="contactMethodItem">
                <div className="methodIcon">✉️</div>
                <div>
                  <strong>Official Email Inquiries</strong>
                  <p>contact@plotwithproperty.com</p>
                </div>
              </a>
            </div>

            {/* OFFICES */}
            <div className="officeBranches">
              <h4>Project Network (5 Key Cities)</h4>
              <div className="branchItem">
                <strong>📍 Jaipur Projects:</strong>
                <p>Main Ajmer Road & Jagatpura Ring Road Corridors</p>
              </div>
              <div className="branchItem">
                <strong>📍 Navi Mumbai Projects:</strong>
                <p>Panvel Airport Growth Corridor & NA Investment Plots</p>
              </div>
              <div className="branchItem">
                <strong>📍 Bhiwadi, Ajmer & Kishangarh:</strong>
                <p>High-Yield Industrial & Expressway Gated Townships</p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contactFormCard">
            {submitted ? (
              <div className="successMessageBox">
                <div className="successIcon">🎉</div>
                <h3>Inquiry Submitted Successfully!</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Our senior property advisor will call you at{" "}
                  <strong>+91 {formData.phone}</strong> within 15 minutes to confirm your site visit details.
                </p>
                <div className="successActions">
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello PWP, I just submitted an inquiry for ${formData.propertyInterest || formData.inquiryType}. My name is ${formData.fullName}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="goldBtn"
                  >
                    💬 Chat on WhatsApp Now
                  </a>
                  <button
                    className="outlineBtn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        location: "Jaipur",
                        inquiryType: "General Inquiry",
                        propertyInterest: "",
                        preferredDate: "",
                        message: ""
                      });
                      setPhoneError("");
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiryForm">
                <h3>Schedule Site Visit / Inquire</h3>
                <p className="formSubtitle">Fill out your details for instant advisory callback.</p>

                <div className="formRow">
                  <div className="formGroup">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={50}
                      placeholder="e.g. Ramesh Verma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="formGroup">
                    <label>Indian Mobile Number *</label>
                    <div className={`phoneInputWrapper ${phoneError ? "inputError" : ""}`}>
                      <span className="phonePrefix">🇮🇳 +91</span>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                    {phoneError && <span className="fieldErrorText">{phoneError}</span>}
                  </div>
                </div>

                <div className="formRow">
                  <div className="formGroup">
                    <label>Email Address</label>
                    <input
                      type="email"
                      maxLength={60}
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="formGroup">
                    <label>Preferred Location / City *</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    >
                      <option value="Jaipur">Jaipur (Ajmer Rd, Jagatpura, Ring Rd)</option>
                      <option value="Navi Mumbai">Navi Mumbai (Panvel, Airport Zone)</option>
                      <option value="Bhiwadi">Bhiwadi (NCR Industrial Belt)</option>
                      <option value="Ajmer">Ajmer (Expressway & Pushkar Bypass)</option>
                      <option value="Kishangarh">Kishangarh (Marble City Highway)</option>
                    </select>
                  </div>
                </div>

                <div className="formRow">
                  <div className="formGroup">
                    <label>Inquiry Classification</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="Property Visit">Book VIP Site Visit (Chauffeur Available)</option>
                      <option value="Plot Purchase">Residential Plot / Gated Land</option>
                      <option value="Commercial Space">Commercial Land / Showroom</option>
                      <option value="Service Consultation">Legal & RERA Title Due Diligence</option>
                      <option value="General Inquiry">General Investment Query</option>
                    </select>
                  </div>

                  <div className="formGroup">
                    <label>Preferred Visit Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>
                </div>

                {formData.propertyInterest && (
                  <div className="formGroup">
                    <label>Selected Property / Service</label>
                    <input
                      type="text"
                      readOnly
                      value={formData.propertyInterest}
                      className="prefilledInput"
                    />
                  </div>
                )}

                <div className="formGroup">
                  <div className="labelWithCount">
                    <label>Message / Specific Dimension Requirement</label>
                    <span className={`wordLimitBadge ${wordCount >= MAX_WORDS ? "limitReached" : ""}`}>
                      {wordCount} / {MAX_WORDS} words
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    maxLength={300}
                    placeholder="Describe your preferred location, dimension (Sq.Yd/Sq.Ft) or questions (Max 50 words)..."
                    value={formData.message}
                    onChange={handleMessageChange}
                  ></textarea>
                </div>

                <button type="submit" className="goldBtn submitBtn">
                  Submit Inquiry & Confirm VIP Visit →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
