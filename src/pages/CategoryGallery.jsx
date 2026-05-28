import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import LazyImage from "../components/LazyImage";
import Lightbox from "../components/Lightbox";
import { galleryByCategory } from "../data/galleryLayouts";

/** Intro masonry — header measurements (px) */
const INTRO_MASONRY = {
  desktop: {
    image1: { width: 326, height: 461 },
    title:  { width: 375, height: 682 },
    image2: { width: 332, height: 241 },
  },
  tablet: {
    image1: { width: "30%", height: "auto" },
    title:  { width: "40%", height: "auto", minHeight: "280px" },
    image2: { width: "30%", height: "auto" },
  }
};

/** Gallery scroll — L = 280×420, S = 280×185 (desktop); fluid aspect on mobile/tablet */
const GALLERY_TILE_HEIGHT = {
  L: "h-[55vw] sm:h-[60vw] md:h-[50vw] lg:h-[420px]",
  S: "h-[44vw] sm:h-[48vw] md:h-[35vw] lg:h-[185px]",
};

const IntroMasonry = ({ gallery }) => {
  const isTablet = typeof window !== "undefined" && window.innerWidth < 1024 && window.innerWidth >= 640;
  const sizes = isTablet ? INTRO_MASONRY.tablet : INTRO_MASONRY.desktop;
  const { image1: s1, title: sTitle, image2: s2 } = sizes;

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8">
      {/* Desktop & Tablet */}
      <div className="hidden sm:flex flex-row items-end justify-between gap-2 md:gap-3 lg:gap-4 max-w-full lg:max-w-[1180px] mx-auto">
        <div className="self-start shrink-0 mt-[80px] md:mt-[100px] lg:mt-[110px]" style={{ width: typeof s1.width === "string" ? s1.width : s1.width, height: s1.height }}>
          {gallery.intro?.[0]?.src ? (
            <LazyImage src={gallery.intro[0].src} alt={gallery.displayTitle} className="w-full h-full" />
          ) : (
            <div className="w-full h-full border border-brand-accent/15" style={{ backgroundColor: "#efede8" }} />
          )}
        </div>
        <div
          className="shrink-0 flex flex-col items-center justify-center text-center px-4 md:px-6 border border-brand-accent/15"
          style={{ width: typeof sTitle.width === "string" ? sTitle.width : sTitle.width, minHeight: sTitle.minHeight || sTitle.height, height: typeof sTitle.height === "string" ? sTitle.height : undefined, backgroundColor: "#bfc9c0" }}
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-brand-dark leading-tight text-balance">
            {gallery.displayTitle}
          </h2>
          <p className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-black font-bold mt-4 md:mt-5">
            {gallery.scrollLabel}
          </p>
        </div>
        <div className="self-center shrink-0" style={{ width: typeof s2.width === "string" ? s2.width : s2.width, height: s2.height }}>
          {gallery.intro?.[1]?.src ? (
            <LazyImage src={gallery.intro[1].src} alt={gallery.displayTitle} className="w-full h-full" />
          ) : (
            <div className="w-full h-full border border-brand-accent/15" style={{ backgroundColor: "#efede8" }} />
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden flex-col items-center gap-4 w-full px-2 mx-auto">
        <div className="w-full" style={{ aspectRatio: `${s1.width} / ${s1.height}` }}>
          {gallery.intro?.[0]?.src ? (
            <LazyImage src={gallery.intro[0].src} alt={gallery.displayTitle} className="w-full h-full" />
          ) : (
            <div className="w-full h-full border border-brand-accent/15" style={{ backgroundColor: "#efede8" }} />
          )}
        </div>
        <div
          className="w-full flex flex-col items-center justify-center text-center px-6 py-14 border border-brand-accent/15 min-h-[200px]"
          style={{ backgroundColor: "#bfc9c0" }}
        >
          <h2 className="font-serif text-2xl font-light text-brand-dark leading-tight text-balance">
            {gallery.displayTitle}
          </h2>
          <p className="font-sans text-[9px] tracking-widest uppercase text-black font-bold mt-4">
            {gallery.scrollLabel}
          </p>
        </div>
        <div className="w-full" style={{ aspectRatio: `${s2.width} / ${s2.height}` }}>
          {gallery.intro?.[1]?.src ? (
            <LazyImage src={gallery.intro[1].src} alt={gallery.displayTitle} className="w-full h-full" />
          ) : (
            <div className="w-full h-full border border-brand-accent/15" style={{ backgroundColor: "#efede8" }} />
          )}
        </div>
      </div>
    </section>
  );
};

const GalleryMasonryTile = ({ size, index, src, onClick }) => (
  <div
    className={`w-full sm:w-[280px] shrink-0 ${GALLERY_TILE_HEIGHT[size]} overflow-hidden break-inside-avoid rounded-none transition-transform duration-500 ease-out hover:scale-[1.02] cursor-pointer`}
    style={!src ? { backgroundColor: "#efede8", border: "1px solid rgba(194,184,163,0.15)" } : {}}
    onClick={() => onClick && onClick(index)}
  >
    {src && (
      <LazyImage
        src={src}
        alt={`Gallery image ${index + 1}`}
        className="w-full h-full"
      />
    )}
  </div>
);

const patternToColumns = (pattern, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => []);
  const rowCount = Math.ceil(pattern.length / columnCount);

  for (let c = 0; c < columnCount; c++) {
    for (let r = 0; r < rowCount; r++) {
      const idx = r * columnCount + c;
      if (idx < pattern.length) {
        columns[c].push({ size: pattern[idx].size, src: pattern[idx].src, index: idx });
      }
    }
  }

  return columns;
};

