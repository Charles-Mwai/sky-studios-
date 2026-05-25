import React, { useState, useEffect } from "react";

/**
 * Full-bleed gallery image (Pixieset Peterstyle): w-full, h-auto, no frames.
 */
/** Fixed-size masonry cell — image fills box with object-cover */
export const GalleryPhotoFill = ({
  src,
  placeholderSrc,
  alt = "",
  className = "",
  style,
}) => {
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(placeholderSrc);
    setIsLoaded(false);

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src, placeholderSrc]);

  return (
    <figure className={`relative overflow-hidden m-0 ${className}`} style={style}>
      <img
        src={currentSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-[filter,opacity] duration-700 ease-out ${
          isLoaded ? "opacity-100 blur-0" : "opacity-90 blur-md"
        }`}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
};

export const GalleryPhoto = ({ src, placeholderSrc, alt = "" }) => {
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(placeholderSrc);
    setIsLoaded(false);

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src, placeholderSrc]);

  return (
    <figure className="w-full m-0 block">
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-auto block transition-[filter,opacity] duration-700 ease-out ${
          isLoaded ? "opacity-100 blur-0" : "opacity-90 blur-md scale-[1.01]"
        }`}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
};

export default GalleryPhoto;
