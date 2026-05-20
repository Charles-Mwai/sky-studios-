import React, { useState, useEffect } from "react";

export const LazyImage = ({
  src,
  placeholderSrc,
  alt = "",
  className = "",
  style = {},
  onClick = null,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);

  useEffect(() => {
    // Reset state when src changes (e.g. key updates)
    setIsLoaded(false);
    setCurrentSrc(placeholderSrc);

    const image = new Image();
    image.src = src;
    image.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src, placeholderSrc]);

  return (
    <div 
      className={`relative overflow-hidden bg-brand-dark/5 w-full h-full ${className}`}
      style={style}
      onClick={onClick}
    >
      {/* Small placeholder image blurred */}
      <img
        src={placeholderSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        style={{ filter: "blur(12px)" }}
        loading="lazy"
      />
      
      {/* High-res image layered on top */}
      <img
        src={currentSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;
