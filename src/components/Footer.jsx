import ArrowIcon from "./ArrowIcon";
import { contact } from "../data/projects";

export default function Footer() {
  return (
    <section className="footer">
      <div className="contact-links">
        <div className="contact-row">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
            <ArrowIcon size={40} className="contact-arrow" />
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Twitter
            <ArrowIcon size={40} className="contact-arrow" />
          </a>
          <a href={`mailto:${contact.email}`} className="contact-link">
            Email
            <ArrowIcon size={40} className="contact-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
