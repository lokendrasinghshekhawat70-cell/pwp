import { Link } from "react-router-dom";

export default function About() {
  const coreValues = [
    {
      icon: "📜",
      title: "100% Legal Transparency",
      desc: "Every single plot and property in our portfolio undergoes rigorous legal due diligence, 30-year title search, and government approval audits (JDA/RERA)."
    },
    {
      icon: "📈",
      title: "High Growth Corridors",
      desc: "We exclusively target emerging infrastructure hubs, expressway junctions, and ring road zones that guarantee consistent 15-20% YoY appreciation."
    },
    {
      icon: "🤝",
      title: "Client-Centric Advisory",
      desc: "We don't merely sell plots; we partner with you to analyze your wealth goals, family aspirations, and tax strategies for generational prosperity."
    },
    {
      icon: "⚡",
      title: "Instant Demarcation & Registry",
      desc: "From initial VIP site tour, registry documentation, physical corner demarcation pillars to mutation, our concierge team handles every single detail."
    }
  ];

  const milestones = [
    { number: "10+", label: "Years in Real Estate" },
    { number: "500+", label: "Verified Plots Sold" },
    { number: "₹250Cr+", label: "Assets Facilitated" },
    { number: "99.4%", label: "Client Satisfaction Rate" }
  ];

  const wisdomQuotes = [
    {
      id: 1,
      quote: "Ninety percent of all millionaires become so through owning real estate. More money has been made in real estate than in all industrial investments combined.",
      author: "Andrew Carnegie",
      title: "Industrialist & Philanthropist"
    },
    {
      id: 2,
      quote: "Don't wait to buy real estate, buy real estate and wait. Land is the single greatest foundation of generational security.",
      author: "Will Rogers",
      title: "American Philosopher & Investor"
    },
    {
      id: 3,
      quote: "At Plot With Property, our commitment is to guide you where vision becomes value. We deliver 100% JDA approved & RERA registered townships so your family can own a lasting legacy.",
      author: "Raju Verma",
      title: "Real Estate Expert • Gokul Kripa Sales & Marketing"
    },
    {
      id: 4,
      quote: "Invest. Build. Grow. Real estate purchased with common sense and clear government title is the safest, highest-yielding asset on earth.",
      author: "Louis Glickman",
      title: "Real Estate Investor"
    }
  ];

  const team = [
    {
      name: "Raju Verma",
      role: "Real Estate Expert | Gokul Kripa Sales & Marketing",
      experience: "Advisory Specialist for Jaipur, Navi Mumbai, Bhiwadi, Ajmer & Kishangarh",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Rohit Sharma",
      role: "Head of Commercial & Plots",
      experience: "Township Planning & High-Yield Asset Acquisition",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Adv. Ananya Mehra",
      role: "Legal & RERA Compliance Specialist",
      experience: "Senior Real Estate Legal Advocate (High Court Panel)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="pageContainer">
      {/* PAGE HEADER */}
      <section className="pageHeader">
        <div className="headerOverlay"></div>
        <div className="headerContent">
          <p className="smallTitle">✨ RAJU VERMA • GOKUL KRIPA SALES & MARKETING</p>
          <h1>Where Legacy <span>Takes Shape.</span></h1>
          <p className="headerSubtext">
            PLOT WITH PROPERTY — Where Vision Becomes Value. Delivering verified JDA & RERA approved township plots across Jaipur, Navi Mumbai, Bhiwadi, Ajmer, and Kishangarh.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="aboutStorySection">
        <div className="aboutStoryGrid">
          <div className="aboutStoryImage">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80"
              alt="Plot With Property Corporate Headquarters"
            />
            <div className="experienceBox">
              <strong>10+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          <div className="aboutStoryContent">
            <p className="goldText">OUR HERITAGE & VISION</p>
            <h2>Invest • Build • Grow — Own Your Legacy</h2>
            <p>
              In strategic partnership with <strong>Gokul Kripa Sales & Marketing</strong> and led by real estate expert <strong>Raju Verma</strong>,
              <strong> Plot With Property (PWP)</strong> has emerged as the premier advisory for high-appreciation land and township acquisitions.
            </p>
            <p>
              We specialize in 100% legally clear, JDA-approved and RERA-registered townships in <strong>Jaipur, Navi Mumbai, Bhiwadi, Ajmer, and Kishangarh</strong>.
              From title verification, physical on-ground demarcation, to instant registry and patta handover, we provide seamless end-to-end assistance.
            </p>

            <div className="checkList">
              <div className="checkItem">
                <span className="checkIcon">✔</span>
                <div>
                  <strong>Zero Hidden Costs & Upfront Transparency</strong>
                  <p>Clear government registration fee calculations and upfront pricing.</p>
                </div>
              </div>
              <div className="checkItem">
                <span className="checkIcon">✔</span>
                <div>
                  <strong>Certified Legal Verification</strong>
                  <p>Comprehensive 30-year mother deed title search conducted by high court advocates.</p>
                </div>
              </div>
              <div className="checkItem">
                <span className="checkIcon">✔</span>
                <div>
                  <strong>Chauffeur-Driven VIP Site Visits</strong>
                  <p>Personalized guided visits with our local property analysts all 7 days a week.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="statsSection">
        <div className="statsGrid">
          {milestones.map((item, idx) => (
            <div className="statItem" key={idx}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WISDOM & THOUGHTS SECTION (EXECUTIVE QUOTES) */}
      <section className="wisdomSection">
        <div className="sectionHeading">
          <p>WORDS OF WISDOM</p>
          <h2>Thoughts on <span>Land & Wealth</span></h2>
          <p className="sectionSubDesc">
            Timeless philosophies that guide our investment strategies and long-term asset building.
          </p>
          <div className="goldLine"></div>
        </div>

        <div className="wisdomGrid">
          {wisdomQuotes.map((item) => (
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

      {/* CORE VALUES */}
      <section className="valuesSection">
        <div className="sectionHeading">
          <p>OUR GUIDING PRINCIPLES</p>
          <h2>The Values That <span>Define Us</span></h2>
          <div className="goldLine"></div>
        </div>

        <div className="valuesGrid">
          {coreValues.map((val, idx) => (
            <div className="valueCard" key={idx}>
              <div className="valueIcon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="teamSection">
        <div className="sectionHeading">
          <p>EXPERT ADVISORS</p>
          <h2>Meet Our <span>Leadership</span></h2>
          <div className="goldLine"></div>
        </div>

        <div className="teamGrid">
          {team.map((member, idx) => (
            <div className="teamCard" key={idx}>
              <div className="teamImage">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="teamInfo">
                <h3>{member.name}</h3>
                <p className="teamRole">{member.role}</p>
                <p className="teamExp">{member.experience}</p>
                <div className="teamContactActions">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="teamWaBtn">
                    💬 WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div>
          <p>WANT TO DISCUSS YOUR INVESTMENT GOALS?</p>
          <h2>Schedule A One-On-One <span>Consultation</span></h2>
          <p style={{ color: "#6B7280", marginTop: "10px" }}>
            Connect directly with our senior property advisors at our Jaipur or Delhi NCR corporate office.
          </p>
        </div>
        <Link to="/contact" className="goldBtn">
          Book Appointment →
        </Link>
      </section>
    </div>
  );
}
