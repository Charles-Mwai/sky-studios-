import React from "react";

/**
 * Empty image slot for gallery masonry (no photo, no viewfinder UI).
 */
export const GalleryPlaceholder = ({
  width,
  height,
  className = "",
  fullWidth = false,
}) => {
  if (fullWidth) {
    return (
      <div
        className={`w-full bg-brand-details/70 border border-brand-accent/20 ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
        role="img"
        aria-label="Image placeholder"
      />
    );
  }

  return (
    <div
      className={`shrink-0 bg-brand-details/70 border border-brand-accent/20 ${className}`}
      style={{ width, height }}
      role="img"
      aria-label="Image placeholder"
    />
  );
};

export default GalleryPlaceholder;
