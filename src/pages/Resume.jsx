import { useNavigate } from "react-router-dom";
import { experience, skills, contact } from "../data/projects";
import "../styles/resume.css";

function Achievement({ item }) {
  if (typeof item === "string") {
    return (
      <div className="achievement-item">
        <div className="achievement-diamond" />
        <span>{item}</span>
      </div>
    );
  }
  return (
    <div className="achievement-item">
      <div className="achievement-diamond" />
      <span>
        {item.text}
        {item.bold && <strong>{item.bold}</strong>}
        {item.after}
      </span>
    </div>
  );
}

export default function Resume() {
  const navigate = useNavigate();

  return (
    <div className="resume-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        <span className="back-btn-arrow">&larr;</span>
        Back
      </button>

      {/* Resume Title (large watermark) */}
      <div className="resume-watermark">Resume</div>

      {/* Header Section */}
      <div className="resume-header-section">
        <div className="resume-name-block">
          <h1 className="resume-name">
            Chimdalu Benedict{"\n"}Ofoegbu
          </h1>
          <p className="resume-tagline">
            Designing decentralized and blockchain-based applications to
            revolutionize user experiences, one project at a time.
          </p>
        </div>

        <div className="resume-contact-col">
          <p className="resume-contact-label">Contact Me</p>
          <div className="resume-contact-btns">
            <a
              href={`mailto:${contact.email}`}
              className="resume-contact-btn"
            >
              Email
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-btn"
            >
              LinkedIn
            </a>
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-contact-btn"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="resume-divider" />

      {/* Experience Section */}
      <div className="resume-section-title">Experience</div>
      <div className="experience-cards">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="experience-card"
            style={{ animationDelay: `${0.2 + i * 0.15}s` }}
          >
            <div className="experience-card-inner">
              {/* Left: Company + Duration */}
              <div className="experience-left">
                <div className="experience-company-block">
                  <div className="experience-company">
                    {exp.company.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < exp.company.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  <div className="experience-meta">
                    <div className="experience-duration">{exp.duration}</div>
                    <div className="experience-location">{exp.location}</div>
                  </div>
                </div>
                <div className="experience-arrow">
                  <span>&mdash;&mdash;&gt;</span>
                </div>
              </div>

              {/* Right: Role + Description + Achievements */}
              <div className="experience-right">
                <div className="experience-role-block">
                  <div className="experience-role">{exp.role}</div>
                  <div className="experience-description">
                    {exp.description}
                    {exp.descriptionBold && (
                      <>
                        <br />
                        <strong>{exp.descriptionBold}</strong>
                      </>
                    )}
                  </div>
                </div>
                <div className="experience-achievements">
                  {exp.achievements.map((achievement, j) => (
                    <Achievement key={j} item={achievement} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="resume-divider" />

      {/* Download Resume */}
      <div className="resume-download-wrap">
        <a
          href="/resume.pdf"
          download
          className="resume-download-btn"
        >
          Download Resume
        </a>
      </div>

      {/* Skills Section */}
      <div className="resume-section-title">Skills</div>
      <div className="skills-section">
        <div className="skills-grid">
          <div className="skill-column">
            <div className="skill-box-title">Design</div>
            <div className="skill-box">
              <div className="skill-list">
                {skills.design.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-diamond" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skill-column">
            <div className="skill-box-title">Other</div>
            <div className="skill-box">
              <div className="skill-list">
                {skills.other.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-diamond" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skill-column">
            <div className="skill-box-title">Tools</div>
            <div className="skill-box">
              <div className="skill-list">
                {skills.tools.map((skill) => (
                  <div key={skill} className="skill-item">
                    <div className="skill-diamond" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="resume-footer">
        <p>BENSAGE &middot; RESUME</p>
      </div>
    </div>
  );
}
