import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SpotlightFrame from "../components/SpotlightFrame";
import Lightbox from "../components/Lightbox";
import { projects } from "../data/projects";
import "../styles/casestudy.css";
import "../styles/lightbox.css";

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects[slug];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((i) =>
      i === project.spotlights.length - 1 ? 0 : i + 1
    );
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((i) =>
      i === 0 ? project.spotlights.length - 1 : i - 1
    );
  }, [project]);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 24,
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        <p style={{ fontSize: 24, fontWeight: 300 }}>Project not found</p>
        <button
          onClick={() => navigate("/")}
          className="back-btn"
          style={{ position: "static", opacity: 1, animation: "none" }}
        >
          <span className="back-btn-arrow">&larr;</span> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "var(--bg-primary)",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
        color: "var(--text-primary)",
      }}
    >
      {/* Back Nav */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <span className="back-btn-arrow">&larr;</span>
        Back
      </button>

      {/* Outer Border Container */}
      <div className="case-outer-border">
        <div className="case-content">
          {/* Header: Logo + Description */}
          <div className="case-header">
            {project.logo && (
              <div style={{ height: 40 }}>
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="case-logo"
                />
              </div>
            )}
            <p className="case-description">{project.description}</p>
          </div>

          {/* Spotlight Grid */}
          <div className="case-spotlight-grid">
            {project.spotlights.map((spotlight, index) => (
              <SpotlightFrame
                key={index}
                src={spotlight.src}
                alt={spotlight.alt}
                hasBorder={spotlight.hasBorder}
                cardBg={project.cardBg || null}
                borderColor={project.borderColor || null}
                isVideo={spotlight.isVideo || false}
                index={index}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="case-footer">
          <p>BENSAGE &middot; PORTFOLIO</p>
        </div>
      </div>

      <div className="case-bottom-spacer" />

      {/* Lightbox */}
      <Lightbox
        images={project.spotlights}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
