import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Plot");
  const [filters, setFilters] = useState({
    location: "Jaipur",
    budget: "All",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/properties?loc=${filters.location}&type=${activeTab}&budget=${filters.budget}`);
  };

  const primeLocations = [
    {
      name: "Ajmer Road & Ring Road Corridor",
      city: "Jaipur",
      growth: "+18% YoY Growth",
      tag: "HIGH ROI",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      desc: "Jaipur's premier gated townships with JDA approval, 60ft-100ft sector roads & SEZ connectivity."
    },
    {
      name: "Panvel & Airport Growth Zone",
      city: "Navi Mumbai",
      growth: "+22% YoY Growth",
      tag: "MEGA INFRA",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      desc: "High-yield investment plots near upcoming international airport, trans-harbour link & metro line."
    },
    {
      name: "Alwar Highway & Industrial Belt",
      city: "Bhiwadi",
      growth: "+16% YoY Growth",
      tag: "NCR BOOM",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
      desc: "Fast-developing NCR industrial corridor offering rapid residential expansion & guaranteed rental yields."
    },
    {
      name: "Expressway & Marble City Belt",
      city: "Kishangarh & Ajmer",
      growth: "+15% YoY Growth",
      tag: "STRATEGIC",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80",
      desc: "Prime connectivity along National Highway with airport proximity and booming commercial hubs."
    }
  ];

  const clientReviews = [
    {
      id: 1,
      name: "Rajendra Singhania",
      role: "Industrialist & NRI Investor",
      location: "Jaipur Ajmer Road Plot",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      review: "Purchased a 500 Sq.Yd JDA-approved plot through Raju Verma Sir (Gokul Kripa). Complete peace of mind with 100% legal verification and immediate registry. Truly 'Where Vision Becomes Value'!"
    },
    {
      id: 2,
      name: "Dr. Meenakshi Sharma",
      role: "Senior Surgeon",
      location: "Navi Mumbai Investment Plot",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      review: "Raju Verma's guidance for land investment near Navi Mumbai Airport has yielded fantastic appreciation. Reliable, transparent, and prompt. Highly recommended!"
    },
    {
      id: 3,
      name: "Vikram Malhotra",
      role: "CEO, Tech Horizon",
      location: "Bhiwadi Commercial Hub",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      review: "Gokul Kripa Sales & Marketing provided on-ground demarcation and clear RERA registered titles. Professional real estate advisory at its finest."
    },
    {
      id: 4,
      name: "Col. Sanjeev Rawat (Retd.)",
      role: "Defense Veteran",
      location: "Ajmer-Kishangarh Expressway",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      review: "Clean paperwork, zero hidden costs, and genuine guidance from Raju Verma. In the real estate industry, finding trustworthy experts like him is rare."
    }
  ];

  const marketInsights = [
    {
      id: 1,
      date: "Sep 2026",
      readTime: "4 Min Read",
      title: "Why Jaipur & Kishangarh Expressway is the Next Real Estate Goldmine",
      desc: "Infrastructure upgrades, DMIC logistics parks, and rapid connectivity make these township plots a high-growth asset for 2026-2030.",
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      date: "Aug 2026",
      readTime: "5 Min Read",
      title: "Complete Checklist for JDA & RERA Township Land Legal Due Diligence",
      desc: "Essential documents, 30-year mother deed verification, and registry precautions every smart land buyer must know.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      date: "Jul 2026",
      readTime: "3 Min Read",
      title: "Navi Mumbai vs NCR Bhiwadi: Where to Allocate Your Growth Capital?",
      desc: "Comparative analysis of rental yields, upcoming airport infrastructure trajectories, and long-term capital gains.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const [selectedTownshipIndex, setSelectedTownshipIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const heroTownships = [
    {
      id: "jaipur",
      city: "Jaipur",
      title: "Royal Palm Smart Township",
      corridor: "Ajmer Road & Ring Road Corridor",
      price: "₹18.50 Lakh",
      priceUnit: "onwards",
      growth: "+18% YoY Growth",
      badge: "JDA APPROVED • IMMEDIATE REGISTRY",
      tag: "🔥 85% SOLD OUT",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      features: ["60ft - 100ft Sector Roads", "Underground Electrification", "Physical Demarcation & Patta"]
    },
    {
      id: "navi-mumbai",
      city: "Navi Mumbai",
      title: "Aerotropolis Gold Enclave",
      corridor: "Panvel & Airport Growth Corridor",
      price: "₹42.00 Lakh",
      priceUnit: "onwards",
      growth: "+22% YoY Growth",
      badge: "MEGA INFRA • HIGH ROI",
      tag: "⭐ AIRPORT PROXIMITY",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      features: ["15 Mins to New International Airport", "Clear Title Freehold Land", "High Capital Appreciation"]
    },
    {
      id: "bhiwadi",
      city: "Bhiwadi",
      title: "Industrial Horizon Township",
      corridor: "Alwar Highway & NCR Industrial Belt",
      price: "₹14.80 Lakh",
      priceUnit: "onwards",
      growth: "+16% YoY Growth",
      badge: "RERA REGISTERED • NCR ZONE",
      tag: "⚡ HIGH RENTAL YIELD",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      features: ["Direct Highway Connectivity", "DMIC Logistics Corridor", "Gated Security & Water Line"]
    },
    {
      id: "kishangarh",
      city: "Kishangarh & Ajmer",
      title: "Emerald Expressway Hub",
      corridor: "Expressway & Marble City Belt",
      price: "₹16.20 Lakh",
      priceUnit: "onwards",
      growth: "+15% YoY Growth",
      badge: "HIGHWAY FRONTAGE • INSTANT PATTA",
      tag: "💎 STRATEGIC HUB",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
      features: ["National Highway Frontage", "Airport Corridor Access", "Rapid Commercial Expansion"]
    }
  ];

  // Auto slide featured townships every 5.5 seconds unless paused
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setSelectedTownshipIndex((prev) => (prev + 1) % heroTownships.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlay, heroTownships.length]);

  const nextTownship = () => {
    setSelectedTownshipIndex((prev) => (prev + 1) % heroTownships.length);
  };

  const prevTownship = () => {
    setSelectedTownshipIndex((prev) => (prev - 1 + heroTownships.length) % heroTownships.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextTownship();
      } else {
        prevTownship();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="pageContainer">
      {/* FLOATING QUICK CONTACT PILL */}
      <div className="floatingContactPill">
        <a href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20JDA/RERA%20approved%20plots." target="_blank" rel="noopener noreferrer" className="floatWaBtn">
          <span className="waIcon">💬</span>
          <span className="waText">Chat on WhatsApp</span>
        </a>
        <a href="tel:+919876543210" className="floatCallBtn">
          <span className="callIcon">📞</span>
          <span className="callText">+91 98765 43210</span>
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="heroGlowSphere heroGlowSphere1"></div>
        <div className="heroGlowSphere heroGlowSphere2"></div>
        <div className="heroGridPattern"></div>
        <div className="heroOverlay"></div>

        <div className="heroContainer">
          {/* LEFT COLUMN: Authority & Headings */}
          <div className="heroContent">
            {/* Trust & Authority Pill */}
            <div className="heroPreBadge">
              <span className="livePulseDot"></span>
              <span className="heroPreBadgeText">RAJASTHAN & MAHARASHTRA'S PREMIER LAND ADVISORY</span>
            </div>

            {/* Expert Verification Badge */}
            <div className="heroExpertBadge">
              <div className="expertAvatarWrapper">
                <img src="/emblem.png" alt="Raju Verma Emblem" className="expertAvatarEmblem" />
                <span className="verifiedStar">✓</span>
              </div>
              <div className="expertInfoCol">
                <div className="expertNameRow">
                  <span className="expertName">RAJU VERMA</span>
                  <span className="expertRating">★★★★★ 4.9/5 (480+ Investors)</span>
                </div>
                <span className="expertAffil">Chief Real Estate Advisor • Gokul Kripa Sales & Marketing</span>
              </div>
            </div>

            {/* Hero Master Title */}
            <h1 className="heroMasterTitle">
              Where <span className="goldGradientText">Legacy</span> Takes Shape.
              <br />
              <span className="heroMasterSubTitle">Where Vision Becomes High Value.</span>
            </h1>

            <p className="heroMottoTagline">
              PLOT WITH PROPERTY — Secure Your Future With Prime JDA & RERA Approved Land.
            </p>

            <p className="heroText">
              Discover 100% government approved, clear-title freehold township plots across <strong>Jaipur, Navi Mumbai, Bhiwadi, Ajmer, and Kishangarh</strong> with immediate registry, physical on-ground demarcation, and verified double-digit annual appreciation.
            </p>

            {/* Interactive Location Selector Chips */}
            <div className="heroCitySelector">
              <div className="citySelectHeader">
                <span className="citySelectLabel">EXPLORE GROWTH CORRIDOR:</span>
                <span className="citySwipeHint">Tap or swipe cards ⇄</span>
              </div>
              <div className="cityPillGroup">
                {heroTownships.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`cityPill ${selectedTownshipIndex === idx ? "active" : ""}`}
                    onClick={() => setSelectedTownshipIndex(idx)}
                  >
                    📍 {t.city}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="heroButtons">
              <Link to={`/properties?loc=${heroTownships[selectedTownshipIndex].city}`} className="goldBtn heroPrimaryBtn">
                <span>Explore {heroTownships[selectedTownshipIndex].city} Townships</span>
                <span className="btnArrow">→</span>
              </Link>

              <Link to="/contact" className="outlineBtn heroSecondaryBtn">
                <span>📅 Schedule Site Visit</span>
              </Link>

              <a 
                href={`https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20${encodeURIComponent(heroTownships[selectedTownshipIndex].title)}%20in%20${heroTownships[selectedTownshipIndex].city}.`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="heroWaQuickBtn"
                title="Direct WhatsApp Consultation"
              >
                <span className="heroWaIcon">💬</span>
                <span className="heroWaText">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Key Guarantees Grid */}
            <div className="heroCertBadges">
              <div className="certItem">
                <span className="certIcon">🏛️</span>
                <div>
                  <strong>100% JDA & RERA Approved</strong>
                  <p>Full Government Legal Clearance</p>
                </div>
              </div>
              <div className="certItem">
                <span className="certIcon">📜</span>
                <div>
                  <strong>Instant Registry & Patta</strong>
                  <p>Immediate 100% Title Transfer</p>
                </div>
              </div>
              <div className="certItem">
                <span className="certIcon">📐</span>
                <div>
                  <strong>On-Ground Demarcation</strong>
                  <p>Boundary Pillars & Sector Roads</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Luxury Showcase Deck */}
          <div 
            className="heroVisualDeck"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="townshipShowcaseCard"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Card Image with overlay */}
              <div className="townshipImgContainer">
                <img 
                  src={heroTownships[selectedTownshipIndex].image} 
                  alt={heroTownships[selectedTownshipIndex].title}
                  className="townshipImg"
                  key={heroTownships[selectedTownshipIndex].id}
                />
                <div className="townshipImgOverlay"></div>
                
                {/* Carousel Nav Controls */}
                <button 
                  className="cardNavBtn cardNavPrev" 
                  onClick={prevTownship}
                  type="button"
                  aria-label="Previous township"
                >
                  ‹
                </button>
                <button 
                  className="cardNavBtn cardNavNext" 
                  onClick={nextTownship}
                  type="button"
                  aria-label="Next township"
                >
                  ›
                </button>

                {/* Top Floating Badge */}
                <div className="townshipTopBadge">
                  <span className="badgeFire">{heroTownships[selectedTownshipIndex].tag}</span>
                  <span className="badgeGrowth">{heroTownships[selectedTownshipIndex].growth}</span>
                </div>

                {/* Bottom Floating Value Pill */}
                <div className="townshipPricePill">
                  <span className="priceLabel">STARTING FROM</span>
                  <span className="priceValue">{heroTownships[selectedTownshipIndex].price}</span>
                  <span className="priceUnit">{heroTownships[selectedTownshipIndex].priceUnit}</span>
                </div>

                {/* Dot Indicators on Image */}
                <div className="townshipDots">
                  {heroTownships.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      className={`townshipDot ${selectedTownshipIndex === dotIdx ? "active" : ""}`}
                      onClick={() => setSelectedTownshipIndex(dotIdx)}
                      aria-label={`View township ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="townshipCardBody">
                <div className="townshipMetaRow">
                  <span className="townshipGovTag">🛡️ {heroTownships[selectedTownshipIndex].badge}</span>
                  <span className="townshipCityTag">📍 {heroTownships[selectedTownshipIndex].city}</span>
                </div>

                <h3 className="townshipTitle">{heroTownships[selectedTownshipIndex].title}</h3>
                <p className="townshipCorridor">🛣️ {heroTownships[selectedTownshipIndex].corridor}</p>

                <div className="townshipFeaturesList">
                  {heroTownships[selectedTownshipIndex].features.map((feat, fIdx) => (
                    <span key={fIdx} className="townshipFeatChip">
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Quick Action in Card */}
                <div className="townshipCardFooter">
                  <Link 
                    to={`/properties?loc=${heroTownships[selectedTownshipIndex].city}`}
                    className="viewTownshipBtn"
                  >
                    Explore Plots & Layout Plans →
                  </Link>
                  <div className="liveAvailabilityBadge">
                    <span className="liveGreenDot"></span>
                    <span>Free Cab Site Visit Available</span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Highlight Bubble */}
              <div className="floatingConsultantCard">
                <div className="consultantAvatar">
                  <img src="/emblem.png" alt="Raju Verma Emblem" />
                </div>
                <div className="consultantText">
                  <div className="consultantStatus">
                    <span className="liveGreenDot"></span>
                    <strong>Raju Verma</strong> (Direct Advisory)
                  </div>
                  <p>100% Freehold • Zero Brokerage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FULL WIDTH LUXURY STATS RIBBON */}
        <div className="heroStatsRibbon">
          <div className="statRibbonItem">
            <span className="statRibbonIcon">💎</span>
            <div className="statRibbonText">
              <h3>500+</h3>
              <p>Verified Plots Available</p>
            </div>
          </div>
          <div className="statRibbonDivider"></div>
          <div className="statRibbonItem">
            <span className="statRibbonIcon">📍</span>
            <div className="statRibbonText">
              <h3>5 Cities</h3>
              <p>Jaipur • Mumbai • Bhiwadi • Ajmer</p>
            </div>
          </div>
          <div className="statRibbonDivider"></div>
          <div className="statRibbonItem">
            <span className="statRibbonIcon">🏛️</span>
            <div className="statRibbonText">
              <h3>₹250Cr+</h3>
              <p>Land Assets Facilitated</p>
            </div>
          </div>
          <div className="statRibbonDivider"></div>
          <div className="statRibbonItem">
            <span className="statRibbonIcon">⭐</span>
            <div className="statRibbonText">
              <h3>99.4%</h3>
              <p>Investor Trust Score</p>
            </div>
          </div>
          <div className="statRibbonDivider"></div>
          <div className="statRibbonItem">
            <span className="statRibbonIcon">🛡️</span>
            <div className="statRibbonText">
              <h3>100%</h3>
              <p>JDA & RERA Approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED SEARCH FILTER BOX */}
      <section className="searchSection">
        <div className="searchBox">
          <div className="searchFilterTabs">
            {["Plot", "Commercial", "Residential", "Luxury"].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`filterTabBtn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "Plot" ? "🏡 Buy Plots / Land" : tab === "Commercial" ? "🏢 Commercial Space" : tab === "Residential" ? "🏛️ Luxury Villas" : "⭐ High ROI Projects"}
              </button>
            ))}
          </div>

          <form className="searchGridForm" onSubmit={handleSearch}>
            <div className="filterField">
              <label>Target Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="All">All Cities (Jaipur, Navi Mumbai, Bhiwadi, Ajmer, Kishangarh)</option>
                <option value="Jaipur">Jaipur (Ajmer Rd, Jagatpura, Ring Rd)</option>
                <option value="Navi Mumbai">Navi Mumbai (Panvel, Airport Corridor)</option>
                <option value="Bhiwadi">Bhiwadi (NCR Industrial Belt)</option>
                <option value="Ajmer">Ajmer (Expressway, Pushkar Bypass)</option>
                <option value="Kishangarh">Kishangarh (Marble City Highway)</option>
              </select>
            </div>

            <div className="filterField">
              <label>Budget Allocation</label>
              <select
                value={filters.budget}
                onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
              >
                <option value="All">Any Budget Range</option>
                <option value="10L-25L">₹10 Lakh – ₹25 Lakh</option>
                <option value="25L-50L">₹25 Lakh – ₹50 Lakh</option>
                <option value="50L+">₹50 Lakh & Above</option>
              </select>
            </div>

            <div className="filterField">
              <label>Legal Status</label>
              <select defaultValue="RERA/JDA Approved">
                <option>✅ JDA Approved & RERA Registered</option>
                <option>Clear Title Freehold Patta</option>
                <option>Instant Registry & Demarcation</option>
              </select>
            </div>

            <button type="submit" className="searchBtn">
              🔍 Find Properties
            </button>
          </form>
        </div>
      </section>

      {/* PRIME GROWTH CORRIDORS / LOCATIONS */}
      <section className="corridorsSection">
        <div className="sectionHeading">
          <p>HIGH-APPRECIATION ZONES</p>
          <h2>Prime Growth <span>Corridors</span></h2>
          <p className="sectionSubDesc">
            Strategically curated locations delivering consistent double-digit capital appreciation and exceptional rental potential.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="corridorGrid">
          {primeLocations.map((loc, idx) => (
            <div className="corridorCard" key={idx}>
              <div className="corridorImgBox">
                <img src={loc.image} alt={loc.name} />
                <span className="corridorTag">{loc.tag}</span>
                <span className="growthBadge">{loc.growth}</span>
              </div>
              <div className="corridorContent">
                <p className="corridorCity">📍 {loc.city}</p>
                <h3>{loc.name}</h3>
                <p className="corridorDesc">{loc.desc}</p>
                <Link to={`/properties?loc=${loc.city}`} className="exploreCorridorLink">
                  View Available Plots in {loc.name.split(" ")[0]} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES PREVIEW */}
      <section className="properties">
        <div className="sectionHeading">
          <p>HANDPICKED INVENTORY</p>
          <h2>Featured <span>Properties</span></h2>
          <p className="sectionSubDesc">
            Explore premium verified plots and commercial hubs with guaranteed legal clarity and immediate possession.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="propertyGrid">
          <div className="propertyCard">
            <div className="propertyImage">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Royal Enclave Gated Plot"
              />
              <span className="tag">FEATURED</span>
              <span className="propertyTypeBadge">Residential Plot</span>
            </div>

            <div className="propertyInfo">
              <p className="location">📍 Ajmer Road, Jaipur</p>
              <h3>Royal Enclave Gated Plot</h3>
              <p className="cardShortDesc">Luxury gated community plot with wide asphalt roads, underground electrification, and clubhouse access.</p>
              
              <div className="featuresPills">
                <span className="featPill">✓ JDA Approved</span>
                <span className="featPill">✓ 60ft Main Road</span>
                <span className="featPill">✓ Bank Loan OK</span>
              </div>

              <div className="propertyDetails">
                <span>📏 2500 Sq.Ft (277 Sq.Yd)</span>
                <span>🏛️ Gated Enclave</span>
              </div>

              <div className="cardBottom">
                <div>
                  <span className="priceLabel">Starting Price</span>
                  <strong>₹45 Lac</strong>
                </div>
                <Link to="/contact?property=Royal%20Enclave%20Gated%20Plot" className="viewCardBtn">
                  Book Site Visit →
                </Link>
              </div>
            </div>
          </div>

          <div className="propertyCard">
            <div className="propertyImage">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                alt="Grand Horizon Commercial Complex"
              />
              <span className="tag">PREMIUM</span>
              <span className="propertyTypeBadge">Commercial Land</span>
            </div>

            <div className="propertyInfo">
              <p className="location">📍 Tonk Road, Jaipur</p>
              <h3>Grand Horizon Commercial Complex</h3>
              <p className="cardShortDesc">High-visibility corner commercial plot along major 100ft arterial road. High footfall and immense corporate demand.</p>

              <div className="featuresPills">
                <span className="featPill">✓ Commercial Belt</span>
                <span className="featPill">✓ Corner Plot</span>
                <span className="featPill">✓ 12% Assured ROI</span>
              </div>

              <div className="propertyDetails">
                <span>📏 5000 Sq.Ft (555 Sq.Yd)</span>
                <span>🏢 Commercial</span>
              </div>

              <div className="cardBottom">
                <div>
                  <span className="priceLabel">Starting Price</span>
                  <strong>₹1.20 Cr</strong>
                </div>
                <Link to="/contact?property=Grand%20Horizon%20Commercial%20Complex" className="viewCardBtn">
                  Book Site Visit →
                </Link>
              </div>
            </div>
          </div>

          <div className="propertyCard">
            <div className="propertyImage">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Emerald Green Township Plot"
              />
              <span className="tag">NEW LAUNCH</span>
              <span className="propertyTypeBadge">Residential Plot</span>
            </div>

            <div className="propertyInfo">
              <p className="location">📍 Jagatpura, Jaipur</p>
              <h3>Emerald Green Township</h3>
              <p className="cardShortDesc">Serene park-facing plot situated in a master-planned township near premier international schools and hospital.</p>

              <div className="featuresPills">
                <span className="featPill">✓ Near Ring Road</span>
                <span className="featPill">✓ Park Facing</span>
                <span className="featPill">✓ Immediate Registry</span>
              </div>

              <div className="propertyDetails">
                <span>📏 1800 Sq.Ft (200 Sq.Yd)</span>
                <span>🏡 Residential</span>
              </div>

              <div className="cardBottom">
                <div>
                  <span className="priceLabel">Starting Price</span>
                  <strong>₹32 Lac</strong>
                </div>
                <Link to="/contact?property=Emerald%20Green%20Township" className="viewCardBtn">
                  Book Site Visit →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link to="/properties" className="viewAll">
          Explore All 500+ Verified Properties →
        </Link>
      </section>

      {/* WHY INVEST WITH US / ADVANTAGES */}
      <section className="advantagesSection">
        <div className="sectionHeading">
          <p>THE PLOT WITH PROPERTY DIFFERENCE</p>
          <h2>Why Elite Investors <span>Trust Us</span></h2>
          <div className="goldLine"></div>
        </div>

        <div className="advantagesGrid">
          <div className="advantageCard">
            <div className="advIcon">⚖️</div>
            <h3>100% Legal Due Diligence</h3>
            <p>Every plot passes strict title search, encumbrance verification, and government zoning checks before listing.</p>
          </div>

          <div className="advantageCard">
            <div className="advIcon">📍</div>
            <h3>On-Ground Demarcation</h3>
            <p>Clear physical boundary pillars and instant GPS coordinate possession with official registry support.</p>
          </div>

          <div className="advantageCard">
            <div className="advIcon">📈</div>
            <h3>High-Appreciation Corridors</h3>
            <p>We exclusively shortlist lands along upcoming expressways, metro lines, and industrial SEZs for 15-20% YoY growth.</p>
          </div>

          <div className="advantageCard">
            <div className="advIcon">🤝</div>
            <h3>Zero Hidden Commissions</h3>
            <p>Transparent government fee computation, clear developer pricing, and dedicated legal assistance throughout.</p>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about">
        <div className="aboutImage">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
            alt="Plot With Property Headquarters"
          />
          <div className="experienceBox">
            <strong>10+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="aboutContent">
          <p className="goldText">ABOUT PLOT WITH PROPERTY</p>
          <h2>
            Building Trust.
            <br />
            <span>Creating Legacies.</span>
          </h2>
          <p>
            At <strong>Plot With Property</strong>, we empower individuals, businesses, and NRI investors to acquire high-value land assets with complete confidence and transparency.
          </p>
          <p>
            From identifying untapped growth corridors to handling paperwork, registration, and mutation, our concierge advisory team provides end-to-end support at every step.
          </p>

          <div className="aboutHighlightsRow">
            <div className="aboutHighlight">
              <strong>500+</strong>
              <span>Verified Plots</span>
            </div>
            <div className="aboutHighlight">
              <strong>100%</strong>
              <span>Clear Titles</span>
            </div>
            <div className="aboutHighlight">
              <strong>₹250Cr+</strong>
              <span>Facilitated</span>
            </div>
          </div>

          <Link to="/about" className="goldBtn inlineBtn">
            Know More About Us →
          </Link>
        </div>
      </section>

      {/* CLIENT REVIEWS & TESTIMONIALS SECTION (HOME PAGE FOOTER REVIEWS) */}
      <section className="reviewsSection" id="reviews">
        <div className="sectionHeading">
          <p>VOICE OF TRUST</p>
          <h2>What Our <span>Clients Say</span></h2>
          <p className="sectionSubDesc">
            Rated <strong>4.9 / 5.0</strong> by 250+ satisfied property owners, NRIs, and institutional investors.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="reviewsStatsBanner">
          <div className="reviewOverallRating">
            <span className="bigStarScore">4.9 ★★★★★</span>
            <span className="ratingSubtext">Based on 250+ verified property transactions across Rajasthan & NCR</span>
          </div>
          <div className="googleBadge">
            <span className="badgeIcon">G</span>
            <span>Google 5-Star Certified Real Estate Advisory</span>
          </div>
        </div>

        <div className="reviewsGrid">
          {clientReviews.map((rev) => (
            <div className="reviewCard" key={rev.id}>
              <div className="reviewStars">
                {"★".repeat(rev.rating)}
                <span className="verifiedTag">✓ Verified Buyer</span>
              </div>
              <p className="reviewQuote">"{rev.review}"</p>
              <div className="reviewerProfile">
                <img src={rev.avatar} alt={rev.name} className="reviewerAvatar" />
                <div>
                  <h4>{rev.name}</h4>
                  <p className="reviewerRole">{rev.role}</p>
                  <p className="reviewerLoc">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL ESTATE INSIGHTS / NEWS */}
      <section className="insightsSection">
        <div className="sectionHeading">
          <p>MARKET INTELLIGENCE</p>
          <h2>Real Estate <span>Insights & Trends</span></h2>
          <p className="sectionSubDesc">
            Stay ahead with our latest land market research, zoning updates, and legal checklists.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="insightsGrid">
          {marketInsights.map((insight) => (
            <div className="insightCard" key={insight.id}>
              <div className="insightImage">
                <img src={insight.image} alt={insight.title} />
                <span className="insightDate">{insight.date} • {insight.readTime}</span>
              </div>
              <div className="insightContent">
                <h3>{insight.title}</h3>
                <p>{insight.desc}</p>
                <Link to="/contact" className="readMoreLink">
                  Consult With Our Analyst →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta">
        <div>
          <p>READY TO SECURE YOUR DREAM LAND?</p>
          <h2>
            Your High-Growth Property
            <span> Starts Here.</span>
          </h2>
          <p style={{ color: "#6B7280", marginTop: "10px", maxWidth: "600px" }}>
            Book a complimentary site visit with our senior land consultants. Free pickup available in Jaipur and Gurgaon.
          </p>
        </div>

        <div className="ctaButtons">
          <Link to="/contact" className="goldBtn">
            Book Site Visit Today →
          </Link>
          <a href="tel:+919876543210" className="outlineBtn">
            Call: +91 98765 43210
          </a>
        </div>
      </section>
    </div>
  );
}
