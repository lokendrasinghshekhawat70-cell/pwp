import { useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const serviceThoughts = [
    {
      id: 1,
      quote: "Land is the ultimate finite asset. Acquiring a government-approved plot in an emerging growth corridor is the single most secure foundation for your family's future wealth.",
      author: "Indian Land Investment Philosophy",
      title: "Strategic Wealth Principles"
    },
    {
      id: 2,
      quote: "100% verified JDA Patta, immediate spot registration, and on-ground concrete boundary pillars—this is the golden standard of trust every Indian buyer deserves.",
      author: "Raju Verma",
      title: "Chief Advisor • Gokul Kripa"
    },
    {
      id: 3,
      quote: "A prime plot acquired along Ajmer Road, Ring Road, or expressway corridors today becomes tomorrow's generational wealth multiplier.",
      author: "Township Development Research",
      title: "High-Growth Corridor Analysis"
    }
  ];

  const detailedServices = [
    {
      id: "plots",
      icon: "🏡",
      title: "JDA & RERA Approved Plots (Plot Acquisition)",
      tag: "Core Specialty",
      image: "/plots/indian_luxury_township.jpg",
      summary: "100% clear title, government patta, and ready-to-register residential plots across Jaipur, Navi Mumbai, Bhiwadi, Ajmer & Kishangarh.",
      bullets: [
        "100% JDA Patta & RERA registered master gated townships",
        "60ft to 100ft wide blacktop sector roads with underground utilities",
        "Physical on-ground pillar demarcation with instant registry",
        "Prime corridors: Ajmer Road, Ring Road, Diggi Road & NCR Expressways"
      ]
    },
    {
      id: "residential",
      icon: "🏛️",
      title: "Luxury Villa & Residential Plots (Villa Land)",
      tag: "Premium Enclaves",
      image: "/plots/indian_villa_plot.jpg",
      summary: "Gated townships equipped with clubhouse, landscaped parks, temple, and 24/7 round-the-clock security.",
      bullets: [
        "Vastu-compliant east and north-facing plot options available",
        "Clubhouse, swimming pool, gym, yoga zones & community parks",
        "Proximity to top international schools, hospitals & transit corridors",
        "Up to 80% instant home loan pre-approved with SBI & HDFC"
      ]
    },
    {
      id: "commercial",
      icon: "🏢",
      title: "Highway Commercial Land & Showroom Plots",
      tag: "High-Yield Assets",
      image: "/plots/indian_headquarters.jpg",
      summary: "High-visibility commercial land parcels along National Highways and major sector roads delivering 10-15% assured returns.",
      bullets: [
        "High-visibility corner plots along 100ft & 200ft main sector roads",
        "Ideal for corporate offices, retail showrooms, hotels, warehouses & hospitals",
        "Direct highway frontage with seamless RIICO & industrial connectivity",
        "Comprehensive commercial land-use conversion (90A) and revenue approvals"
      ]
    },
    {
      id: "legal",
      icon: "⚖️",
      title: "30-Year Legal Due Diligence (Legal Audit)",
      tag: "100% Clear Title",
      image: "/plots/indian_headquarters.jpg",
      summary: "30-year Mother Deed audit, Khasra-Khatauni validation, and non-encumbrance title search by High Court empaneled advocates.",
      bullets: [
        "30-year revenue chain audit and Non-Encumbrance Certificate (NEC)",
        "JDA Master Plan zoning, land conversion (90A), and RERA approval check",
        "Precision legal drafting of Agreement to Sale and registered Sale Deed",
        "Personal representation at the Sub-Registrar office & fast-track Mutation (Dakhil Kharij)"
      ]
    },
    {
      id: "investment",
      icon: "📈",
      title: "Strategic Land Investment & Tax Advisory",
      tag: "Wealth Planning",
      image: "/plots/indian_airport_corridor.jpg",
      summary: "Comprehensive capital growth planning along upcoming expressways, ring roads, and international airport corridors.",
      bullets: [
        "Micro-market growth trends with strategic entry and exit timing",
        "Expert guidance on Capital Gains Tax exemptions (Section 54 / 54EC)",
        "End-to-end concierge advisory for NRI and overseas investors",
        "Dedicated plot resale and liquidity assistance"
      ]
    },
    {
      id: "vastu",
      icon: "📐",
      title: "On-Ground Demarcation & Spot Registration",
      tag: "Physical Verification",
      image: "/plots/indian_villa_plot.jpg",
      summary: "Accurate GPS coordinates, reinforced concrete corner pillars, and complete spot registration assistance.",
      bullets: [
        "Distinct physical demarcation with reinforced concrete boundary pillars",
        "Township layout map, sector road plan, and satellite coordinate records",
        "Accurate stamp duty assessment and 100% transparent billing",
        "Immediate post-registry Dakhil Kharij (Mutation) filing"
      ]
    }
  ];

  const processSteps = [
    { step: "01", title: "Consultation & Budgeting", desc: "Understand your investment goals, preferred location, and optimal budget allocation." },
    { step: "02", title: "Shortlisting & Layout Review", desc: "Detailed review of 100% JDA/RERA township layouts, video walkthroughs, and master plans." },
    { step: "03", title: "Free AC Cab Family Site Visit", desc: "Complimentary doorstep pickup for your entire family for a transparent on-ground site inspection." },
    { step: "04", title: "Legal & Title Verification", desc: "Full audit of 30-year mother deed, JDA patta, RERA registration, and bank loan pre-approvals." },
    { step: "05", title: "Registration & Possession", desc: "Spot registration at the sub-registrar office, instant physical possession with boundary pillars, and mutation filing." }
  ];

  const faqs = [
    {
      q: "Are all plots listed on Plot With Property 100% JDA and RERA approved?",
      a: "Yes. Every single township and land parcel in our portfolio is 100% legally approved by statutory authorities (JDA / RERA / Govt. Approved). Each project comes with clear government patta, town planning approvals, and a 30-year legal due diligence report."
    },
    {
      q: "Is bank loan facility available on these plots?",
      a: "Yes, our projects are pre-approved for up to 80% home/land loans by India's leading nationalized and private banks including SBI, HDFC, ICICI, and Axis Bank with expedited sanctioning."
    },
    {
      q: "How do I book a complimentary site visit for my family?",
      a: "You can book a free site visit directly by clicking 'Book Free Site Visit' on our portal or calling/messaging us on WhatsApp at +91 98765 43210. We provide comfortable doorstep AC cab pickup and drop across Jaipur, Bhiwadi, and Ajmer."
    },
    {
      q: "What is the process for registration and physical possession?",
      a: "We follow a completely transparent process. You receive immediate on-ground physical possession with concrete boundary pillars, followed by immediate execution of the registered sale deed and fast-track mutation (Dakhil Kharij) support."
    }
  ];

  return (
    <div className="pageContainer mbThemePage">
      {/* FLOATING QUICK CONTACT PILL */}
      <div className="floatingContactPill">
        <a href="https://wa.me/919876543210?text=Hello%20Raju%20Verma%20ji,%20I%20am%20looking%20for%20property%20services%20and%20plot%20details." target="_blank" rel="noopener noreferrer" className="floatWaBtn">
          <span className="waIcon">💬</span>
          <span className="waText">Chat on WhatsApp</span>
        </a>
        <a href="tel:+919876543210" className="floatCallBtn">
          <span className="callIcon">📞</span>
          <span className="callText">+91 98765 43210</span>
        </a>
      </div>

      {/* SERVICES PORTAL HEADER */}
      <section className="mbPortalHeader">
        <div className="mbPortalHeaderInner">
          <div className="mbPortalBadge">
            <span className="mbLiveDot"></span>
            <span>Magicbricks Style Advisory • 0% Brokerage • Direct Developer Price</span>
          </div>
          <h1>Comprehensive Real Estate & Land Advisory Services</h1>
          <p>
            From statutory JDA-approved township plots and 30-year legal title search to 80% bank loans and instant on-ground physical possession.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES GRID */}
      <section className="mbServicesDetailSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Our Core Expertise</span>
          <h2 className="mbSectionTitle">Dedicated Services for <span>Your Secure Investment</span></h2>
          <p className="mbSectionDesc">Transparent, legally verified, and trusted by hundreds of families across India.</p>
        </div>

        <div className="mbDetailedServiceGrid">
          {detailedServices.map((srv) => (
            <div className="mbDetailedCard" key={srv.id}>
              <div className="mbDetailedImgWrap">
                <img src={srv.image} alt={srv.title} />
                <span className="mbDetailedTag">{srv.tag}</span>
              </div>
              <div className="mbDetailedBody">
                <div className="mbDetailedIcon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p className="mbDetailedSummary">{srv.summary}</p>
                <ul className="mbDetailedList">
                  {srv.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="mbBulletCheck">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/contact?service=${encodeURIComponent(srv.title)}`} className="mbDetailedLink">
                  Consult Advisor →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-STEP PROCESS SECTION */}
      <section className="mbProcessSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Simple & Secure Process</span>
          <h2 className="mbSectionTitle">Become a Proud Landowner in <span>5 Easy Steps</span></h2>
          <p className="mbSectionDesc">From initial consultation to spot registry and physical possession, we are with you at every step.</p>
        </div>

        <div className="mbProcessGrid">
          {processSteps.map((p, idx) => (
            <div className="mbProcessCard" key={idx}>
              <span className="mbStepNumber">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mbFaqSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Frequently Asked Questions</span>
          <h2 className="mbSectionTitle">Got Questions? <span>Here are the Answers</span></h2>
          <p className="mbSectionDesc">Everything you need to know about buying verified plots with zero hassle.</p>
        </div>

        <div className="mbFaqList">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div className={`mbFaqItem ${isOpen ? "open" : ""}`} key={idx}>
                <button className="mbFaqQuestion" onClick={() => setOpenFaq(isOpen ? null : idx)}>
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

      {/* CTA BANNER */}
      <section className="mbCtaSection">
        <div className="mbCtaContainer">
          <div className="mbCtaText">
            <span className="mbCtaPreTag">Schedule Your Site Visit Today</span>
            <h2>Book a Free Family Site Visit in <span>Complimentary AC Cab</span></h2>
            <p>Inspect 100% JDA & RERA approved townships on-ground with Raju Verma and our senior advisory team.</p>
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
