import { useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const serviceThoughts = [
    {
      id: 1,
      quote: "The best investment on earth is earth. Land cannot be manufactured, making prime locations an everlasting store of wealth.",
      author: "Louis Glickman",
      title: "Real Estate Investor & Visionary"
    },
    {
      id: 2,
      quote: "Buy land, they're not making it anymore. Strategic plots in expanding corridors yield unparalleled returns over time.",
      author: "Mark Twain",
      title: "Author & Global Investor"
    },
    {
      id: 3,
      quote: "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense and clear title, it is the safest investment in the world.",
      author: "Franklin D. Roosevelt",
      title: "32nd U.S. President"
    }
  ];

  const detailedServices = [
    {
      id: "plots",
      icon: "⌂",
      title: "Plot & Land Acquisition",
      tag: "CORE SPECIALTY",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      summary: "High-potential residential and commercial plots in prime growth corridors with verified titles.",
      bullets: [
        "Government-approved (JDA, HUDA, DDA) verified freehold lands",
        "Gated townships with wide asphalt roads, electricity, and underground water",
        "Clear demarcation, instant possession, and immediate registry support",
        "Specialized in Jaipur Ring Road, Ajmer Road, and Delhi NCR corridors"
      ]
    },
    {
      id: "residential",
      icon: "◆",
      title: "Luxury Residential Sales",
      tag: "BESPOKE HOMES",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      summary: "Curated portfolio of bespoke luxury villas, duplexes, and gated community residences.",
      bullets: [
        "Architecturally designed villas with modern finishes and private landscaped lawns",
        "Exclusive gated enclaves with clubhouses, swimming pools, and 24/7 smart security",
        "Prime connectivity to top international schools, metro stations, and hospitals",
        "Assistance with competitive home loan financing from top national banks (SBI/HDFC)"
      ]
    },
    {
      id: "commercial",
      icon: "🏢",
      title: "Commercial & Retail Space",
      tag: "HIGH YIELD ASSETS",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      summary: "High-yielding commercial plots, retail showrooms, and corporate office spaces.",
      bullets: [
        "High-footfall corner plots along major highway arterial roads and expressways",
        "Pre-leased properties offering guaranteed 9% – 12% rental yield",
        "Ideal for corporate headquarters, boutique hospitals, and luxury retail hubs",
        "Comprehensive footfall demographic and ROI feasibility reports"
      ]
    },
    {
      id: "legal",
      icon: "⚖️",
      title: "Legal & RERA Due Diligence",
      tag: "100% DISPUTE FREE",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      summary: "End-to-end legal title verification, 30-year mother deed audit, and registration support.",
      bullets: [
        "30-year mother deed and ownership title chain verification by high court advocates",
        "RERA compliance validation, master plan zoning checks, and land conversion clearance",
        "Drafting of Sale Agreements, No-Objection Certificates (NOC), and Power of Attorney",
        "Concierge accompaniment for registry, stamp duty computation, and mutation"
      ]
    },
    {
      id: "investment",
      icon: "◈",
      title: "Strategic Investment Advisory",
      tag: "WEALTH PLANNING",
      image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80",
      summary: "Tailored wealth generation blueprints through smart real estate allocations.",
      bullets: [
        "Macro & micro market appreciation analytics and clear entry-exit strategies",
        "Capital gains tax exemption guidance (Section 54 / 54EC advisory)",
        "Fractional and joint-development land investment opportunities",
        "Portfolio rebalancing and resale asset liquidation services"
      ]
    },
    {
      id: "vastu",
      icon: "📐",
      title: "Architectural & Vastu Guidance",
      tag: "SCIENTIFIC PLANNING",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      summary: "Scientific Vastu evaluation and master architectural layout planning for optimum harmony.",
      bullets: [
        "Plot orientation, direction of entry, slope, and energy flow assessment",
        "Custom floor plan blueprints aligned with local building bylaws",
        "Liaison with top landscape designers and structural engineers",
        "Vastu compliance certificates for peace of mind and prosperity"
      ]
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Goal Setting", desc: "We understand your budget, preferred location, and investment timeline." },
    { step: "02", title: "Curated Shortlisting", desc: "We present verified options that strictly meet your criteria with video previews." },
    { step: "03", title: "VIP Site Tour", desc: "Comfortable guided site visits with our local property specialists." },
    { step: "04", title: "Legal Title Verification", desc: "Our legal panel confirms clear titles, JDA/RERA approvals, and encumbrance reports." },
    { step: "05", title: "Registry & Handover", desc: "Smooth registration paperwork, mutation assistance, and on-ground possession." }
  ];

  const faqs = [
    {
      q: "Are all plots listed on Plot With Property legally verified?",
      a: "Yes. Every single property undergoes a mandatory legal audit by our advocate team, verifying 30-year title deeds, master plan zoning, and government regulatory approvals (JDA, RERA, etc.)."
    },
    {
      q: "Do you offer bank loan assistance for plot purchases?",
      a: "Yes, we have tie-ups with leading national and private banks (SBI, HDFC, ICICI, Axis Bank) to facilitate hassle-free loan approvals with up to 80% financing."
    },
    {
      q: "How do I schedule a site visit?",
      a: "You can click on 'Book Visit' on any property card or visit our Contact page to choose your preferred date and time. Our representative will arrange chauffeur pickup or coordinate on-site meetups."
    },
    {
      q: "What is the typical appreciation rate in your featured locations?",
      a: "Our curated corridors (like Jaipur's Ajmer Road and Ring Road, or Gurgaon's Dwarka Expressway) have historically demonstrated consistent 12% to 18% annual capital appreciation."
    }
  ];

  return (
    <div className="pageContainer">
      {/* PAGE HEADER */}
      <section className="pageHeader">
        <div className="headerOverlay"></div>
        <div className="headerContent">
          <p className="smallTitle">OUR SERVICES</p>
          <h1>Comprehensive <span>Real Estate Solutions</span></h1>
          <p className="headerSubtext">
            From discovering prime plots to seamless legal registry and high-ROI investment advisory, we handle every dimension of your property journey.
          </p>
        </div>
      </section>

      {/* THOUGHTS & PHILOSOPHIES BEHIND OUR SERVICES */}
      <section className="wisdomSection serviceWisdom">
        <div className="sectionHeading">
          <p>INVESTMENT PHILOSOPHY</p>
          <h2>Thoughts on <span>Real Estate Strategy</span></h2>
          <p className="sectionSubDesc">
            Guiding principles that power our strategic advisory and land shortlisting.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="wisdomGrid">
          {serviceThoughts.map((item) => (
            <div className="wisdomCard" key={item.id}>
              <span className="quoteMark">“</span>
              <p className="quoteText">{item.quote}</p>
              <div className="quoteAuthorBox">
                <div className="goldAuthorLine"></div>
                <h4>{item.author}</h4>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICES GRID WITH PHOTOS */}
      <section className="servicesDetailSection">
        <div className="sectionHeading">
          <p>WHAT WE SPECIALIZE IN</p>
          <h2>End-To-End <span>Property Services</span></h2>
          <p className="sectionSubDesc">
            Transparent, secure, and concierge-level real estate solutions tailored to your unique financial goals.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="detailedServiceGrid">
          {detailedServices.map((srv) => (
            <div className="detailedServiceCard" key={srv.id}>
              <div className="serviceCardImage">
                <img src={srv.image} alt={srv.title} />
                <span className="serviceTag">{srv.tag}</span>
              </div>
              <div className="serviceCardBody">
                <div className="serviceIconLarge">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p className="serviceSummary">{srv.summary}</p>
                <ul className="serviceBulletList">
                  {srv.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="bulletDot">✦</span> {b}
                    </li>
                  ))}
                </ul>
                <Link to={`/contact?service=${encodeURIComponent(srv.title)}`} className="serviceActionBtn">
                  Inquire for {srv.title.split(" ")[0]} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="processSection">
        <div className="sectionHeading">
          <p>HOW IT WORKS</p>
          <h2>Our 5-Step <span>Seamless Process</span></h2>
          <div className="goldLine"></div>
        </div>

        <div className="processGrid">
          {processSteps.map((p, idx) => (
            <div className="processCard" key={idx}>
              <span className="processStepNum">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="faqSection">
        <div className="sectionHeading">
          <p>FREQUENTLY ASKED QUESTIONS</p>
          <h2>Have <span>Questions?</span></h2>
          <div className="goldLine"></div>
        </div>

        <div className="faqList">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div className={`faqItem ${isOpen ? "open" : ""}`} key={idx}>
                <button className="faqQuestion" onClick={() => setOpenFaq(isOpen ? null : idx)}>
                  <span>{faq.q}</span>
                  <span className="faqToggleIcon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faqAnswer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta">
        <div>
          <p>READY TO EXPLORE OUR TAILORED SERVICES?</p>
          <h2>Get Expert <span>Consultation Today</span></h2>
        </div>
        <Link to="/contact" className="goldBtn">
          Contact Our Advisors →
        </Link>
      </section>
    </div>
  );
}
