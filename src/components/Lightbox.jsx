import { useEffect, useCallback } from "react";

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images[currentIndex]) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      {/* Close */}
      <button
        className="lightbox-btn lightbox-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        &#x2715;
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="lightbox-btn lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          &#x2039;
        </button>
      )}

      {/* Image */}
      <div
        className="lightbox-image-wrap"
        onClick={(e) => e.stopPropagation()}
      >
        {images[currentIndex].isVideo ? (
          <video
            key={images[currentIndex].src}
            src={images[currentIndex].src}
            controls
            autoPlay
            loop
            className="lightbox-image"
          />
        ) : (
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="lightbox-image"
          />
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          className="lightbox-btn lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          &#x203A;
        </button>
      )}

      {/* Counter */}
      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
