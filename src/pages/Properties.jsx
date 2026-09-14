import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

const PROPERTIES_DATA = [
  {
    id: 1,
    title: "Royal Enclave Gated Township Plot",
    location: "Main Ajmer Road, Jaipur",
    city: "Jaipur",
    type: "Plot",
    category: "Residential",
    size: "2500 Sq.Ft (277 Sq.Yd)",
    price: "₹45 Lac",
    priceNumeric: 4500000,
    rate: "₹1,800 / Sq.Ft",
    tag: "JDA APPROVED",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    features: ["✅ JDA Approved & Patta", "✅ RERA Registered Township", "60ft Main Asphalt Road", "Instant Registry & Demarcation", "Underground Electrification"],
    desc: "Premium residential plot situated in a gated township with 24/7 security, lush green parks, and wide asphalt roads. Ideal for luxury duplex construction."
  },
  {
    id: 2,
    title: "Aerocity Airport Corridor Investment Plot",
    location: "Panvel, Near Navi Mumbai International Airport",
    city: "Navi Mumbai",
    type: "Plot",
    category: "Luxury",
    size: "3000 Sq.Ft (333 Sq.Yd)",
    price: "₹85 Lac",
    priceNumeric: 8500000,
    rate: "₹2,833 / Sq.Ft",
    tag: "AIRPORT ZONE",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    features: ["✅ RERA Registered", "Upcoming Airport Proximity", "Trans-Harbour Link Connected", "High Capital Appreciation Zone"],
    desc: "Prime land parcel in Navi Mumbai's booming airport corridor offering immense capital appreciation and future residential viability."
  },
  {
    id: 3,
    title: "Gokul Green City Township Plot",
    location: "Alwar Bypass Road, Bhiwadi (NCR)",
    city: "Bhiwadi",
    type: "Plot",
    category: "Residential",
    size: "1800 Sq.Ft (200 Sq.Yd)",
    price: "₹26 Lac",
    priceNumeric: 2600000,
    rate: "₹1,444 / Sq.Ft",
    tag: "HIGH ROI",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    features: ["✅ RERA Approved", "Gated Township with Security", "Wide Sector Roads", "Near Honda & RIICO Industrial Hub"],
    desc: "Master-planned residential township plot in Bhiwadi's high-demand corridor with immediate bank loan and registry clearance."
  },
  {
    id: 4,
    title: "Pushkar Expressway Royal Township Plot",
    location: "National Highway, Pushkar Bypass, Ajmer",
    city: "Ajmer",
    type: "Plot",
    category: "Residential",
    size: "2250 Sq.Ft (250 Sq.Yd)",
    price: "₹34 Lac",
    priceNumeric: 3400000,
    rate: "₹1,511 / Sq.Ft",
    tag: "JDA APPROVED",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    features: ["✅ JDA Approved & Clear Title", "Instant Demarcation", "Lush Mountain View Gated Layout", "80% Bank Loan Available"],
    desc: "Scenic residential plots on Ajmer expressway with uninterrupted mountain views, modern clubhouse, and rapid capital growth."
  },
  {
    id: 5,
    title: "Marble City Highway Commercial & Plot Hub",
    location: "Main National Highway 8, Kishangarh",
    city: "Kishangarh",
    type: "Commercial",
    category: "Commercial",
    size: "5000 Sq.Ft (555 Sq.Yd)",
    price: "₹65 Lac",
    priceNumeric: 6500000,
    rate: "₹1,300 / Sq.Ft",
    tag: "COMMERCIAL HUB",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    features: ["✅ RERA & Government Clear", "100ft Highway Frontage", "Airport Road Connectivity", "Ideal for Showrooms & Logistics"],
    desc: "High footfall commercial and residential land on Kishangarh NH-8 with tremendous appreciation driven by marble trade and airport traffic."
  },
  {
    id: 6,
    title: "Emerald Green Township Residential Plot",
    location: "Jagatpura, Ring Road Junction, Jaipur",
    city: "Jaipur",
    type: "Plot",
    category: "Residential",
    size: "1800 Sq.Ft (200 Sq.Yd)",
    price: "₹32 Lac",
    priceNumeric: 3200000,
    rate: "₹1,777 / Sq.Ft",
    tag: "HOT LAUNCH",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    features: ["✅ JDA Approved", "Near Ring Road", "Immediate Registry", "Park Facing Plot", "80% Bank Loan Approved"],
    desc: "Peaceful residential plots near Jagatpura educational hub, international schools, and the upcoming metro line corridor."
  },
  {
    id: 7,
    title: "Grand Horizon Commercial Complex Land",
    location: "Tonk Road, Near Airport, Jaipur",
    city: "Jaipur",
    type: "Commercial",
    category: "Commercial",
    size: "5000 Sq.Ft (555 Sq.Yd)",
    price: "₹1.20 Cr",
    priceNumeric: 12000000,
    rate: "₹2,400 / Sq.Ft",
    tag: "PREMIUM",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80",
    features: ["✅ JDA Patta & RERA", "Commercial Belt Corner Plot", "High Footfall Zone", "12% Assured ROI"],
    desc: "Prime commercial land ideal for retail showrooms, corporate regional offices, or boutique healthcare centers along Tonk Road."
  },
  {
    id: 8,
    title: "Vatika SEZ Elite Township Plots",
    location: "Ajmer Road, Near Mahindra World City, Jaipur",
    city: "Jaipur",
    type: "Plot",
    category: "Residential",
    size: "1500 Sq.Ft (166 Sq.Yd)",
    price: "₹24 Lac",
    priceNumeric: 2400000,
    rate: "₹1,600 / Sq.Ft",
    tag: "HIGH ROI",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    features: ["✅ JDA Approved Patta", "Adjacent to MWC SEZ", "Instant Electricity & Water", "75% Bank Loan Approved"],
    desc: "Budget-friendly luxury plots adjacent to Mahindra World City SEZ, offering stellar rental yields and rapid capital growth."
  }
];

