import React from "react";
import { Camera } from "lucide-react";
import LazyImage from "./LazyImage";

export const ViewfinderContainer = ({
  aspectRatio = "aspect-[3/2]",
  label = "SKY STUDIOS // SHOT",
  technicalInfo = "50mm F/2.8 ISO 100",
  shape = "rect", // "rect" or "pill"
  className = "",
  onClick,
  imageSrc,
  placeholderSrc,
  disableLazy = false
}) => {
  // Shape-specific styling
  const containerClass = shape === "pill" 
    ? "rounded-full w-full h-full object-cover overflow-hidden" 
    : "rounded-[2px] w-full h-full overflow-hidden";

  return (
    <div
      onClick={onClick}
      className={`group relative select-none bg-brand-details border border-brand-accent/20 cursor-pointer overflow-hidden transition-all duration-700 ease-cinematic hover:border-brand-accent/50 ${aspectRatio} ${className}`}
    >
      {/* Background Subtle Grid Texture / Gradient or Image */}
      {imageSrc ? (
        <div className={`absolute inset-0 transition-transform duration-1000 ease-cinematic group-hover:scale-105 ${containerClass}`}>
          {disableLazy ? (
            <img
              src={imageSrc}
              alt={label}
              className="w-full h-full object-cover"
            />
          ) : (
            <LazyImage
              src={imageSrc}
              placeholderSrc={placeholderSrc || imageSrc}
              alt={label}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-tr from-brand-details via-brand-bg/40 to-brand-details transition-transform duration-1000 ease-cinematic group-hover:scale-105 ${containerClass}`} />
      )}
      
      {/* Viewfinder Content Frame */}
      <div className={`absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-10 ${shape === "pill" ? "rounded-full" : ""}`}>
        
        {/* Top Indicators (Viewfinder Grid Details) */}
        <div className="flex justify-between items-start opacity-40 group-hover:opacity-75 transition-opacity duration-500">
          <span className="font-sans text-[7px] sm:text-[9px] tracking-widest text-brand-muted uppercase font-medium">
            [REC] STBY
          </span>
          <span className="font-sans text-[7px] sm:text-[9px] tracking-wider text-brand-muted font-mono font-medium">
            {technicalInfo}
          </span>
        </div>

        {/* Center Reticle Focus Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Focal Ring */}
          <div className="relative w-10 h-10 sm:w-16 sm:h-16 border border-brand-accent/30 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-cinematic">
            {/* Center Focal Dot */}
            <div className="w-1 h-1 bg-brand-accent rounded-full" />
            {/* Focal Crosshairs */}
            <div className="absolute -top-1 w-[1px] h-2 bg-brand-accent/40" />
            <div className="absolute -bottom-1 w-[1px] h-2 bg-brand-accent/40" />
            <div className="absolute -left-1 w-2 h-[1px] bg-brand-accent/40" />
            <div className="absolute -right-1 w-2 h-[1px] bg-brand-accent/40" />
          </div>
          
          {/* Big camera icon on hover for clear visual metaphor */}
          <div className="absolute opacity-0 group-hover:opacity-10 scale-75 group-hover:scale-100 transition-all duration-700 ease-cinematic text-brand-text">
            <Camera size={36} strokeWidth={1} />
          </div>
        </div>

        {/* Viewfinder Corner Focus Brackets (Only for rect shape) */}
        {shape === "rect" && (
          <>
            {/* Top Left Bracket */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-accent/40 transition-all duration-500 group-hover:top-2 group-hover:left-2" />
            {/* Top Right Bracket */}
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-accent/40 transition-all duration-500 group-hover:top-2 group-hover:right-2" />
            {/* Bottom Left Bracket */}
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-accent/40 transition-all duration-500 group-hover:bottom-2 group-hover:left-2" />
            {/* Bottom Right Bracket */}
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-accent/40 transition-all duration-500 group-hover:bottom-2 group-hover:right-2" />
          </>
        )}

        {/* Bottom Metadata Label */}
        <div className="flex justify-between items-end opacity-40 group-hover:opacity-90 transition-opacity duration-500">
          <span className="font-sans text-[7px] sm:text-[9px] tracking-widest text-brand-muted uppercase font-medium">
            {label}
          </span>
          <span className="font-sans text-[7px] sm:text-[9px] tracking-widest text-brand-muted uppercase font-medium">
            MF L-LOCK
          </span>
        </div>
      </div>

      {/* Dark Shimmer Slide Hover Overlay */}
      <div className="absolute inset-0 bg-brand-dark/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ViewfinderContainer;
