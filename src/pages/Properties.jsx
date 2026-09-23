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
    price: "₹45 Lakh",
    priceNumeric: 4500000,
    rate: "₹1,800 / Sq.Ft",
    tag: "JDA APPROVED",
    image: "/plots/indian_luxury_township.jpg",
    features: ["✅ JDA Approved Patta", "✅ RERA Registered Township", "60ft Wide Sector Road", "Immediate Registry & Demarcation", "Underground Electricity & Water"],
    desc: "Premium residential plot situated on Ajmer Road. Features gated boundary, landscaped park, 24/7 security, and wide roads. Ideal for luxury duplex and villa construction."
  },
  {
    id: 2,
    title: "Aerocity Airport Corridor Investment Plot",
    location: "Panvel, Near International Airport, Navi Mumbai",
    city: "Navi Mumbai",
    type: "Plot",
    category: "Luxury",
    size: "3000 Sq.Ft (333 Sq.Yd)",
    price: "₹85 Lakh",
    priceNumeric: 8500000,
    rate: "₹2,833 / Sq.Ft",
    tag: "AIRPORT ZONE",
    image: "/plots/indian_airport_corridor.jpg",
    features: ["✅ RERA Registered", "Adjacent to International Airport", "Trans-Harbour Sea Link Linked", "High Capital Appreciation Zone"],
    desc: "Prime freehold land in the Navi Mumbai International Airport corridor delivering superior long-term capital growth."
  },
  {
    id: 3,
    title: "Gokul Green City Master Township Plot",
    location: "Alwar Bypass Road, Bhiwadi (NCR)",
    city: "Bhiwadi",
    type: "Plot",
    category: "Residential",
    size: "1800 Sq.Ft (200 Sq.Yd)",
    price: "₹26 Lakh",
    priceNumeric: 2600000,
    rate: "₹1,444 / Sq.Ft",
    tag: "HIGH ROI",
    image: "/plots/indian_villa_plot.jpg",
    features: ["✅ RERA Approved", "Gated Township with 24/7 Security", "Wide Sector Roads", "Near Honda & RIICO Industrial Hub"],
    desc: "Master planned township plot in Bhiwadi's prime residential belt. 80% bank loan pre-approved with instant registry."
  },
  {
    id: 4,
    title: "Pushkar Expressway Royal Township Plot",
    location: "National Highway, Pushkar Bypass, Ajmer",
    city: "Ajmer",
    type: "Plot",
    category: "Residential",
    size: "2250 Sq.Ft (250 Sq.Yd)",
    price: "₹34 Lakh",
    priceNumeric: 3400000,
    rate: "₹1,511 / Sq.Ft",
    tag: "JDA APPROVED",
    image: "/plots/indian_luxury_township.jpg",
    features: ["✅ JDA Patta & Clear Title", "Instant Physical Demarcation", "Aravali View Gated Layout", "80% Bank Loan Approved"],
    desc: "Scenic plot overlooking the Aravali Hills on Ajmer-Pushkar Highway. Clubhouse, community parks, and fast-growing neighborhood."
  },
  {
    id: 5,
    title: "Marble City Highway Commercial & Residential Hub",
    location: "Main National Highway-8, Kishangarh",
    city: "Kishangarh",
    type: "Commercial",
    category: "Commercial",
    size: "5000 Sq.Ft (555 Sq.Yd)",
    price: "₹65 Lakh",
    priceNumeric: 6500000,
    rate: "₹1,300 / Sq.Ft",
    tag: "COMMERCIAL HUB",
    image: "/plots/indian_headquarters.jpg",
    features: ["✅ RERA & Statutory Clearances", "100ft Highway Frontage", "Kishangarh Airport Road Connectivity", "Ideal for Showrooms, Hotels & Warehouses"],
    desc: "High-footfall corner commercial plot on NH-8 Kishangarh. High commercial visibility for marble showrooms, hotels, and retail ventures."
  },
  {
    id: 6,
    title: "Emerald Green Township Residential Plot",
    location: "Jagatpura, Ring Road Junction, Jaipur",
    city: "Jaipur",
    type: "Plot",
    category: "Residential",
    size: "1800 Sq.Ft (200 Sq.Yd)",
    price: "₹32 Lakh",
    priceNumeric: 3200000,
    rate: "₹1,777 / Sq.Ft",
    tag: "HOT LAUNCH",
    image: "/plots/indian_villa_plot.jpg",
    features: ["✅ JDA Approved Patta", "Close to Ring Road Junction", "Immediate Registry & Mutation", "Park-Facing Corner Plot", "80% Bank Loan Approved"],
    desc: "Peaceful family residential plot near Jagatpura Education Hub, international schools, and the upcoming metro expansion."
  },
  {
    id: 7,
    title: "Grand Horizon Commercial Land Parcel",
    location: "Tonk Road, Near Airport, Jaipur",
    city: "Jaipur",
    type: "Commercial",
    category: "Commercial",
    size: "5000 Sq.Ft (555 Sq.Yd)",
    price: "₹1.20 Crore",
    priceNumeric: 12000000,
    rate: "₹2,400 / Sq.Ft",
    tag: "PREMIUM",
    image: "/plots/indian_headquarters.jpg",
    features: ["✅ JDA Patta & RERA", "Commercial Belt Corner Plot", "High Footfall Arterial Corridor", "12% Assured Returns"],
    desc: "High-visibility commercial land parcel on Tonk Road main arterial corridor. Best suited for corporate offices, retail hubs, and medical centers."
  },
  {
    id: 8,
    title: "Vatika SEZ Elite Township Plots",
    location: "Ajmer Road, Near Mahindra World City, Jaipur",
    city: "Jaipur",
    type: "Plot",
    category: "Residential",
    size: "1500 Sq.Ft (166 Sq.Yd)",
    price: "₹24 Lakh",
    priceNumeric: 2400000,
    rate: "₹1,600 / Sq.Ft",
    tag: "HIGH ROI",
    image: "/plots/indian_luxury_township.jpg",
    features: ["✅ JDA Approved Patta", "Adjoining Mahindra World City (MWC)", "Ready Electricity, Water & Blacktop Roads", "75% Bank Loan Available"],
    desc: "Budget-friendly luxury plot near Mahindra SEZ. High rental yield potential and rapid neighborhood development."
  }
];

