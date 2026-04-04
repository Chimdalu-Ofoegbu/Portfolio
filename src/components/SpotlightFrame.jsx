import { useState } from "react";

export default function SpotlightFrame({
  src,
  alt,
  hasBorder = true,
  cardBg = null,
  borderColor = null,
  index = 0,
  isVideo = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  const imgBorder = hasBorder
    ? `1px solid ${borderColor || (cardBg ? "rgba(250,250,250,0.15)" : "#030303")}`
    : "none";

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
        style={cardBg ? { background: "transparent", padding: "11px", alignItems: "center" } : undefined}
      >
        <div
          className="case-spotlight-img-wrap"
          style={{ border: imgBorder }}
        >
          {isVideo ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="case-spotlight-img"
            />
          ) : (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="case-spotlight-img"
            />
          )}
        </div>
      </div>
    </div>
  );
}