const MasonryColumn = ({ tiles, onImageClick }) => (
  <div className="flex flex-col gap-[20px] w-full sm:w-[280px]">
    {tiles.map(({ size, src, index }) => (
      <GalleryMasonryTile key={index} size={size} src={src} index={index} onClick={onImageClick} />
    ))}
  </div>
);

const ScrollGalleryMasonry = ({ pattern, onImageClick }) => {
  const columns4 = patternToColumns(pattern, 4);
  const columns2 = [
    [...columns4[0], ...columns4[1]],
    [...columns4[2], ...columns4[3]],
  ];

  return (
    <section className="w-full px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
      {/* Desktop — 4 columns */}
      <div className="hidden lg:flex gap-[20px] max-w-[1180px] mx-auto justify-center items-end">
        {columns4.map((col, colIdx) => (
          <MasonryColumn key={colIdx} tiles={col} onImageClick={onImageClick} />
        ))}
      </div>

      {/* Tablet — 2 columns */}
      <div className="hidden md:flex lg:hidden gap-[20px] max-w-[1180px] mx-auto justify-center items-end">
        {columns2.map((col, colIdx) => (
          <MasonryColumn key={colIdx} tiles={col} onImageClick={onImageClick} />
        ))}
      </div>

      {/* Mobile — 2 columns, fluid width */}
      <div className="grid md:hidden grid-cols-2 gap-[12px] w-full max-w-[600px] mx-auto">
        {pattern.map(({ size, src }, index) => (
          <GalleryMasonryTile key={index} size={size} src={src} index={index} onClick={onImageClick} />
        ))}
      </div>
    </section>
  );
};