export default function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLoc = searchParams.get("loc") || "All";
  const initialType = searchParams.get("type") || "All";
  const initialBudget = searchParams.get("budget") || "All";
  const initialQ = searchParams.get("q") || "";

  const [selectedCity, setSelectedCity] = useState(initialLoc);
  const [selectedCategory, setSelectedCategory] = useState(initialType);
  const [selectedBudget, setSelectedBudget] = useState(initialBudget);
  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    if (searchParams.get("loc")) setSelectedCity(searchParams.get("loc"));
    if (searchParams.get("type")) setSelectedCategory(searchParams.get("type"));
    if (searchParams.get("budget")) setSelectedBudget(searchParams.get("budget"));
    if (searchParams.get("q")) setSearchQuery(searchParams.get("q"));
  }, [searchParams]);

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((prop) => {
      const matchCity =
        selectedCity === "All" ||
        prop.city.toLowerCase() === selectedCity.toLowerCase();

      const matchCategory =
        selectedCategory === "All" ||
        prop.category.toLowerCase() === selectedCategory.toLowerCase() ||
        prop.type.toLowerCase() === selectedCategory.toLowerCase();

      let matchBudget = true;
      if (selectedBudget === "10L-25L") {
        matchBudget = prop.priceNumeric >= 1000000 && prop.priceNumeric <= 2500000;
      } else if (selectedBudget === "25L-50L") {
        matchBudget = prop.priceNumeric > 2500000 && prop.priceNumeric <= 5000000;
      } else if (selectedBudget === "50L+") {
        matchBudget = prop.priceNumeric > 5000000;
      }

      const matchSearch =
        searchQuery === "" ||
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.desc.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCity && matchCategory && matchBudget && matchSearch;
    });
  }, [selectedCity, selectedCategory, selectedBudget, searchQuery]);

  const resetFilters = () => {
    setSelectedCity("All");
    setSelectedCategory("All");
    setSelectedBudget("All");
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <div className="pageContainer mbThemePage">
      {/* FLOATING QUICK CONTACT PILL */}
      <div className="floatingContactPill">
        <a href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20verified%20plots." target="_blank" rel="noopener noreferrer" className="floatWaBtn">
          <span className="waIcon">💬</span>
          <span className="waText">Chat on WhatsApp</span>
        </a>
        <a href="tel:+919876543210" className="floatCallBtn">
          <span className="callIcon">📞</span>
          <span className="callText">+91 98765 43210</span>
        </a>
      </div>

      {/* MAGICBRICKS HEADER BANNER */}
      <section className="mbPortalHeader">
        <div className="mbPortalHeaderInner">
          <div className="mbPortalBadge">
            <span className="mbLiveDot"></span>
            <span>100% Government Approved • JDA & RERA Certified Plots</span>
          </div>
          <h1>Verified Plots & Master Townships</h1>
          <p>
            100% clear title, physical on-ground demarcation, and ready-to-register freehold plots across <strong>Jaipur, Navi Mumbai, Bhiwadi, Ajmer & Kishangarh</strong>.
          </p>
        </div>
      </section>

      {/* MAGICBRICKS SEARCH & FILTER TOOLBAR */}
      <section className="mbFilterToolbarSection">
        <div className="mbFilterToolbarCard">
          {/* Top City Tabs */}
          <div className="mbCityFilterPills">
            <span className="mbFilterGroupLabel">Select City:</span>
            {["All", "Jaipur", "Navi Mumbai", "Bhiwadi", "Ajmer", "Kishangarh"].map((city) => (
              <button
                key={city}
                type="button"
                className={`mbCityPillBtn ${selectedCity === city ? "active" : ""}`}
                onClick={() => setSelectedCity(city)}
              >
                {city === "All" ? "📍 All 5 Cities" : `📍 ${city}`}
              </button>
            ))}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="mbFilterInputsGrid">
            <div className="mbInputGroup">
              <label>Search Location / Keyword</label>
              <input
                type="text"
                placeholder="e.g. Ajmer Road, Airport, Ring Road..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mbTextInput"
              />
            </div>

            <div className="mbInputGroup">
              <label>Property Type</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mbSelectInput"
              >
                <option value="All">All Types</option>
                <option value="Residential">Residential Plots</option>
                <option value="Commercial">Commercial Land</option>
                <option value="Luxury">Luxury / Airport Enclave</option>
              </select>
            </div>

            <div className="mbInputGroup">
              <label>Budget Range</label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="mbSelectInput"
              >
                <option value="All">All Budgets</option>
                <option value="10L-25L">₹10 Lakh – ₹25 Lakh</option>
                <option value="25L-50L">₹25 Lakh – ₹50 Lakh</option>
                <option value="50L+">₹50 Lakh & Above</option>
              </select>
            </div>

            <div className="mbFilterResetCol">
              <button type="button" onClick={resetFilters} className="mbResetBtn">
                ↻ Reset Filters
              </button>
            </div>
          </div>

          {/* Active Filter Badges */}
          <div className="mbActiveFiltersRow">
            <span className="mbActiveCount">
              Total <strong>{filteredProperties.length}</strong> verified plots available
            </span>
            {(selectedCity !== "All" || selectedCategory !== "All" || selectedBudget !== "All" || searchQuery !== "") && (
              <div className="mbFilterBadges">
                {selectedCity !== "All" && <span className="mbActiveBadge">City: {selectedCity}</span>}
                {selectedCategory !== "All" && <span className="mbActiveBadge">Type: {selectedCategory}</span>}
                {selectedBudget !== "All" && <span className="mbActiveBadge">Budget: {selectedBudget}</span>}
                {searchQuery !== "" && <span className="mbActiveBadge">Keyword: "{searchQuery}"</span>}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROPERTIES LISTINGS GRID */}
      <section className="mbPropertiesGridSection">
        <div className="mbPropertiesContainer">
          {filteredProperties.length === 0 ? (
            <div className="mbNoResultsBox">
              <div className="mbNoResultsIcon">🔍</div>
              <h3>No Matching Plots Found</h3>
              <p>Please adjust your keyword, city, or budget range to view available inventory.</p>
              <button onClick={resetFilters} className="mbPrimaryGoldBtn">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="mbPropertyCardsGrid">
              {filteredProperties.map((property) => (
                <div className="mbPropertyCard" key={property.id}>
                  {/* Image with Badges */}
                  <div className="mbPropImgBox">
                    <img src={property.image} alt={property.title} />
                    <span className="mbPropVerified">✓ JDA/RERA VERIFIED</span>
                    <span className="mbPropTypeBadge">{property.tag}</span>
                    <span className="mbPropPriceTag">{property.price}</span>
                  </div>

                  {/* Body Info */}
                  <div className="mbPropBody">
                    <div className="mbPropPriceRow">
                      <div className="mbPropPriceMain">
                        <strong>{property.price}</strong>
                      </div>
                    </div>

                    <h3 className="mbPropTitle">{property.title}</h3>
                    <p className="mbPropLocation">📍 {property.location}</p>
                    <p className="mbPropDesc">{property.desc}</p>

                    {/* Features Chips */}
                    <div className="mbPropPills">
                      {property.features.slice(0, 3).map((feat, fIdx) => (
                        <span key={fIdx} className="mbPropPill">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Seller Advisor Row */}
                    <div className="mbPropSellerRow">
                      <div className="mbSellerInfo">
                        <span className="mbSellerBadge">Direct Developer Advisory</span>
                        <span className="mbSellerName">Raju Verma • Gokul Kripa</span>
                      </div>
                      <span className="mbZeroBrok">0% Brokerage</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mbPropCardActions">
                      <button 
                        type="button"
                        className="mbPropDetailBtn"
                        onClick={() => setSelectedProperty(property)}
                      >
                        📋 View Layout
                      </button>

                      <Link 
                        to={`/contact?property=${encodeURIComponent(property.title)}`}
                        className="mbPropBookBtn"
                      >
                        🚗 Site Visit
                      </Link>

                      <a 
                        href={`https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20(${encodeURIComponent(property.location)}).`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mbPropWaBtn"
                        title="WhatsApp Inquiry"
                      >
                        💬
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PROPERTY DETAILS MODAL */}
      {selectedProperty && (
        <div className="mbModalBackdrop" onClick={() => setSelectedProperty(null)}>
          <div className="mbModalContent" onClick={(e) => e.stopPropagation()}>
            <button className="mbModalCloseBtn" onClick={() => setSelectedProperty(null)}>✕</button>
            
            <div className="mbModalGrid">
              <div className="mbModalImgCol">
                <img src={selectedProperty.image} alt={selectedProperty.title} className="mbModalMainImg" />
                <div className="mbModalImgBadge">{selectedProperty.tag}</div>
                <div className="mbModalPriceBanner">
                  <strong>{selectedProperty.price}</strong>
                </div>
              </div>

              <div className="mbModalDetailsCol">
                <span className="mbModalGovTag">🛡️ 100% JDA & RERA Approved Patta</span>
                <h2>{selectedProperty.title}</h2>
                <p className="mbModalLoc">📍 {selectedProperty.location} ({selectedProperty.city})</p>
                <p className="mbModalDesc">{selectedProperty.desc}</p>

                <div className="mbModalSpecsGrid">
                  <div className="mbSpecBox">
                    <span className="mbSpecLabel">Category</span>
                    <strong>{selectedProperty.category} Plot</strong>
                  </div>
                  <div className="mbSpecBox">
                    <span className="mbSpecLabel">Approvals</span>
                    <strong>100% JDA / RERA</strong>
                  </div>
                  <div className="mbSpecBox">
                    <span className="mbSpecLabel">Possession</span>
                    <strong>Immediate Registry & Possession</strong>
                  </div>
                  <div className="mbSpecBox">
                    <span className="mbSpecLabel">Brokerage</span>
                    <strong style={{ color: "#2E6B52" }}>0% (Direct Developer Price)</strong>
                  </div>
                </div>

                <div className="mbModalFeatures">
                  <h4>Key Township Features:</h4>
                  <ul>
                    {selectedProperty.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="mbModalActions">
                  <Link 
                    to={`/contact?property=${encodeURIComponent(selectedProperty.title)}`}
                    className="mbPrimaryGoldBtn"
                    onClick={() => setSelectedProperty(null)}
                  >
                    🚗 Book Free AC Cab Site Visit →
                  </Link>
                  <a
                    href={`https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20please%20share%20the%20layout%20plan%20for%20${encodeURIComponent(selectedProperty.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mbWaBtn"
                  >
                    💬 Request Layout Plan on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
