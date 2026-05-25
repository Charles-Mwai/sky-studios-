import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ViewfinderContainer from "./ViewfinderContainer";

export const Lightbox = ({
  images,
  activeImage,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden"; // Disable background scroll
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "unset"; // Restore scroll
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!activeImage) return null;

  const currentIndex = images.findIndex((img) => img.id === activeImage.id);

  // Swipe detection handler using Framer Motion drag info
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      onPrev();
    } else if (info.offset.x < -swipeThreshold) {
      onNext();
    }
  };

  // Map aspect ratio for Lightbox
  const ratioClass = activeImage.aspectRatio === "portrait"
    ? "aspect-[3/4]"
    : activeImage.aspectRatio === "tall"
    ? "aspect-[9/16]"
    : activeImage.aspectRatio === "square"
    ? "aspect-square"
    : activeImage.aspectRatio === "landscape-wide"
    ? "aspect-[16/9]"
    : "aspect-[3/2]";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-brand-dark/95 text-brand-bg select-none"
      >
        {/* Top Control Bar */}
        <div className="flex w-full items-center justify-between p-4 md:p-6 z-10 bg-gradient-to-b from-brand-dark/85 to-transparent">
          <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent">
            Sky Studios — {currentIndex + 1} / {(images || []).length}
          </span>
          <button
            onClick={onClose}
            className="flex items-center justify-center p-2 rounded-full hover:bg-brand-details hover:text-brand-text transition-all duration-300"
            aria-label="Close Lightbox"
          >
            <X size={18} />
          </button>
        </div>

        {/* Center Gallery Area */}
        <div className="relative flex flex-1 items-center justify-center px-4 md:px-16 overflow-hidden">
          {/* Left Arrow Button */}
          <button
            onClick={onPrev}
            className="absolute left-4 z-10 hidden md:flex items-center justify-center p-3 rounded-full bg-brand-dark/40 hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 border border-brand-accent/20"
            aria-label="Previous Image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Main Viewfinder Container (Full size placeholder substitute) */}
          <motion.div
            key={activeImage.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="relative w-full max-w-[85vw] sm:max-w-[70vw] md:max-w-3xl flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <div className={`relative w-full overflow-hidden shadow-2xl border border-brand-accent/10 rounded-[2px] ${ratioClass}`}>
              <img
                src={activeImage.url || activeImage.src}
                alt={activeImage.caption || ""}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Right Arrow Button */}
          <button
            onClick={onNext}
            className="absolute right-4 z-10 hidden md:flex items-center justify-center p-3 rounded-full bg-brand-dark/40 hover:bg-brand-bg hover:text-brand-dark transition-all duration-300 border border-brand-accent/20"
            aria-label="Next Image"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="w-full text-center p-6 md:p-8 z-10 bg-gradient-to-t from-brand-dark/85 to-transparent">
          <motion.p
            key={`caption-${activeImage.id}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-serif italic text-brand-bg text-sm sm:text-base max-w-2xl mx-auto font-light"
          >
            {activeImage.caption || ""}
          </motion.p>
          <span className="block mt-2 font-sans text-[8px] tracking-widest text-brand-accent uppercase md:hidden">
            Swipe left/right to navigate
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
