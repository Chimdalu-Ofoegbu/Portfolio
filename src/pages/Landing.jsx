import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import GridLines from "../components/GridLines";
import Footer from "../components/Footer";
import ArrowIcon from "../components/ArrowIcon";
import { projects } from "../data/projects";
import "../styles/landing.css";

export default function Landing() {
  const [activeTab, setActiveTab] = useState("spotlight");

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
            href="https://cal.com"
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
                <div className="card-label">View Case Study &rarr;</div>
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
                <div className="card-label">View Case Study &rarr;</div>
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
            <div className="spotlight-card" style={{ opacity: 1, animation: "none" }}>
              <div className="spotlight-inner">
                <div className="project-placeholder">
                  <div>
                    <div className="project-placeholder-num">01</div>
                    <div className="project-placeholder-title">
                      Whisper
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spotlight-card" style={{ opacity: 1, animation: "none" }}>
              <div className="spotlight-inner">
                <div className="project-placeholder">
                  <div>
                    <div className="project-placeholder-num">02</div>
                    <div className="project-placeholder-title">
                      Beradrome — DeFi Liquidity Protocol
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spotlight-card" style={{ opacity: 1, animation: "none" }}>
              <div className="spotlight-inner">
                <div className="project-placeholder">
                  <div>
                    <div className="project-placeholder-num">03</div>
                    <div className="project-placeholder-title">
                      Fedix Labs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
