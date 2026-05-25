import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import LazyImage from "../components/LazyImage";
import { galleryByCategory } from "../data/galleryLayouts";

/** Intro masonry — header measurements (px) */
const INTRO_MASONRY = {
  image1: { width: 326, height: 461 },
  title:  { width: 375, height: 682 },
  image2: { width: 332, height: 241 },
};

/** Gallery scroll — L = 280×420, S = 280×185 (desktop); fluid aspect on mobile */
const GALLERY_TILE_HEIGHT = {
  L: "h-[55vw] sm:h-[420px]",
  S: "h-[44vw] sm:h-[185px]",
};

const IntroMasonry = ({ gallery }) => {
  const { image1: s1, title: sTitle, image2: s2 } = INTRO_MASONRY;

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-4 sm:px-6">
      {/* Desktop */}
      <div className="hidden sm:flex flex-row items-end justify-between gap-3 md:gap-4 max-w-[1180px] mx-auto">
        <div className="self-start shrink-0 mt-[100px] md:mt-[110px]" style={{ width: s1.width, height: s1.height }}>
          {gallery.intro?.[0]?.src ? (
            <LazyImage src={gallery.intro[0].src} alt={gallery.displayTitle} className="w-full h-full" />
          ) : (
            <div className="w-full h-full border border-brand-accent/15" style={{ backgroundColor: "#efede8" }} />
          )}
        </div>
        <div
          className="shrink-0 flex flex-col items-center justify-center text-center px-6 border border-brand-accent/15"
          style={{ width: sTitle.width, height: sTitle.height, backgroundColor: "#bfc9c0" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-dark leading-tight text-balance">
            {gallery.displayTitle}
          </h2>
          <p className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-black font-bold mt-5">
            {gallery.scrollLabel}
          </p>
        </div>
        <div className="self-center shrink-0" style={{ width: s2.width, height: s2.height }}>
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

const GalleryMasonryTile = ({ size, index, src }) => (
  <div
    className={`w-full sm:w-[280px] shrink-0 ${GALLERY_TILE_HEIGHT[size]} overflow-hidden break-inside-avoid rounded-none transition-transform duration-500 ease-out hover:scale-[1.02]`}
    style={!src ? { backgroundColor: "#efede8", border: "1px solid rgba(194,184,163,0.15)" } : {}}
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

const MasonryColumn = ({ tiles }) => (
  <div className="flex flex-col gap-[20px] w-full sm:w-[280px]">
    {tiles.map(({ size, src, index }) => (
      <GalleryMasonryTile key={index} size={size} src={src} index={index} />
    ))}
  </div>
);

const ScrollGalleryMasonry = ({ pattern }) => {
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
          <MasonryColumn key={colIdx} tiles={col} />
        ))}
      </div>

      {/* Tablet — 2 columns */}
      <div className="hidden md:flex lg:hidden gap-[20px] max-w-[1180px] mx-auto justify-center items-end">
        {columns2.map((col, colIdx) => (
          <MasonryColumn key={colIdx} tiles={col} />
        ))}
      </div>

      {/* Mobile — 2 columns, fluid width */}
      <div className="grid md:hidden grid-cols-2 gap-[12px] w-full max-w-[600px] mx-auto">
        {pattern.map(({ size, src }, index) => (
          <GalleryMasonryTile key={index} size={size} src={src} index={index} />
        ))}
      </div>
    </section>
  );
};

const LandscapeCarouselGallery = ({ pattern }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewportRef = useRef(null);
  const touchStartRef = useRef(null);

  // Group pattern (12 items) into 11 shifting overlapping pairs
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

  // Mobile Swipe Bindings
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

  return (
    <section className="w-full px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 max-w-[1180px] mx-auto select-none">
      {/* Carousel Core */}
      <div className="flex items-center justify-between gap-4 md:gap-8">
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
                {/* Left image container (#efede8, sharp corners, aspect ratio 3:2) */}
                <div
                  className="bg-[#efede8] aspect-[3/2] rounded-none shrink-0 overflow-hidden relative"
                  style={{
                    width: "calc(100% / 1.9 - 6px)",
                  }}
                >
                  {pair[0]?.src && (
                    <LazyImage
                      src={pair[0].src}
                      alt={`Gallery image ${pIdx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {/* Right image container (#efede8, sharp corners, aspect ratio 3:2) */}
                <div
                  className="bg-[#efede8] aspect-[3/2] rounded-none shrink-0 overflow-hidden relative"
                  style={{
                    width: "calc((100% / 1.9 - 6px) * 0.9)",
                  }}
                >
                  {pair[1]?.src && (
                    <LazyImage
                      src={pair[1].src}
                      alt={`Gallery image ${pIdx + 2}`}
                      className="w-full h-full object-cover"
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

      {/* Dots Indicator */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
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
    </section>
  );
};

export const CategoryGallery = ({ categoryId = "portraits" }) => {
  const gallery = galleryByCategory[categoryId];

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

  return (
    <PageTransition>
      <article className="bg-brand-bg text-brand-text min-h-screen overflow-x-hidden">
        <IntroMasonry gallery={gallery} />

        {LANDSCAPE_SLUGS.includes(gallery.slug) ? (
          <LandscapeCarouselGallery pattern={scrollPattern} />
        ) : (
          <ScrollGalleryMasonry pattern={scrollPattern} />
        )}
      </article>
    </PageTransition>
  );
};

export default CategoryGallery;