export default function Properties() {
  const [searchParams] = useSearchParams();
  const initialLoc = searchParams.get("loc") || "All";
  const initialType = searchParams.get("type") || "All";
  const initialBudget = searchParams.get("budget") || "All";

  const [selectedCity, setSelectedCity] = useState(initialLoc);
  const [selectedCategory, setSelectedCategory] = useState(initialType);
  const [selectedBudget, setSelectedBudget] = useState(initialBudget);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Synchronize when URL searchParams change
  useEffect(() => {
    if (searchParams.get("loc")) setSelectedCity(searchParams.get("loc"));
    if (searchParams.get("type")) setSelectedCategory(searchParams.get("type"));
    if (searchParams.get("budget")) setSelectedBudget(searchParams.get("budget"));
  }, [searchParams]);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProperty(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      // City filter
      if (selectedCity !== "All" && !item.city.toLowerCase().includes(selectedCity.toLowerCase()) && !selectedCity.toLowerCase().includes(item.city.toLowerCase())) {
        return false;
      }
      // Category / Type filter
      if (selectedCategory !== "All") {
        const cat = selectedCategory.toLowerCase();
        const matchesType = item.type.toLowerCase() === cat;
        const matchesCategory = item.category.toLowerCase() === cat;
        if (!matchesType && !matchesCategory) return false;
      }
      // Budget filter
      if (selectedBudget === "10L-25L" && (item.priceNumeric < 1000000 || item.priceNumeric > 2500000)) return false;
      if (selectedBudget === "25L-50L" && (item.priceNumeric < 2500000 || item.priceNumeric > 5000000)) return false;
      if (selectedBudget === "50L+" && item.priceNumeric < 5000000) return false;

      // Search keyword
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inLoc = item.location.toLowerCase().includes(q);
        const inDesc = item.desc.toLowerCase().includes(q);
        if (!inTitle && !inLoc && !inDesc) return false;
      }

      return true;
    });
  }, [selectedCity, selectedCategory, selectedBudget, searchQuery]);

  return (
    <div className="pageContainer">
      {/* PAGE HEADER */}
      <section className="pageHeader">
        <div className="headerOverlay"></div>
        <div className="headerContent">
          <p className="smallTitle">✨ RAJU VERMA • GOKUL KRIPA SALES & MARKETING</p>
          <h1>Where Vision <span>Becomes Value.</span></h1>
          <p className="headerSubtext">
            Explore 100% JDA Approved & RERA Registered Township Plots across <strong>Jaipur • Navi Mumbai • Bhiwadi • Ajmer • Kishangarh</strong> with clear title deeds.
          </p>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="filterSection">
        <div className="filterContainer">
          <div className="filterTopRow">
            <div className="searchBar">
              <span className="searchIcon">🔍</span>
              <input
                type="text"
                placeholder="Search by location, township name, size, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clearBtn" onClick={() => setSearchQuery("")}>✕</button>
              )}
            </div>

            <div className="categoryTabs">
              {[
                { label: "All Properties", value: "All" },
                { label: "🏡 Plots / Land", value: "Plot" },
                { label: "🏢 Commercial", value: "Commercial" },
                { label: "🏛️ Residential", value: "Residential" },
                { label: "⭐ Luxury Estates", value: "Luxury" }
              ].map((tab) => (
                <button
                  key={tab.value}
                  className={`tabBtn ${selectedCategory.toLowerCase() === tab.value.toLowerCase() ? "activeTab" : ""}`}
                  onClick={() => setSelectedCategory(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="filterBottomRow">
            <div className="filterSelectGroup">
              <label>Location / City</label>
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="All">All Cities (Jaipur, Navi Mumbai, Bhiwadi, Ajmer, Kishangarh)</option>
                <option value="Jaipur">Jaipur (Ajmer Rd, Jagatpura, Ring Rd)</option>
                <option value="Navi Mumbai">Navi Mumbai (Panvel, Airport Corridor)</option>
                <option value="Bhiwadi">Bhiwadi (NCR Industrial Belt)</option>
                <option value="Ajmer">Ajmer (Expressway, Pushkar Bypass)</option>
                <option value="Kishangarh">Kishangarh (Marble City Highway)</option>
              </select>
            </div>

            <div className="filterSelectGroup">
              <label>Budget Range</label>
              <select value={selectedBudget} onChange={(e) => setSelectedBudget(e.target.value)}>
                <option value="All">Any Budget Range</option>
                <option value="10L-25L">₹10 Lakh - ₹25 Lakh</option>
                <option value="25L-50L">₹25 Lakh - ₹50 Lakh</option>
                <option value="50L+">₹50 Lakh & Above</option>
              </select>
            </div>

            <button
              className="resetFilterBtn"
              onClick={() => {
                setSelectedCity("All");
                setSelectedCategory("All");
                setSelectedBudget("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* PROPERTY LISTINGS */}
      <section className="propertiesSection">
        <div className="resultsBar">
          <p>
            Showing <strong>{filteredProperties.length}</strong> verified luxury properties in portfolio
          </p>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="noResultsBox">
            <h3>No Properties Match Your Search</h3>
            <p>Try broadening your filter criteria or click below to view all our verified land plots.</p>
            <button
              className="goldBtn"
              onClick={() => {
                setSelectedCity("All");
                setSelectedCategory("All");
                setSelectedBudget("All");
                setSearchQuery("");
              }}
            >
              Reset Filters & View All
            </button>
          </div>
        ) : (
          <div className="propertyGrid">
            {filteredProperties.map((prop) => (
              <div className="propertyCard" key={prop.id}>
                <div className="propertyImage">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <span className="tag">{prop.tag}</span>
                  <span className="propertyTypeBadge">{prop.category}</span>
                </div>

                <div className="propertyInfo">
                  <p className="location">📍 {prop.location}</p>
                  <h3>{prop.title}</h3>
                  <p className="cardShortDesc">{prop.desc}</p>

                  <div className="featuresPills">
                    {prop.features.slice(0, 3).map((feat, idx) => (
                      <span key={idx} className="featPill">✓ {feat}</span>
                    ))}
                  </div>

                  <div className="propertyDetails">
                    <span>📏 {prop.size}</span>
                    <span>🏷️ {prop.rate}</span>
                  </div>

                  <div className="cardBottom">
                    <div>
                      <span className="priceLabel">Starting Price</span>
                      <strong>{prop.price}</strong>
                    </div>

                    <div className="cardActionBtns">
                      <button
                        className="quickViewBtn"
                        onClick={() => setSelectedProperty(prop)}
                      >
                        Details
                      </button>
                      <Link to={`/contact?property=${encodeURIComponent(prop.title)}`} className="inquireBtn">
                        Book Visit →
                      </Link>
                    </div>
                  </div>

                  <div className="propertyCardWaRow">
                    <a
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello Plot With Property, please send brochure, video tour and GPS pin for "${prop.title}" (${prop.location}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cardWaLink"
                    >
                      💬 WhatsApp Brochure & Live Pin
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* THOUGHTS & ASSURANCE ON LAND OWNERSHIP */}
      <section className="wisdomSection">
        <div className="sectionHeading">
          <p>THE POWER OF LAND</p>
          <h2>Thoughts on <span>Securing Real Estate</span></h2>
          <p className="sectionSubDesc">
            Why visionary families and high-net-worth investors allocate wealth into verified freehold land.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="wisdomGrid">
          <div className="wisdomCard">
            <span className="quoteMark">“</span>
            <p className="quoteText">
              Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense and clear title, it is about the safest investment in the world.
            </p>
            <div className="quoteAuthorBox">
              <div className="goldAuthorLine"></div>
              <h4>Franklin D. Roosevelt</h4>
              <p>Statesman & Real Estate Pioneer</p>
            </div>
          </div>

          <div className="wisdomCard">
            <span className="quoteMark">“</span>
            <p className="quoteText">
              At Plot With Property, every single plot undergoes rigorous 30-year legal auditing and physical on-ground demarcation so you invest with 100% peace of mind.
            </p>
            <div className="quoteAuthorBox">
              <div className="goldAuthorLine"></div>
              <h4>PWP Legal & Advisory Panel</h4>
              <p>Rajasthan & NCR Division</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK MODAL VIEW */}
      {selectedProperty && (
        <div className="modalOverlay" onClick={() => setSelectedProperty(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button
              className="modalCloseBtn"
              onClick={() => setSelectedProperty(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>
            <div className="modalImage">
              <img src={selectedProperty.image} alt={selectedProperty.title} />
              <span className="tag">{selectedProperty.tag}</span>
            </div>
            <div className="modalBody">
              <p className="location">📍 {selectedProperty.location}</p>
              <h2>{selectedProperty.title}</h2>
              <div className="modalPriceRow">
                <p className="modalPrice">{selectedProperty.price}</p>
                <span className="modalRate">({selectedProperty.rate})</span>
              </div>
              <p className="modalDesc">{selectedProperty.desc}</p>

              <h4>Property Highlights & Specifications</h4>
              <ul className="modalHighlights">
                {selectedProperty.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
                <li>📏 Dimension / Size: {selectedProperty.size}</li>
                <li>🏛️ Classification: {selectedProperty.type}</li>
              </ul>

              <div className="modalActions">
                <Link
                  to={`/contact?property=${encodeURIComponent(selectedProperty.title)}`}
                  className="goldBtn"
                  onClick={() => setSelectedProperty(null)}
                >
                  Schedule VIP Site Visit
                </Link>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello PWP, I am interested in "${selectedProperty.title}". Please share complete documentation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outlineBtn"
                >
                  💬 WhatsApp Details
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA FOOTER BANNER */}
      <section className="cta">
        <div>
          <p>CANNOT FIND WHAT YOU ARE LOOKING FOR?</p>
          <h2>Custom Plot & Land <span>Sourcing</span></h2>
          <p style={{ color: "#6B7280", marginTop: "10px", maxWidth: "600px" }}>
            Tell us your exact dimension requirement, preferred location, and budget. Our land acquisition specialists will source the perfect verified match.
          </p>
        </div>
        <Link to="/contact" className="goldBtn">
          Request Custom Land Search →
        </Link>
      </section>
    </div>
  );
}
