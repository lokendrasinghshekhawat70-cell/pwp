import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import rajuVermaImg from "../assets/team/raju_verma.jpg";
import rohitSharmaImg from "../assets/team/rohit_sharma.jpg";
import ananyaMehraImg from "../assets/team/ananya_mehra.jpg";
import sureshChoudharyImg from "../assets/team/suresh_choudhary.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Plot");
  const [filters, setFilters] = useState({
    location: "All",
    searchQuery: "",
    budget: "All",
    propType: "All",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    if (filters.location && filters.location !== "All") queryParams.set("loc", filters.location);
    if (activeTab && activeTab !== "All") queryParams.set("type", activeTab);
    if (filters.budget && filters.budget !== "All") queryParams.set("budget", filters.budget);
    if (filters.searchQuery) queryParams.set("q", filters.searchQuery);
    navigate(`/properties?${queryParams.toString()}`);
  };

  const primeLocations = [
    {
      name: "Ajmer Road & Ring Road Corridor",
      city: "Jaipur",
      growth: "+18% Annual Appreciation",
      tag: "HIGH ROI",
      image: "/plots/indian_luxury_township.jpg",
      desc: "Jaipur's premier gated townships featuring JDA Patta, 60ft to 100ft wide sector roads, and direct SEZ connectivity.",
      plotsCount: "120+ Available Plots"
    },
    {
      name: "Panvel & Navi Mumbai Airport Zone",
      city: "Navi Mumbai",
      growth: "+22% Annual Appreciation",
      tag: "MEGA INFRA",
      image: "/plots/indian_airport_corridor.jpg",
      desc: "Prime investment land parcels adjacent to the upcoming International Airport, Trans-Harbour Link and coastal highway.",
      plotsCount: "85+ Available Plots"
    },
    {
      name: "Alwar Highway & RIICO Industrial Belt",
      city: "Bhiwadi",
      growth: "+16% Annual Appreciation",
      tag: "NCR BOOM",
      image: "/plots/indian_villa_plot.jpg",
      desc: "Fastest growing industrial & residential corridor adjoining Delhi-NCR offering secure rental yields and capital growth.",
      plotsCount: "95+ Available Plots"
    },
    {
      name: "National Highway-8 Marble City Corridor",
      city: "Kishangarh & Ajmer",
      growth: "+15% Annual Appreciation",
      tag: "STRATEGIC HUB",
      image: "/plots/indian_headquarters.jpg",
      desc: "Prime highway commercial and residential land parcels with direct airport and expressway connectivity.",
      plotsCount: "110+ Available Plots"
    }
  ];

  // 6 Verified Featured Properties for Home
  const featuredProperties = [
    {
      id: 1,
      title: "Royal Enclave Gated Township Plot",
      location: "Main Ajmer Road, Jaipur",
      city: "Jaipur",
      price: "₹45 Lakh",
      tag: "JDA APPROVED",
      image: "/plots/indian_luxury_township.jpg",
      pills: ["✓ JDA Approved", "✓ 60ft Sector Road", "✓ 80% Bank Loan"],
      desc: "Premium residential plot with gated boundary, park, 24/7 security, and wide roads. Ideal for luxury duplex construction."
    },
    {
      id: 2,
      title: "Aerocity Airport Corridor Investment Plot",
      location: "Panvel, Near International Airport, Navi Mumbai",
      city: "Navi Mumbai",
      price: "₹85 Lakh",
      tag: "AIRPORT ZONE",
      image: "/plots/indian_airport_corridor.jpg",
      pills: ["✓ RERA Registered", "✓ Trans-Harbour Linked", "✓ High Appreciation"],
      desc: "Prime freehold land in the Navi Mumbai International Airport corridor delivering superior capital growth."
    },
    {
      id: 3,
      title: "Gokul Green City Master Township Plot",
      location: "Alwar Bypass Road, Bhiwadi (NCR)",
      city: "Bhiwadi",
      price: "₹26 Lakh",
      tag: "HIGH ROI",
      image: "/plots/indian_villa_plot.jpg",
      pills: ["✓ RERA Approved", "✓ Gated Township", "✓ Near Honda Hub"],
      desc: "Planned master township plot in Bhiwadi's prime residential belt. 80% bank loan pre-approved with instant registry."
    },
    {
      id: 4,
      title: "Emerald Green Township Residential Plot",
      location: "Jagatpura, Ring Road Junction, Jaipur",
      city: "Jaipur",
      price: "₹32 Lakh",
      tag: "HOT LAUNCH",
      image: "/plots/indian_villa_plot.jpg",
      pills: ["✓ JDA Patta", "✓ Ring Road Junction", "✓ Park Facing"],
      desc: "Peaceful family residential plot near Jagatpura Education Hub, international schools, and metro expansion."
    },
    {
      id: 5,
      title: "Marble City Highway Commercial Hub",
      location: "Main National Highway-8, Kishangarh",
      city: "Kishangarh & Ajmer",
      price: "₹65 Lakh",
      tag: "COMMERCIAL HUB",
      image: "/plots/indian_headquarters.jpg",
      pills: ["✓ 100ft Highway Front", "✓ RERA Clearances", "✓ 12% Assured ROI"],
      desc: "High-footfall corner commercial plot on NH-8 Kishangarh. High visibility for marble showrooms and retail ventures."
    },
    {
      id: 6,
      title: "Vatika SEZ Elite Township Plots",
      location: "Ajmer Road, Near Mahindra World City, Jaipur",
      city: "Jaipur",
      price: "₹24 Lakh",
      tag: "SEZ CORRIDOR",
      image: "/plots/indian_luxury_township.jpg",
      pills: ["✓ JDA Approved", "✓ Near Mahindra SEZ", "✓ 75% Bank Loan"],
      desc: "Budget-friendly luxury plot adjoining Mahindra World City. High rental yield potential and rapid infrastructure growth."
    }
  ];

  const [selectedCityFilter, setSelectedCityFilter] = useState("All");

  const filteredHomeProperties = useMemo(() => {
    if (selectedCityFilter === "All") return featuredProperties;
    return featuredProperties.filter(
      (p) => p.city.toLowerCase().includes(selectedCityFilter.toLowerCase())
    );
  }, [selectedCityFilter, featuredProperties]);

  const clientReviews = [
    {
      id: 1,
      name: "Shri Rajendra Singhania & Family",
      role: "Industrialist & Investor",
      location: "Ajmer Road Township Plot, Jaipur (277 Sq.Yd)",
      rating: 5,
      avatar: "/reviews/rajendra_singhania.jpg",
      review: "Under the guidance of Raju Verma ji (Gokul Kripa), we purchased a 2500 Sq.Ft JDA approved plot. We received complete 30-year legal audit documents, on-ground boundary pillars, and immediate registry. Our entire family is thoroughly delighted."
    },
    {
      id: 2,
      name: "Dr. Sunita Agarwal",
      role: "Senior Surgeon & Real Estate Investor",
      location: "Panvel Airport Zone Plot, Navi Mumbai",
      rating: 5,
      avatar: "/reviews/sunita_agarwal.jpg",
      review: "Raju Verma ji provided spot-on strategic advisory for land investment near the new Navi Mumbai Airport. The 30-year mother deed verification and transparent handover made the process completely smooth. Highly recommended!"
    },
    {
      id: 3,
      name: "Vikram Malhotra & Family",
      role: "IT Director & Land Investor",
      location: "Green City Master Township, Bhiwadi",
      rating: 5,
      avatar: "/reviews/vikram_malhotra.jpg",
      review: "Gokul Kripa Sales & Marketing provided prompt physical demarcation and clear RERA title documents. Truly the most dependable name for land and plot investment in Rajasthan and NCR."
    },
    {
      id: 4,
      name: "Col. Sanjeev Rawat (Retd.)",
      role: "Indian Armed Forces Veteran",
      location: "NH-8 Expressway Plot, Ajmer-Kishangarh",
      rating: 5,
      avatar: "/reviews/sanjeev_rawat.jpg",
      review: "Crystal clear legal documentation, zero hidden charges, and Raju Verma ji's personal dedication. Finding such genuine and professional land advisory in real estate is truly exceptional."
    }
  ];

  const marketInsights = [
    {
      id: 1,
      date: "September 2026",
      readTime: "4 min read",
      title: "Why Jaipur & Kishangarh Expressway is the Next Real Estate Goldmine",
      desc: "DMIC freight corridor, 200ft Ring Road junctions, and 6-lane expressways driving exponential appreciation in plotted townships.",
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      date: "August 2026",
      readTime: "5 min read",
      title: "Essential Checklist for 30-Year Mother Deed & JDA Patta Verification",
      desc: "Crucial legal due diligence steps for smart buyers covering revenue records, Mutation (Dakhil Kharij), and RERA approval.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      date: "July 2026",
      readTime: "3 min read",
      title: "Navi Mumbai Airport Corridor vs. Bhiwadi NCR: Where to Invest?",
      desc: "Comparative analysis of rental yields, infrastructure pace, and 5-year capital appreciation trends in prime growth hubs.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const [selectedTownshipIndex, setSelectedTownshipIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // FAQ state on home
  const [openFaqHome, setOpenFaqHome] = useState(null);

  const homeFaqs = [
    {
      q: "Are all plots listed on Plot With Property 100% JDA and RERA approved?",
      a: "Yes. Every single plot in our master townships carries an authentic statutory government JDA Patta and RERA registration. We provide a complete 30-year legal audit report before token booking."
    },
    {
      q: "How does the complimentary Doorstep AC Cab Site Visit work?",
      a: "We arrange a free chauffeur-driven AC cab to pick up you and your entire family directly from your home, take you for a comprehensive on-ground inspection of our gated townships, and drop you back safely with zero obligation."
    },
    {
      q: "Can I get a bank loan on these plotted developments?",
      a: "Yes. All our townships are pre-approved for up to 80% home/land loans by premier banks including State Bank of India (SBI), HDFC Bank, ICICI Bank, and Axis Bank with expedited sanctioning."
    },
    {
      q: "What is the process for physical possession and boundary demarcation?",
      a: "Every plot is physically demarcated on-ground with reinforced concrete corner pillars and GPS coordinates. You receive instant physical handover followed by immediate registered sale deed execution and mutation (Dakhil Kharij)."
    },
    {
      q: "Is there any brokerage or hidden charge?",
      a: "Zero brokerage (0%). You get direct developer pricing with complete transparency on government stamp duty and statutory fees."
    }
  ];

  const heroTownships = [
    {
      id: "jaipur",
      city: "Jaipur",
      title: "Royal Palm Smart Gated Township",
      corridor: "Ajmer Road & 200ft Ring Road Junction, Jaipur",
      price: "₹18.50 Lakh",
      priceUnit: "onwards",
      emi: "Starting at ₹12,499/month easy EMI*",
      growth: "+18% Annual Appreciation",
      badge: "JDA Approved • Instant Patta & Registry",
      tag: "🔥 85% Sold Out",
      image: "/plots/indian_luxury_township.jpg",
      features: ["60ft to 100ft wide asphalt sector roads", "Underground electricity, water & drainage", "On-ground boundary pillars with instant possession"]
    },
    {
      id: "navi-mumbai",
      city: "Navi Mumbai",
      title: "Aerotropolis Gold Enclave",
      corridor: "Panvel & International Airport Growth Corridor",
      price: "₹42.00 Lakh",
      priceUnit: "onwards",
      emi: "Starting at ₹28,990/month easy EMI*",
      growth: "+22% Annual Appreciation",
      badge: "RERA Registered • High Appreciation",
      tag: "⭐ Near Airport",
      image: "/plots/indian_airport_corridor.jpg",
      features: ["Just 15 minutes from upcoming International Airport", "Clear title freehold land parcels", "Rapidly developing prime residential hub"]
    },
    {
      id: "bhiwadi",
      city: "Bhiwadi",
      title: "Industrial Horizon Master Township",
      corridor: "Alwar Bypass Road & NCR Industrial Corridor",
      price: "₹14.80 Lakh",
      priceUnit: "onwards",
      emi: "Starting at ₹9,850/month easy EMI*",
      growth: "+16% Annual Appreciation",
      badge: "RERA Approved • NCR Zone",
      tag: "⚡ High Rental Yield",
      image: "/plots/indian_villa_plot.jpg",
      features: ["Direct national highway frontage & wide avenues", "Adjoining Honda & RIICO industrial hubs", "Gated perimeter with 24/7 security"]
    },
    {
      id: "kishangarh",
      city: "Kishangarh & Ajmer",
      title: "Emerald Expressway Commercial Hub",
      corridor: "National Highway-8 & Airport Corridor",
      price: "₹16.20 Lakh",
      priceUnit: "onwards",
      emi: "Starting at ₹10,950/month easy EMI*",
      growth: "+15% Annual Appreciation",
      badge: "Highway Front • Instant Mutation",
      tag: "💎 Prime Commercial Hub",
      image: "/plots/indian_headquarters.jpg",
      features: ["Direct access from 6-lane National Highway-8", "Adjacent to Kishangarh Airport", "Ideal for hotels, showrooms & luxury villas"]
    }
  ];

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
    <div className="pageContainer mbThemePage">
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

      {/* MAGICBRICKS STYLE HERO SEARCH BANNER */}
      <section className="mbHeroBanner">
        <div className="mbHeroBackdrop">
          <div className="mbHeroOverlay"></div>
        </div>

        <div className="mbHeroContainer">
          <div className="mbHeroHeader">
            <div className="mbAuthorityTag">
              <span className="mbLiveDot"></span>
              <span>Premier Land Portal • 100% Clear Marketable Title</span>
            </div>
            <h1 className="mbHeroTitle">
              Where Trust Builds <span className="mbGoldSpan">Lasting Value</span>
              <br />
              <span className="mbHeroSubTitle">100% JDA & RERA Approved Plots & Master Townships</span>
            </h1>
            <p className="mbHeroTagline">
              500+ verified freehold plots across Jaipur, Navi Mumbai, Bhiwadi, Ajmer & Kishangarh — immediate registry, statutory government patta, and on-ground pillar demarcation.
            </p>
          </div>

          {/* MAGICBRICKS SIGNATURE MULTI-TAB SEARCH BOX */}
          <div className="mbSearchWrapper">
            <div className="mbSearchTabs">
              {[
                { key: "Plot", label: "🏡 Residential Plots" },
                { key: "Commercial", label: "🏢 Commercial Land" },
                { key: "Residential", label: "🏛️ Gated Townships" },
                { key: "Luxury", label: "⭐ High Growth Projects" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`mbSearchTab ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <form className="mbSearchForm" onSubmit={handleSearch}>
              {/* City Selector */}
              <div className="mbSearchField mbCityField">
                <span className="mbFieldIcon">📍</span>
                <div className="mbFieldInner">
                  <label>City / Region</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  >
                    <option value="All">All 5 Cities (Any Location)</option>
                    <option value="Jaipur">Jaipur (Ajmer Road, Ring Road, Jagatpura)</option>
                    <option value="Navi Mumbai">Navi Mumbai (Panvel, Airport Zone)</option>
                    <option value="Bhiwadi">Bhiwadi (Alwar Highway, RIICO Hub)</option>
                    <option value="Ajmer">Ajmer (Expressway, Pushkar Bypass)</option>
                    <option value="Kishangarh">Kishangarh (NH-8 Highway)</option>
                  </select>
                </div>
              </div>

              {/* Keyword / Locality Search */}
              <div className="mbSearchField mbLocalityField">
                <span className="mbFieldIcon">🔍</span>
                <div className="mbFieldInner">
                  <label>Locality / Landmark</label>
                  <input
                    type="text"
                    placeholder="e.g. Ajmer Road, Ring Road, Airport Corridor, NH-8..."
                    value={filters.searchQuery}
                    onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div className="mbSearchField mbBudgetField">
                <span className="mbFieldIcon">💰</span>
                <div className="mbFieldInner">
                  <label>Budget Range</label>
                  <select
                    value={filters.budget}
                    onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
                  >
                    <option value="All">Any Budget</option>
                    <option value="10L-25L">₹10 Lakh – ₹25 Lakh</option>
                    <option value="25L-50L">₹25 Lakh – ₹50 Lakh</option>
                    <option value="50L+">₹50 Lakh & Above</option>
                  </select>
                </div>
              </div>

              {/* Submit Search Button */}
              <button type="submit" className="mbSearchSubmitBtn">
                <span className="mbSearchIcon">🔍</span>
                <span>Search Plots</span>
              </button>
            </form>

            {/* Quick Filter Chips */}
            <div className="mbQuickChipsRow">
              <span className="mbChipsLabel">Popular Searches:</span>
              <div className="mbChipsList">
                <Link to="/properties?loc=Jaipur" className="mbChipItem">🔥 Ajmer Road Jaipur</Link>
                <Link to="/properties?loc=Navi%20Mumbai" className="mbChipItem">✈️ Navi Mumbai Airport Zone</Link>
                <Link to="/properties?type=Plot&budget=10L-25L" className="mbChipItem">⚡ Plots Under ₹25 Lakh</Link>
                <Link to="/properties?loc=Bhiwadi" className="mbChipItem">🏭 Bhiwadi RIICO Corridor</Link>
                <Link to="/properties?loc=Kishangarh" className="mbChipItem">💎 Kishangarh NH-8 Highway</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP (MAGICBRICKS TRUST NUMBERS) */}
      <section className="mbStatsStrip">
        <div className="mbStatsContainer">
          <div className="mbStatItem">
            <span className="mbStatIcon">💎</span>
            <div>
              <h3>500+</h3>
              <p>Verified Plots Available</p>
            </div>
          </div>
          <div className="mbStatDivider"></div>
          <div className="mbStatItem">
            <span className="mbStatIcon">📍</span>
            <div>
              <h3>5 Prime Cities</h3>
              <p>Jaipur • Mumbai • Bhiwadi • Ajmer</p>
            </div>
          </div>
          <div className="mbStatDivider"></div>
          <div className="mbStatItem">
            <span className="mbStatIcon">🏛️</span>
            <div>
              <h3>₹250Cr+</h3>
              <p>Successful Deliveries</p>
            </div>
          </div>
          <div className="mbStatDivider"></div>
          <div className="mbStatItem">
            <span className="mbStatIcon">⭐</span>
            <div>
              <h3>4.9 / 5.0</h3>
              <p>Google 5-Star Rated</p>
            </div>
          </div>
          <div className="mbStatDivider"></div>
          <div className="mbStatItem">
            <span className="mbStatIcon">🛡️</span>
            <div>
              <h3>100% Legal</h3>
              <p>JDA & RERA Approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TOWNSHIPS SHOWCASE */}
      <section className="mbShowcaseSection">
        <div className="mbSectionHeader">
          <div className="mbSectionHeaderLeft">
            <span className="mbSectionTag">Premium Master Townships</span>
            <h2 className="mbSectionTitle">High-Growth <span>Township Projects</span></h2>
            <p className="mbSectionDesc">Wide sector roads, statutory JDA Patta, landscaped parks, and immediate registry.</p>
          </div>
          <div className="mbShowcaseNavControls">
            <button onClick={prevTownship} className="mbRoundNavBtn" aria-label="Previous">‹</button>
            <button onClick={nextTownship} className="mbRoundNavBtn" aria-label="Next">›</button>
          </div>
        </div>

        {/* Township Interactive Deck */}
        <div 
          className="mbShowcaseCard"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="mbShowcaseImgWrap">
            <img 
              src={heroTownships[selectedTownshipIndex].image} 
              alt={heroTownships[selectedTownshipIndex].title} 
              className="mbShowcaseImg"
            />
            <div className="mbShowcaseImgOverlay"></div>
            
            <div className="mbShowcaseBadges">
              <span className="mbTagPill mbTagHot">{heroTownships[selectedTownshipIndex].tag}</span>
              <span className="mbTagPill mbTagGrowth">{heroTownships[selectedTownshipIndex].growth}</span>
            </div>

            <div className="mbShowcasePriceBox">
              <span className="mbPriceSub">Starting Price</span>
              <div className="mbPriceMain">
                <span className="mbPriceNum">{heroTownships[selectedTownshipIndex].price}</span>
                <span className="mbPriceUnit">{heroTownships[selectedTownshipIndex].priceUnit}</span>
              </div>
              <span className="mbEmiNote">{heroTownships[selectedTownshipIndex].emi}</span>
            </div>
          </div>

          <div className="mbShowcaseContent">
            <div className="mbTownshipMeta">
              <span className="mbMetaGov">🛡️ {heroTownships[selectedTownshipIndex].badge}</span>
              <span className="mbMetaCity">📍 {heroTownships[selectedTownshipIndex].city}</span>
            </div>

            <h3 className="mbTownshipName">{heroTownships[selectedTownshipIndex].title}</h3>
            <p className="mbTownshipCorridor">🛣️ {heroTownships[selectedTownshipIndex].corridor}</p>

            <div className="mbFeaturesGrid">
              {heroTownships[selectedTownshipIndex].features.map((feat, idx) => (
                <div key={idx} className="mbFeatItem">
                  <span className="mbFeatCheck">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mbExpertConsultBox">
              <div className="mbExpertLeft">
                <img src="/emblem.png" alt="Raju Verma" className="mbExpertMiniEmblem" />
                <div>
                  <strong>Raju Verma (Direct Developer Advisory)</strong>
                  <p>Gokul Kripa • 0% Brokerage</p>
                </div>
              </div>
              <div className="mbFreeVisitPill">
                <span className="mbLiveGreen"></span>
                <span>Free AC Cab Site Visit</span>
              </div>
            </div>

            <div className="mbShowcaseActions">
              <Link 
                to={`/properties?loc=${encodeURIComponent(heroTownships[selectedTownshipIndex].city)}`}
                className="mbPrimaryGoldBtn"
              >
                View Township Layout & Plots →
              </Link>
              <Link 
                to={`/contact?property=${encodeURIComponent(heroTownships[selectedTownshipIndex].title)}`}
                className="mbOutlineBtn"
              >
                📅 Book Site Visit
              </Link>
              <a
                href={`https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20${encodeURIComponent(heroTownships[selectedTownshipIndex].title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mbWaBtn"
                title="WhatsApp Advisory"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Township Switcher Pills */}
            <div className="mbTownshipTabsRow">
              {heroTownships.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  className={`mbTownshipTabBtn ${selectedTownshipIndex === idx ? "active" : ""}`}
                  onClick={() => setSelectedTownshipIndex(idx)}
                >
                  📍 {t.city}: {t.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TOWNSHIP INFRASTRUCTURE & WORLD-CLASS AMENITIES */}
      <section className="mbAmenitiesSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Master-Planned Living</span>
          <h2 className="mbSectionTitle">World-Class Infrastructure <span>& Amenities</span></h2>
          <p className="mbSectionDesc">Every plotted township is developed to statutory government master plan benchmarks.</p>
        </div>

        <div className="mbAmenitiesGrid">
          <div className="mbAmenityCard">
            <div className="mbAmenityIcon">🛣️</div>
            <h3>60ft to 100ft Sector Roads</h3>
            <p>Heavy-duty asphalt wide roads with paver-block pedestrian pathways and tree-lined avenues.</p>
          </div>
          <div className="mbAmenityCard">
            <div className="mbAmenityIcon">⚡</div>
            <h3>Underground Electricity & Water</h3>
            <p>Modern concealed cabling, dual water supply network, and rainwater harvesting structures.</p>
          </div>
          <div className="mbAmenityCard">
            <div className="mbAmenityIcon">🌳</div>
            <h3>Landscaped Parks & Gazebos</h3>
            <p>Dedicated lush green recreational parks, children's play zones, and senior citizen sit-outs.</p>
          </div>
          <div className="mbAmenityCard">
            <div className="mbAmenityIcon">🛡️</div>
            <h3>Gated Security & CCTV Surveillance</h3>
            <p>Grand designer entrance gate, 24/7 security personnel, and full boundary wall perimeter.</p>
          </div>
          <div className="mbAmenityCard">
            <div className="mbAmenityIcon">🛕</div>
            <h3>Community Temple & Meditation Area</h3>
            <p>Sacred temple enclave built inside the township for peace, harmony, and spiritual well-being.</p>
          </div>
          <div className="mbAmenityCard">
            <div className="mbAmenityIcon">📐</div>
            <h3>Concrete Demarcation Pillars</h3>
            <p>Pre-cast concrete boundary pillars on all 4 corners of every plot with verified GPS coordinates.</p>
          </div>
        </div>
      </section>

      {/* POPULAR REAL ESTATE HUBS / GROWTH CORRIDORS */}
      <section className="mbCorridorsSection">
        <div className="mbSectionHeader">
          <div className="mbSectionHeaderLeft">
            <span className="mbSectionTag">High Growth Corridors</span>
            <h2 className="mbSectionTitle">Prime Investment <span>Corridors</span></h2>
            <p className="mbSectionDesc">Strategic highway and airport hubs offering 15% to 22% annual capital growth.</p>
          </div>
          <Link to="/properties" className="mbHeaderLink">View All Locations →</Link>
        </div>

        <div className="mbCorridorGrid">
          {primeLocations.map((loc, idx) => (
            <div className="mbCorridorCard" key={idx}>
              <div className="mbCorridorImgBox">
                <img src={loc.image} alt={loc.name} />
                <span className="mbCorridorTag">{loc.tag}</span>
                <span className="mbCorridorGrowth">{loc.growth}</span>
                <div className="mbCorridorPlotsCount">{loc.plotsCount}</div>
              </div>
              <div className="mbCorridorBody">
                <span className="mbCorridorCity">📍 {loc.city}</span>
                <h3 className="mbCorridorName">{loc.name}</h3>
                <p className="mbCorridorDesc">{loc.desc}</p>
                <Link to={`/properties?loc=${encodeURIComponent(loc.city)}`} className="mbCorridorExploreBtn">
                  <span>Explore Available Plots</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAGICBRICKS STYLE REAL ESTATE SERVICES */}
      <section className="mbServicesStripSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">End-to-End Solutions</span>
          <h2 className="mbSectionTitle">Property Services <span>(Plot With Property)</span></h2>
          <p className="mbSectionDesc">From statutory legal title search and bank loans to physical boundary demarcation.</p>
        </div>

        <div className="mbServicesGrid">
          <div className="mbServiceCard">
            <div className="mbServiceIconWrap">🚗</div>
            <h3>Free AC Cab Site Visit</h3>
            <p>Doorstep family pickup and guided on-ground site inspection with zero charges.</p>
            <Link to="/contact" className="mbServiceLink">Book Free Ride →</Link>
          </div>

          <div className="mbServiceCard">
            <div className="mbServiceIconWrap">⚖️</div>
            <h3>30-Year Legal Due Diligence</h3>
            <p>100% audit of Mother Deed, Revenue Chain, JDA Patta & Non-Encumbrance Certificate by High Court lawyers.</p>
            <Link to="/services" className="mbServiceLink">Legal Advisory →</Link>
          </div>

          <div className="mbServiceCard">
            <div className="mbServiceIconWrap">🏦</div>
            <h3>Up to 80% Bank Loan Support</h3>
            <p>Instant home loan sanctions from SBI, HDFC, ICICI, and Axis Bank with minimal paperwork.</p>
            <Link to="/services" className="mbServiceLink">Check Loan Eligibility →</Link>
          </div>

          <div className="mbServiceCard">
            <div className="mbServiceIconWrap">📐</div>
            <h3>Pillar Demarcation & Registry</h3>
            <p>Reinforced concrete boundary pillars, GPS coordinates, spot registration and instant Mutation (Dakhil Kharij).</p>
            <Link to="/services" className="mbServiceLink">Registry Process →</Link>
          </div>
        </div>
      </section>

      {/* HANDPICKED FEATURED PROPERTIES LISTINGS (EXPANDED TO 6 WITH CITY TABS) */}
      <section className="mbPropertiesSection">
        <div className="mbSectionHeader">
          <div className="mbSectionHeaderLeft">
            <span className="mbSectionTag">Verified Inventory</span>
            <h2 className="mbSectionTitle">Featured Plots <span>For Sale</span></h2>
            <p className="mbSectionDesc">100% clear title, statutory JDA Patta, and ready-to-build residential and commercial land parcels.</p>
          </div>
          <Link to="/properties" className="mbHeaderLink">Explore All 500+ Plots →</Link>
        </div>

        {/* City Filter Tabs for Property Grid */}
        <div className="mbHomePropFilterTabs">
          {["All", "Jaipur", "Navi Mumbai", "Bhiwadi", "Kishangarh & Ajmer"].map((city) => (
            <button
              key={city}
              type="button"
              className={`mbPropCityTabBtn ${selectedCityFilter === city ? "active" : ""}`}
              onClick={() => setSelectedCityFilter(city)}
            >
              {city === "All" ? "📍 All Locations (6)" : `📍 ${city}`}
            </button>
          ))}
        </div>

        <div className="mbPropertyCardsGrid">
          {filteredHomeProperties.map((prop) => (
            <div className="mbPropertyCard" key={prop.id}>
              <div className="mbPropImgBox">
                <img src={prop.image} alt={prop.title} />
                <span className="mbPropVerified">✓ JDA / RERA</span>
                <span className="mbPropTypeBadge">{prop.tag}</span>
                <span className="mbPropPriceTag">{prop.price}</span>
              </div>

              <div className="mbPropBody">
                <div className="mbPropPriceRow">
                  <div className="mbPropPriceMain">
                    <strong>{prop.price}</strong>
                  </div>
                </div>

                <h3 className="mbPropTitle">{prop.title}</h3>
                <p className="mbPropLocation">📍 {prop.location}</p>

                <div className="mbPropPills">
                  {prop.pills.map((pill, pIdx) => (
                    <span key={pIdx} className="mbPropPill">{pill}</span>
                  ))}
                </div>

                <div className="mbPropSellerRow">
                  <div className="mbSellerInfo">
                    <span className="mbSellerBadge">Direct Developer Advisory</span>
                    <span className="mbSellerName">Raju Verma • Gokul Kripa</span>
                  </div>
                  <span className="mbZeroBrok">0% Brokerage</span>
                </div>

                <div className="mbPropCardActions">
                  <Link to={`/contact?property=${encodeURIComponent(prop.title)}`} className="mbPropBookBtn">
                    🚗 Book Site Visit
                  </Link>
                  <a 
                    href={`https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20interested%20in%20${encodeURIComponent(prop.title)}.`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mbPropWaBtn"
                    title="WhatsApp Chat"
                  >
                    💬
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mbViewAllRow">
          <Link to="/properties" className="mbViewAllBtn">
            Explore All 500+ Verified Plots Across 5 Cities →
          </Link>
        </div>
      </section>

      {/* PLOTTED LAND VS APARTMENTS COMPARISON MATRIX */}
      <section className="mbComparisonSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Investment Wisdom</span>
          <h2 className="mbSectionTitle">Plotted Land <span>vs Flat / Apartment</span></h2>
          <p className="mbSectionDesc">Why smart Indian families choose freehold land over high-rise apartments.</p>
        </div>

        <div className="mbComparisonTableWrap">
          <table className="mbComparisonTable">
            <thead>
              <tr>
                <th>Key Parameter</th>
                <th className="highlightCol">🏡 Freehold Plotted Land (PWP)</th>
                <th>🏢 High-Rise Apartment / Flat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Land Ownership</strong></td>
                <td className="highlightCol"><strong>100% Absolute Freehold Ownership</strong> with statutory patta and exclusive land rights.</td>
                <td>Undivided Share of Land (UDS) shared among hundreds of owners.</td>
              </tr>
              <tr>
                <td><strong>Annual Appreciation</strong></td>
                <td className="highlightCol"><strong style={{ color: "#2E6B52" }}>15% to 22% Compounding Annual Growth</strong> in emerging expressway corridors.</td>
                <td>6% to 8% nominal growth; building depreciates as structure ages.</td>
              </tr>
              <tr>
                <td><strong>Recurring Maintenance</strong></td>
                <td className="highlightCol"><strong>Zero / Nominal Maintenance</strong>. Zero recurring monthly drain on family budget.</td>
                <td>High monthly maintenance charges (₹3,000 - ₹12,000/mo) lifelong.</td>
              </tr>
              <tr>
                <td><strong>Construction Flexibility</strong></td>
                <td className="highlightCol">Complete freedom to build a custom villa or multi-floor duplex on your own timeline.</td>
                <td>Fixed floor plan; zero expansion possibility or structural customization.</td>
              </tr>
              <tr>
                <td><strong>Possession & Registry</strong></td>
                <td className="highlightCol"><strong>Instant Physical Possession</strong> with boundary pillars and same-day registry.</td>
                <td>Frequent construction delays of 3 to 6 years with locked capital.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5-STEP LAND BUYING WORKFLOW */}
      <section className="mbWorkflowSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Hassle-Free Process</span>
          <h2 className="mbSectionTitle">Your 5-Step Journey <span>To Land Ownership</span></h2>
          <p className="mbSectionDesc">Completely transparent, legally audited, and professionally guided at every stage.</p>
        </div>

        <div className="mbWorkflowGrid">
          <div className="mbWorkflowStep">
            <span className="mbStepNum">01</span>
            <h3>Consultation</h3>
            <p>Understand your budget, preferred city, and investment horizon with Raju Verma.</p>
          </div>
          <div className="mbWorkflowStep">
            <span className="mbStepNum">02</span>
            <h3>Layout Review</h3>
            <p>Detailed review of 100% JDA/RERA township maps, sector roads, and satellite surveys.</p>
          </div>
          <div className="mbWorkflowStep">
            <span className="mbStepNum">03</span>
            <h3>Free AC Cab Visit</h3>
            <p>Doorstep family pickup for a complete on-ground site inspection with zero charges.</p>
          </div>
          <div className="mbWorkflowStep">
            <span className="mbStepNum">04</span>
            <h3>Legal Title Audit</h3>
            <p>Full 30-year mother deed, Khasra, and Non-Encumbrance Certificate verification.</p>
          </div>
          <div className="mbWorkflowStep">
            <span className="mbStepNum">05</span>
            <h3>Registry & Possession</h3>
            <p>Concrete boundary pillars, spot registration, and fast-track mutation (Dakhil Kharij).</p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SPOTLIGHT ON HOME */}
      <section className="mbLeaderSpotlightSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Expert Indian Leadership</span>
          <h2 className="mbSectionTitle">Meet Our <span>Advisory Leaders</span></h2>
          <p className="mbSectionDesc">Experienced professionals with over a decade of trusted land advisory across Rajasthan and NCR.</p>
        </div>

        <div className="mbLeaderGrid">
          <div className="mbLeaderCard">
            <img src={rajuVermaImg} alt="Raju Verma" className="mbLeaderImg" />
            <div className="mbLeaderBody">
              <h3>Raju Verma</h3>
              <p className="mbLeaderRole">Chief Real Estate Advisor | Founder</p>
              <p className="mbLeaderExp">Gokul Kripa • 10+ years shaping premier plotted townships.</p>
              <div className="mbLeaderActions">
                <a href="tel:+919876543210" className="mbLeaderPhoneBtn">📞 Call Direct</a>
                <a href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji" target="_blank" rel="noopener noreferrer" className="mbLeaderWaBtn">💬 WhatsApp</a>
              </div>
            </div>
          </div>

          <div className="mbLeaderCard">
            <img src={rohitSharmaImg} alt="Rohit Sharma" className="mbLeaderImg" />
            <div className="mbLeaderBody">
              <h3>Rohit Sharma</h3>
              <p className="mbLeaderRole">Head – Township & Land Acquisition</p>
              <p className="mbLeaderExp">Master township planning & high-yield strategic land procurement.</p>
              <div className="mbLeaderActions">
                <Link to="/about" className="mbLeaderMoreBtn">View Profile →</Link>
              </div>
            </div>
          </div>

          <div className="mbLeaderCard">
            <img src={ananyaMehraImg} alt="Adv. Ananya Mehra" className="mbLeaderImg" />
            <div className="mbLeaderBody">
              <h3>Adv. Ananya Mehra</h3>
              <p className="mbLeaderRole">Senior Legal & RERA Compliance Head</p>
              <p className="mbLeaderExp">30-year mother deed scrutiny, title verification & mutation specialist.</p>
              <div className="mbLeaderActions">
                <Link to="/about" className="mbLeaderMoreBtn">View Profile →</Link>
              </div>
            </div>
          </div>

          <div className="mbLeaderCard">
            <img src={sureshChoudharyImg} alt="Suresh Choudhary" className="mbLeaderImg" />
            <div className="mbLeaderBody">
              <h3>Suresh Choudhary</h3>
              <p className="mbLeaderRole">Director – Client Advisory & Operations</p>
              <p className="mbLeaderExp">Complimentary family site visit logistics & on-ground pillar demarcation.</p>
              <div className="mbLeaderActions">
                <Link to="/about" className="mbLeaderMoreBtn">View Profile →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INVEST WITH US */}
      <section className="mbTrustSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">The Symbol of Trust & Security</span>
          <h2 className="mbSectionTitle">Why Smart Families & Investors <span>Choose Us?</span></h2>
          <p className="mbSectionDesc">100% statutory government patta, transparent dealing, and instant on-ground possession.</p>
        </div>

        <div className="mbTrustGrid">
          <div className="mbTrustCard">
            <div className="mbTrustIcon">⚖️</div>
            <h3>100% Legal Due Diligence</h3>
            <p>Rigorous 30-year mother deed audit, revenue Khasra verification, and JDA/RERA zoning compliance before listing.</p>
          </div>

          <div className="mbTrustCard">
            <div className="mbTrustIcon">📐</div>
            <h3>On-Ground Boundary Demarcation</h3>
            <p>Reinforced concrete corner pillars, precise GPS mapping, and guaranteed instant physical possession.</p>
          </div>

          <div className="mbTrustCard">
            <div className="mbTrustIcon">📈</div>
            <h3>High-Appreciation Corridors</h3>
            <p>Handpicked prime land along expressways, ring roads, and SEZs offering 15% to 22% annual capital appreciation.</p>
          </div>

          <div className="mbTrustCard">
            <div className="mbTrustIcon">🤝</div>
            <h3>0% Brokerage • Direct Developer Price</h3>
            <p>Zero hidden charges. Transparent pricing, complete government fee breakdown, and end-to-end legal support.</p>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="mbReviewsSection" id="reviews">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Client Trust & Testimonials</span>
          <h2 className="mbSectionTitle">Voices of Our <span>Happy Families</span></h2>
          <p className="mbSectionDesc">Rated <strong>4.9 / 5.0</strong> by 250+ satisfied plot buyers and families across Rajasthan and NCR.</p>
        </div>

        <div className="mbReviewsBanner">
          <div className="mbReviewScoreCol">
            <span className="mbBigStars">4.9 ★★★★★</span>
            <span className="mbScoreSub">Verified across 250+ real estate registrations and handovers</span>
          </div>
          <div className="mbGoogleBadge">
            <span className="mbGoogleIcon">G</span>
            <span>Google 5-Star Verified Land Advisory</span>
          </div>
        </div>

        <div className="mbReviewsGrid">
          {clientReviews.map((rev) => (
            <div className="mbReviewCard" key={rev.id}>
              <div className="mbReviewHeader">
                <div className="mbStarsRow">
                  {"★".repeat(rev.rating)}
                </div>
                <span className="mbVerifiedBuyer">✓ Verified Buyer</span>
              </div>
              <p className="mbReviewText">"{rev.review}"</p>
              <div className="mbReviewAuthor">
                <img src={rev.avatar} alt={rev.name} className="mbAuthorAvatar" />
                <div>
                  <h4>{rev.name}</h4>
                  <p className="mbAuthorRole">{rev.role}</p>
                  <p className="mbAuthorLoc">📍 {rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOME PAGE FAQS ACCORDION */}
      <section className="mbFaqSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Buyer Clarifications</span>
          <h2 className="mbSectionTitle">Frequently Asked <span>Questions</span></h2>
          <p className="mbSectionDesc">Clear answers to key questions every plot buyer should know.</p>
        </div>

        <div className="mbFaqList">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openFaqHome === idx;
            return (
              <div className={`mbFaqItem ${isOpen ? "open" : ""}`} key={idx}>
                <button className="mbFaqQuestion" onClick={() => setOpenFaqHome(isOpen ? null : idx)}>
                  <span>{faq.q}</span>
                  <span className="mbFaqToggle">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="mbFaqAnswer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* MARKET INSIGHTS & NEWS */}
      <section className="mbInsightsSection">
        <div className="mbSectionHeader">
          <div className="mbSectionHeaderLeft">
            <span className="mbSectionTag">Real Estate Insights & Knowledge</span>
            <h2 className="mbSectionTitle">Market Trends & <span>Legal Guidelines</span></h2>
            <p className="mbSectionDesc">Key infrastructure updates, master plan zoning, and government land policies.</p>
          </div>
          <Link to="/contact" className="mbHeaderLink">Consult Advisor →</Link>
        </div>

        <div className="mbInsightsGrid">
          {marketInsights.map((insight) => (
            <div className="mbInsightCard" key={insight.id}>
              <div className="mbInsightImg">
                <img src={insight.image} alt={insight.title} />
                <span className="mbInsightBadge">{insight.date} • {insight.readTime}</span>
              </div>
              <div className="mbInsightBody">
                <h3>{insight.title}</h3>
                <p>{insight.desc}</p>
                <Link to="/contact" className="mbInsightLink">
                  Read Full Report & Consult →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAGICBRICKS CTA BANNER */}
      <section className="mbCtaSection">
        <div className="mbCtaContainer">
          <div className="mbCtaText">
            <span className="mbCtaPreTag">Looking For Your Dream Plot?</span>
            <h2>Your Secure Investment <span>Starts Right Here</span></h2>
            <p>Schedule a guided on-site visit to 100% JDA/RERA approved townships with Raju Verma ji & senior team. Complimentary AC cab family pickup available across Jaipur, Bhiwadi & Ajmer.</p>
          </div>

          <div className="mbCtaButtons">
            <Link to="/contact" className="mbPrimaryGoldBtn large">
              🚗 Book Free Site Visit →
            </Link>
            <a href="tel:+919876543210" className="mbCtaCallBtn">
              📞 Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