const LandscapeCarouselGallery = ({ pattern, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const viewportRef = useRef(null);
  const mobileViewportRef = useRef(null);
  const touchStartRef = useRef(null);

  // Group pattern (12 items) into 11 shifting overlapping pairs for desktop
  const pairs = [];
  for (let i = 0; i < pattern.length - 1; i++) {
    pairs.push([pattern[i], pattern[i + 1]]);
  }

  const nextSlide = () => {
    if (currentIndex < pairs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextMobileSlide = () => {
    if (mobileIndex < pattern.length - 1) {
      setMobileIndex((prev) => prev + 1);
    }
  };

  const prevMobileSlide = () => {
    if (mobileIndex > 0) {
      setMobileIndex((prev) => prev - 1);
    }
  };

  // Desktop Swipe Bindings
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current) return;

      const deltaX = touchStartRef.current.x - e.changedTouches[0].clientX;
      const deltaY = touchStartRef.current.y - e.changedTouches[0].clientY;

      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      touchStartRef.current = null;
    };

    viewport.addEventListener("touchstart", handleTouchStart, { passive: true });
    viewport.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      viewport.removeEventListener("touchstart", handleTouchStart);
      viewport.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, pairs.length]);

  // Mobile Swipe Bindings
  useEffect(() => {
    const viewport = mobileViewportRef.current;
    if (!viewport) return;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current) return;

      const deltaX = touchStartRef.current.x - e.changedTouches[0].clientX;
      const deltaY = touchStartRef.current.y - e.changedTouches[0].clientY;

      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          nextMobileSlide();
        } else {
          prevMobileSlide();
        }
      }
      touchStartRef.current = null;
    };

    viewport.addEventListener("touchstart", handleTouchStart, { passive: true });
    viewport.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      viewport.removeEventListener("touchstart", handleTouchStart);
      viewport.removeEventListener("touchend", handleTouchEnd);
    };
  }, [mobileIndex, pattern.length]);

  return (
    <section className="w-full px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 max-w-[1180px] mx-auto select-none">
      {/* 1. Desktop & Tablet Carousel Layout (widths >= 768px) - UNCHANGED */}
      <div className="hidden md:flex items-center justify-between gap-4 md:gap-8">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-2 text-brand-text disabled:opacity-20 hover:text-brand-accent transition-colors duration-300 disabled:pointer-events-none"
          aria-label="Previous image pair"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>

        {/* Viewport */}
        <div ref={viewportRef} className="flex-grow overflow-hidden touch-pan-y">
          <div
            className="flex gap-[24px]"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% + 24px)))`,
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {pairs.map((pair, pIdx) => (
              <div
                key={pIdx}
                className="w-full shrink-0 flex items-center justify-center gap-[12px]"
              >
                {/* Left image container */}
                <div
                  className="bg-[#efede8] aspect-[3/2] rounded-none shrink-0 overflow-hidden relative cursor-pointer"
                  style={{
                    width: "calc(100% / 1.9 - 6px)",
                  }}
                  onClick={() => onImageClick && onImageClick(pIdx)}
                >
                  {pair[0]?.src && (
                    <LazyImage
                      src={pair[0].src}
                      alt={`Gallery image ${pIdx + 1}`}
                      className="w-full h-full object-cover"
                      onClick={() => onImageClick && onImageClick(pIdx)}
                    />
                  )}
                </div>
                {/* Right image container */}
                <div
                  className="bg-[#efede8] aspect-[3/2] rounded-none shrink-0 overflow-hidden relative cursor-pointer"
                  style={{
                    width: "calc((100% / 1.9 - 6px) * 0.9)",
                  }}
                  onClick={() => onImageClick && onImageClick(pIdx + 1)}
                >
                  {pair[1]?.src && (
                    <LazyImage
                      src={pair[1].src}
                      alt={`Gallery image ${pIdx + 2}`}
                      className="w-full h-full object-cover"
                      onClick={() => onImageClick && onImageClick(pIdx + 1)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === pairs.length - 1}
          className="p-2 text-brand-text disabled:opacity-20 hover:text-brand-accent transition-colors duration-300 disabled:pointer-events-none"
          aria-label="Next image pair"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Desktop Dots Indicator */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 mt-8">
        {Array.from({ length: pairs.length }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-brand-accent w-4 scale-110"
                : "bg-brand-accent/35 hover:bg-brand-accent/60"
            }`}
            aria-label={`Go to slide pair ${idx + 1}`}
          />
        ))}
      </div>

      {/* 2. Optimised Mobile Carousel Layout (widths < 768px) - SINGLE-IMAGE PORT/VIEW */}
      <div className="flex md:hidden flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          {/* Mobile Left Arrow */}
          <button
            onClick={prevMobileSlide}
            disabled={mobileIndex === 0}
            className="p-1 text-brand-text disabled:opacity-10 active:text-brand-accent transition-colors duration-300 disabled:pointer-events-none"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          {/* Mobile Viewport */}
          <div ref={mobileViewportRef} className="flex-grow overflow-hidden touch-pan-y">
            <div
              className="flex gap-[16px]"
              style={{
                transform: `translateX(calc(-${mobileIndex} * (100% + 16px)))`,
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {pattern.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 bg-[#efede8] aspect-[3/2] rounded-none overflow-hidden relative cursor-pointer active:scale-[0.99] transition-transform duration-300"
                  onClick={() => onImageClick && onImageClick(idx)}
                >
                  {item.src && (
                    <LazyImage
                      src={item.src}
                      alt={`Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onClick={() => onImageClick && onImageClick(idx)}
                    />
                  )}
                  {/* Subtle Swipe Guide & Tap to Expand Indicator */}
                  <div className="absolute inset-0 bg-black/10 flex items-end p-3 opacity-0 active:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="font-sans text-[8px] uppercase tracking-widest text-white/90">
                      Tap to open viewfinder
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Right Arrow */}
          <button
            onClick={nextMobileSlide}
            disabled={mobileIndex === pattern.length - 1}
            className="p-1 text-brand-text disabled:opacity-10 active:text-brand-accent transition-colors duration-300 disabled:pointer-events-none"
            aria-label="Next image"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Page/Dots Indicator & Swipe lock guide */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex flex-wrap justify-center gap-2 max-w-[80vw]">
            {pattern.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  mobileIndex === idx
                    ? "bg-brand-accent w-3 scale-110"
                    : "bg-brand-accent/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="font-sans text-[7px] tracking-mega text-brand-accent/60 uppercase">
            {mobileIndex + 1} / {pattern.length} — Swipe or tap image to expand
          </span>
        </div>
      </div>
    </section>
  );
};

export const CategoryGallery = ({ categoryId = "portraits" }) => {
  const gallery = galleryByCategory[categoryId];
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!gallery) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center p-6 text-center">
          <h1 className="font-serif text-3xl font-light mb-4">Gallery not found</h1>
          <Link to="/portfolio" className="font-sans text-2xs tracking-widest uppercase text-brand-accent">
            Back to portfolio
          </Link>
        </div>
      </PageTransition>
    );
  }

  const scrollPattern = gallery.scrollPattern ?? [];
  const LANDSCAPE_SLUGS = ["wildlife-and-landscape", "drone-photography"];

  // Map scrollPattern images into the formats required by Lightbox component
  const mappedImages = scrollPattern.map((item, idx) => {
    // Infer aspect ratio from size or use item's aspect property if available
    let aspectRatio = undefined;
    if (item.aspect) {
      aspectRatio = item.aspect;
    } else if (item.size === "S") {
      // Small items are typically landscape
      aspectRatio = "landscape";
    } else if (item.size === "L") {
      // Large items are often portrait or tall
      aspectRatio = "portrait";
    }
    
    return {
      id: `${gallery.slug}-img-${idx}`,
      url: item.src,
      aspectRatio,
      caption: `${gallery.displayTitle} — Shot ${idx + 1}`,
    };
  });

  const handlePrevImage = () => {
    if (!lightboxImage) return;
    const currentImgIdx = mappedImages.findIndex((img) => img.id === lightboxImage.id);
    const prevIdx = currentImgIdx > 0 ? currentImgIdx - 1 : mappedImages.length - 1;
    setLightboxImage(mappedImages[prevIdx]);
  };

  const handleNextImage = () => {
    if (!lightboxImage) return;
    const currentImgIdx = mappedImages.findIndex((img) => img.id === lightboxImage.id);
    const nextIdx = currentImgIdx < mappedImages.length - 1 ? currentImgIdx + 1 : 0;
    setLightboxImage(mappedImages[nextIdx]);
  };

  return (
    <PageTransition>
      <article className="bg-brand-bg text-brand-text min-h-screen overflow-x-hidden">
        <IntroMasonry gallery={gallery} />

        {LANDSCAPE_SLUGS.includes(gallery.slug) ? (
          <LandscapeCarouselGallery 
            pattern={scrollPattern} 
            onImageClick={(idx) => setLightboxImage(mappedImages[idx])} 
          />
        ) : (
          <ScrollGalleryMasonry pattern={scrollPattern} onImageClick={(idx) => setLightboxImage(mappedImages[idx])} />
        )}

        {/* Lightbox support for premium immersive view */}
        {lightboxImage && (
          <Lightbox
            images={mappedImages}
            activeImage={lightboxImage}
            onClose={() => setLightboxImage(null)}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
        )}
      </article>
    </PageTransition>
  );
};

export default CategoryGallery;
