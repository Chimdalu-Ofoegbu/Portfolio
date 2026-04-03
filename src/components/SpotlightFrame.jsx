import { useState } from "react";

export default function SpotlightFrame({
  src,
  alt,
  hasBorder = true,
  cardBg = null,
  index = 0,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`case-spotlight-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        animationDelay: `${0.3 + index * 0.15}s`,
      }}
    >
      <div
        className="case-spotlight-inner"
        style={cardBg ? { background: cardBg } : undefined}
      >
        <div
          className="case-spotlight-img-wrap"
          style={{ border: hasBorder ? (cardBg ? "1px solid rgba(250,250,250,0.15)" : "1px solid #030303") : "none" }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="case-spotlight-img"
          />
        </div>
      </div>
    </div>
  );
}
