import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import rajuVermaImg from "../assets/team/raju_verma.jpg";

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
        message: `Interested in ${defaultProperty}. Please arrange a complimentary site visit and share patta documents.`
      }));
    } else if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Service Consultation",
        propertyInterest: defaultService,
        message: `Interested in ${defaultService}. Please arrange legal and strategic consultation.`
      }));
    }
  }, [defaultProperty, defaultService]);

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: rawValue }));
      if (rawValue.length === 10) {
        setPhoneError("");
      } else if (rawValue.length > 0) {
        setPhoneError("Please enter a valid 10-digit mobile number");
      } else {
        setPhoneError("");
      }
    }
  };

  const getWordCount = (text) => {
    const trimmed = text.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text.trim() ? text.trim().split(/\s+/) : [];
    if (words.length <= MAX_WORDS) {
      setFormData((prev) => ({ ...prev, message: text }));
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
    <div className="pageContainer mbThemePage">
      {/* FLOATING QUICK CONTACT PILL */}
      <div className="floatingContactPill">
        <a href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20JDA%20plots." target="_blank" rel="noopener noreferrer" className="floatWaBtn">
          <span className="waIcon">💬</span>
          <span className="waText">Chat on WhatsApp</span>
        </a>
        <a href="tel:+919876543210" className="floatCallBtn">
          <span className="callIcon">📞</span>
          <span className="callText">+91 98765 43210</span>
        </a>
      </div>

      {/* CONTACT PORTAL HEADER */}
      <section className="mbPortalHeader">
        <div className="mbPortalHeaderInner">
          <div className="mbPortalBadge">
            <span className="mbLiveDot"></span>
            <span>Direct Advisory • Raju Verma (Gokul Kripa Sales & Marketing)</span>
          </div>
          <h1>Connect Directly With Our Land Specialists</h1>
          <p>
            Book a complimentary AC cab site visit for your family, request statutory JDA/RERA documentation, or consult Raju Verma directly.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="mbContactMainSection">
        <div className="mbContactGrid">
          {/* Left Column: Direct Info Card */}
          <div className="mbContactInfoCol">
            <div className="mbAdvisoryCard">
              <div className="mbAdvisorHeader">
                <img src={rajuVermaImg} alt="Raju Verma" className="mbAdvisorPortrait" />
                <div>
                  <span className="mbVerifiedTag">✓ Certified Real Estate Advisor</span>
                  <h3>Raju Verma</h3>
                  <p>Chief Real Estate Advisor • Gokul Kripa</p>
                </div>
              </div>

              <p className="mbAdvisorDesc">
                Specialist advisory for 100% JDA-approved and RERA-registered master townships across Jaipur, Navi Mumbai, Bhiwadi, Ajmer & Kishangarh.
              </p>

              <div className="mbContactPillsList">
                <a href="tel:+919876543210" className="mbContactLinkItem">
                  <span className="mbItemIcon">📞</span>
                  <div>
                    <span className="mbItemLabel">Direct Advisory Helpline</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20would%20like%20to%20book%20a%20site%20visit."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mbContactLinkItem mbWaItem"
                >
                  <span className="mbItemIcon">💬</span>
                  <div>
                    <span className="mbItemLabel">WhatsApp Assistance Desk</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                </a>

                <div className="mbContactLinkItem">
                  <span className="mbItemIcon">✉️</span>
                  <div>
                    <span className="mbItemLabel">Official Email</span>
                    <strong>contact@plotwithproperty.com</strong>
                  </div>
                </div>

                <div className="mbContactLinkItem">
                  <span className="mbItemIcon">📍</span>
                  <div>
                    <span className="mbItemLabel">Headquarters</span>
                    <strong>Plot With Property, Main Ajmer Road, Jaipur, Rajasthan</strong>
                  </div>
                </div>
              </div>

              <div className="mbFreeCabNotice">
                <span className="mbCabIcon">🚗</span>
                <div>
                  <strong>Complimentary Doorstep AC Cab Site Visit</strong>
                  <p>Free doorstep family pickup and drop for transparent on-ground site inspection.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="mbContactFormCol">
            <div className="mbFormCard">
              <div className="mbFormHeader">
                <h2>Schedule Site Visit & Inquiry</h2>
                <p>Fill in your details below for prompt advisory and township layout plans.</p>
              </div>

              {submitted ? (
                <div className="mbSuccessMessage">
                  <div className="mbSuccessIcon">✅</div>
                  <h3>Inquiry Successfully Submitted!</h3>
                  <p>
                    Thank you, <strong>{formData.fullName}</strong>. Raju Verma and our senior advisory team have received your request for <strong>{formData.location}</strong>.
                  </p>
                  <p className="mbSuccessSub">Our representative will call you shortly on <strong>+91 {formData.phone}</strong> to confirm your site visit schedule.</p>
                  <button 
                    type="button" 
                    className="mbPrimaryGoldBtn" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        location: "Jaipur",
                        inquiryType: "Property Visit",
                        propertyInterest: "",
                        preferredDate: "",
                        message: ""
                      });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mbFormInner">
                  <div className="mbFormRow">
                    <div className="mbFormGroup">
                      <label>Full Name <span className="mbReq">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Verma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="mbTextInput"
                      />
                    </div>

                    <div className="mbFormGroup">
                      <label>Indian Mobile Number (10 Digits) <span className="mbReq">*</span></label>
                      <div className="mbPhoneInputWrap">
                        <span className="mbPhonePrefix">+91</span>
                        <input
                          type="tel"
                          required
                          maxLength="10"
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="mbTextInput mbPhoneField"
                        />
                      </div>
                      {phoneError && <span className="mbInputError">{phoneError}</span>}
                    </div>
                  </div>

                  <div className="mbFormRow">
                    <div className="mbFormGroup">
                      <label>Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mbTextInput"
                      />
                    </div>

                    <div className="mbFormGroup">
                      <label>Select Location / City <span className="mbReq">*</span></label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="mbSelectInput"
                      >
                        <option value="Jaipur">Jaipur (Ajmer Road, Ring Road, Jagatpura)</option>
                        <option value="Navi Mumbai">Navi Mumbai (Panvel, Airport Zone)</option>
                        <option value="Bhiwadi">Bhiwadi (Alwar Highway, NCR Belt)</option>
                        <option value="Ajmer">Ajmer (Expressway, Pushkar Bypass)</option>
                        <option value="Kishangarh">Kishangarh (NH-8 Marble City)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mbFormRow">
                    <div className="mbFormGroup">
                      <label>Inquiry Classification</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="mbSelectInput"
                      >
                        <option value="Property Visit">🚗 Free AC Cab Site Visit</option>
                        <option value="Service Consultation">⚖️ 30-Year Title Search & Legal Verification</option>
                        <option value="Bank Loan Assistance">🏦 80% Bank Loan Support (SBI/HDFC)</option>
                        <option value="General Inquiry">💬 Township Pricing & Layout Details</option>
                      </select>
                    </div>

                    <div className="mbFormGroup">
                      <label>Preferred Visit Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="mbTextInput"
                      />
                    </div>
                  </div>

                  {formData.propertyInterest && (
                    <div className="mbFormGroup">
                      <label>Selected Property / Service</label>
                      <input
                        type="text"
                        value={formData.propertyInterest}
                        readOnly
                        className="mbTextInput mbReadOnlyInput"
                      />
                    </div>
                  )}

                  <div className="mbFormGroup">
                    <div className="mbLabelWithCounter">
                      <label>Message / Specific Dimension Requirements</label>
                      <span className="mbWordCount">{wordCount}/{MAX_WORDS} words</span>
                    </div>
                    <textarea
                      rows="3"
                      placeholder="Mention your requirements, preferred plot size, budget or questions..."
                      value={formData.message}
                      onChange={handleMessageChange}
                      className="mbTextarea"
                    />
                  </div>

                  <button type="submit" className="mbFormSubmitBtn">
                    <span>🚗 Book Free Site Visit & Inquire</span>
                    <span>→</span>
                  </button>

                  <p className="mbFormDisclaimer">
                    🔒 100% Privacy Guaranteed. Zero spam. We never share your contact information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CITY PROJECT OFFICES DIRECTORY */}
      <section className="mbOfficesSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Our Project Desks Across 5 Cities</span>
          <h2 className="mbSectionTitle">Regional Project <span>Offices & Contact Desks</span></h2>
          <p className="mbSectionDesc">Visit our local project desks or meet our on-ground advisory representatives.</p>
        </div>

        <div className="mbOfficesGrid">
          <div className="mbOfficeCard">
            <h3>📍 Jaipur (Headquarters)</h3>
            <p className="mbOfficeLoc">Main Ajmer Road & Jagatpura Junction</p>
            <p className="mbOfficePhone">📞 +91 98765 43210</p>
            <span className="mbOfficeBadge">Key Corridors: Ring Road & SEZ</span>
          </div>

          <div className="mbOfficeCard">
            <h3>📍 Navi Mumbai</h3>
            <p className="mbOfficeLoc">Panvel International Airport Growth Corridor</p>
            <p className="mbOfficePhone">📞 +91 98765 43210</p>
            <span className="mbOfficeBadge">Key Corridors: Aerocity Zone</span>
          </div>

          <div className="mbOfficeCard">
            <h3>📍 Bhiwadi (NCR)</h3>
            <p className="mbOfficeLoc">Alwar Bypass & RIICO Industrial Corridor</p>
            <p className="mbOfficePhone">📞 +91 98765 43210</p>
            <span className="mbOfficeBadge">Key Corridors: Delhi-NCR Belt</span>
          </div>

          <div className="mbOfficeCard">
            <h3>📍 Ajmer & Kishangarh</h3>
            <p className="mbOfficeLoc">Expressway Front & NH-8 Marble City</p>
            <p className="mbOfficePhone">📞 +91 98765 43210</p>
            <span className="mbOfficeBadge">Key Corridors: Highway Commercial</span>
          </div>
        </div>
      </section>
    </div>
  );
}
