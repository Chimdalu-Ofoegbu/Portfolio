import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import GridLines from "../components/GridLines";
import Footer from "../components/Footer";
import ArrowIcon from "../components/ArrowIcon";
import { projects } from "../data/projects";
import "../styles/landing.css";

export default function Landing() {
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem("activeTab") || "spotlight";
  });

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="page">
      <GridLines />
      <Header />

      {/* ── Hero ── */}
      <section className="hero">
        <h1 className="hero-heading">
          <span>THE FUNCTION OF</span>
          <span>DESIGN IS LETTING</span>
          <span>DESIGN FUNCTION</span>
        </h1>

        <p className="hero-body">
          My journey is one of constant evolution, where each project is an
          opportunity to set new benchmarks of captivation. I'm an experienced
          Web3 Product Designer passionate about problem-solving, data-driven
          designs, and creating immersive experiences.
        </p>

        <div className="ctas">
          <a
            href="https://calendly.com/bensagesol/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn filled"
          >
            SCHEDULE CALL
            <ArrowIcon size={30} className="cta-arrow" />
          </a>
          <Link to="/resume" className="cta-btn outline">
            MY RESUME
            <ArrowIcon size={30} className="cta-arrow" />
          </Link>
        </div>
      </section>

      {/* ── Spotlight / Projects ── */}
      <section className="spotlight-section">
        <div className="divider" />
        <div className="tab-row">
          <button
            className={`tab ${activeTab === "spotlight" ? "filled" : "outline"}`}
            onClick={() => setActiveTab("spotlight")}
          >
            spotlight
          </button>
          <button
            className={`tab ${activeTab === "projects" ? "filled" : "outline"}`}
            onClick={() => setActiveTab("projects")}
          >
            PROJECTS
          </button>
        </div>

        {/* Spotlight Content */}
        <div
          className={`border-box tab-content ${activeTab === "spotlight" ? "visible" : "hidden"}`}
        >
          <p className="spotlight-desc">
            Welcome to our curated showcase of exceptional projects that define
            our design philosophy. Each piece embodies our unwavering dedication
            to creating captivating experiences that transcend expectations.
          </p>
          <div className="cards">
            {/* BlockNads */}
            <Link
              to="/spotlight/blocknads"
              className="spotlight-card"
            >
              <div className="spotlight-inner">
                <img
                  className="spotlight-img"
                  src={projects.blocknads.cardImage}
                  alt="BlockNads"
                />
                <div className="card-label">View Screens &rarr;</div>
              </div>
            </Link>

            {/* RigIt */}
            <Link
              to="/spotlight/rigit"
              className="spotlight-card"
            >
              <div className="spotlight-inner">
                <img
                  className="spotlight-img"
                  src={projects.rigit.cardImage}
                  alt="RigIt"
                />
                <div className="card-label">View Screens &rarr;</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Projects Content */}
        <div
          className={`border-box tab-content ${activeTab === "projects" ? "visible" : "hidden"}`}
        >
          <p className="spotlight-desc" style={{ opacity: 1, animation: "none" }}>
            A selection of product and brand design work across Web3, DeFi, and
            digital experiences — built to solve real problems with precision and
            craft.
          </p>
          <div className="cards">
            <Link to="/spotlight/whisper" className="spotlight-card" style={{ opacity: 1, animation: "none" }}>
              <div className="spotlight-inner">
                <img
                  className="spotlight-img"
                  src={projects.whisper.cardImage}
                  alt="Whisper"
                />
                <div className="card-label">View Screens &rarr;</div>
              </div>
            </Link>
            <Link to="/spotlight/beradrome" className="spotlight-card" style={{ opacity: 1, animation: "none" }}>
              <div className="spotlight-inner">
                <img
                  className="spotlight-img"
                  src={projects.beradrome.cardImage}
                  alt="Beradrome"
                />
                <div className="card-label">View Screens &rarr;</div>
              </div>
            </Link>
            <Link to="/spotlight/fedixlabs" className="spotlight-card" style={{ opacity: 1, animation: "none" }}>
              <div className="spotlight-inner">
                <img
                  className="spotlight-img"
                  src={projects.fedixlabs.cardImage}
                  alt="Fedix Labs"
                />
                <div className="card-label">View Screens &rarr;</div>
              </div>
            </Link>
            <Link to="/spotlight/blocknads-mint" className="spotlight-card" style={{ opacity: 1, animation: "none" }}>
              <div className="spotlight-inner">
                <img
                  className="spotlight-img"
                  src={projects["blocknads-mint"].cardImage}
                  alt="BlockNads Mint"
                />
                <div className="card-label">View Screens &rarr;</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
