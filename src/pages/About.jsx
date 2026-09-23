import { Link } from "react-router-dom";
import rajuVermaImg from "../assets/team/raju_verma.jpg";
import rohitSharmaImg from "../assets/team/rohit_sharma.jpg";
import ananyaMehraImg from "../assets/team/ananya_mehra.jpg";
import sureshChoudharyImg from "../assets/team/suresh_choudhary.jpg";
import aboutHqImg from "../assets/about_hq.jpg";

export default function About() {
  const coreValues = [
    {
      icon: "📜",
      title: "100% Legal Due Diligence & Patta",
      desc: "Every property undergoes rigorous legal title verification, 30-year mother deed scrutiny, JDA approval, and RERA compliance by senior High Court advocates."
    },
    {
      icon: "📈",
      title: "High-Growth Corridors",
      desc: "We handpick prime land parcels along Ajmer Road, Ring Road, Navi Mumbai Airport Zone, and NCR Highways yielding 15-22% annual capital appreciation."
    },
    {
      icon: "🤝",
      title: "Client-First Advisory",
      desc: "We guide Indian families with complete transparency, transforming their hard-earned life savings into legally bulletproof, high-value real estate assets."
    },
    {
      icon: "⚡",
      title: "On-Ground Demarcation & Immediate Possession",
      desc: "Every plot features reinforced boundary pillars, wide sector roads, underground utility lines, spot registration, and immediate mutation support."
    }
  ];

  const milestones = [
    { number: "10+ Years", label: "Proven Real Estate Experience" },
    { number: "500+", label: "Verified Plots & Townships" },
    { number: "₹250Cr+", label: "Successful Property Transactions" },
    { number: "99.4%", label: "Satisfied Client Families" }
  ];

  const wisdomQuotes = [
    {
      id: 1,
      quote: "Land is the ultimate enduring wealth. One who invests in prime land at the right time establishes an unbreakable financial shield for future generations.",
      author: "Land Wealth Advisory Insights",
      title: "Real Estate Wealth Philosophy"
    },
    {
      id: 2,
      quote: "The best time to buy land was yesterday; the second best time is today. A government-approved plot with clear title is an asset that never depreciates.",
      author: "Gokul Kripa Advisory Principles",
      title: "Secure Real Estate Standards"
    },
    {
      id: 3,
      quote: "Plot With Property is committed to ensuring your hard-earned savings translate into secure, appreciating, and verified land assets. We only deal in 100% JDA and RERA approved plots.",
      author: "Raju Verma",
      title: "Chief Real Estate Advisor • Gokul Kripa"
    },
    {
      id: 4,
      quote: "Wide sector roads, statutory government patta, and direct highway connectivity are the three pillars of exponential property value growth in India.",
      author: "Rajasthan Township Development Guide",
      title: "Infrastructure Standards"
    }
  ];

  const team = [
    {
      name: "Raju Verma",
      role: "Chief Real Estate Advisor | Founder",
      experience: "Gokul Kripa Sales & Marketing • 10+ years shaping premier plotted townships across Jaipur, Navi Mumbai, Bhiwadi & Ajmer.",
      image: rajuVermaImg
    },
    {
      name: "Rohit Sharma",
      role: "Head – Township & Land Acquisition",
      experience: "Master township planning, sector road architecture & high-yield strategic land procurement specialist (12+ years).",
      image: rohitSharmaImg
    },
    {
      name: "Adv. Ananya Mehra",
      role: "Senior Legal & RERA Compliance Head",
      experience: "Revenue & High Court panel advocate • 30-year mother deed scrutiny, title verification & mutation specialist.",
      image: ananyaMehraImg
    },
    {
      name: "Suresh Choudhary",
      role: "Director – Client Advisory & On-Ground Operations",
      experience: "Client relations, complimentary family site visit logistics & physical pillar demarcation head (8+ years).",
      image: sureshChoudharyImg
    }
  ];

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

      {/* ABOUT PORTAL HEADER */}
      <section className="mbPortalHeader">
        <div className="mbPortalHeaderInner">
          <div className="mbPortalBadge">
            <span className="mbLiveDot"></span>
            <span>✨ Raju Verma • Gokul Kripa Sales & Marketing</span>
          </div>
          <h1>Where Trust Transforms Into Lasting Generational Value</h1>
          <p>
            PLOT WITH PROPERTY — India's trusted advisory for 100% government-approved (JDA & RERA), legally audited, and high-appreciation plotted townships.
          </p>
        </div>
      </section>

      {/* STORY & LEADERSHIP SECTION */}
      <section className="mbAboutStorySection">
        <div className="mbAboutGrid">
          <div className="mbAboutImgCol">
            <img
              src={aboutHqImg}
              alt="Plot With Property Headquarters & Township"
              className="mbAboutImg"
            />
            <div className="mbAboutBadgeCard">
              <span className="mbBadgeYears">10+</span>
              <span className="mbBadgeText">Years of Trusted Real Estate Leadership</span>
            </div>
          </div>

          <div className="mbAboutTextCol">
            <span className="mbSectionTag">Our Vision & Leadership</span>
            <h2 className="mbSectionTitle">Building Dream Homes. <span>Securing Future Generations.</span></h2>
            <p>
              Under the seasoned leadership of <strong>Raju Verma</strong> (Gokul Kripa Sales & Marketing), Plot With Property has become a benchmark in Rajasthan and Maharashtra for verified residential and commercial plotted developments.
            </p>
            <p>
              We believe land is not merely an asset—it is a family's foundation of pride, security, and wealth. Our 30-year legal due diligence, zero-brokerage direct developer model, and on-ground boundary demarcation ensure absolute peace of mind.
            </p>

            <div className="mbMilestonesRow">
              {milestones.map((m, idx) => (
                <div key={idx} className="mbMilestoneItem">
                  <h3>{m.number}</h3>
                  <p>{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mbAboutActions">
              <Link to="/contact" className="mbPrimaryGoldBtn">
                🚗 Book Free Site Visit →
              </Link>
              <a href="tel:+919876543210" className="mbOutlineBtn">
                📞 Call Now: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <section className="mbValuesSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Our Core Commitments</span>
          <h2 className="mbSectionTitle">Guaranteed Security & <span>Uncompromising Quality</span></h2>
          <p className="mbSectionDesc">Absolute legal transparency at every step so every rupee of your investment is 100% protected.</p>
        </div>

        <div className="mbValuesGrid">
          {coreValues.map((v, idx) => (
            <div className="mbValueCard" key={idx}>
              <div className="mbValueIcon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR LEADERSHIP SECTION */}
      <section className="mbTeamSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">Experienced Real Estate Leadership</span>
          <h2 className="mbSectionTitle">Meet Our Leadership</h2>
          <p className="mbSectionDesc">100% statutory JDA/RERA townships, transparent legal processes, and trusted Indian leadership.</p>
        </div>

        <div className="mbTeamGrid">
          {team.map((member, idx) => (
            <div className="mbTeamCard" key={idx}>
              <img src={member.image} alt={member.name} className="mbTeamImg" />
              <div className="mbTeamBody">
                <h3>{member.name}</h3>
                <p className="mbTeamRole">{member.role}</p>
                <p className="mbTeamExp">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL ESTATE WISDOM QUOTES */}
      <section className="mbQuotesSection">
        <div className="mbSectionHeader center">
          <span className="mbSectionTag">The Power of Land Ownership</span>
          <h2 className="mbSectionTitle">Why Land Remains <span>The Most Secure Asset?</span></h2>
        </div>

        <div className="mbQuotesGrid">
          {wisdomQuotes.map((q) => (
            <div className="mbQuoteCard" key={q.id}>
              <span className="mbQuoteMark">“</span>
              <p className="mbQuoteBody">{q.quote}</p>
              <div className="mbQuoteAuthor">
                <strong>{q.author}</strong>
                <span>{q.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
