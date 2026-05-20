import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import GalleryPlaceholder from "../components/GalleryPlaceholder";
import { galleryByCategory } from "../data/galleryLayouts";

/** Intro masonry — header measurements (px) */
const INTRO_MASONRY = {
  image1: { width: 326, height: 461 },
  title: { width: 375, height: 682 },
  image2: { width: 332, height: 241 },
};

/** Gallery scroll — L = 280×420, S = 280×185 */
const GALLERY_TILE_HEIGHT = {
  L: "h-[420px]",
  S: "h-[185px]",
};

const IntroMasonry = ({ gallery }) => {
  const { image1: s1, title: sTitle, image2: s2 } = INTRO_MASONRY;

  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 px-4 sm:px-6">
      <div
        className="hidden sm:flex flex-row items-end justify-center gap-3 md:gap-4 mx-auto"
        style={{ maxWidth: s1.width + sTitle.width + s2.width + 32 }}
      >
        <GalleryPlaceholder width={s1.width} height={s1.height} />
        <div
          className="shrink-0 flex flex-col items-center justify-center text-center px-6 bg-brand-details/60 border border-brand-accent/15"
          style={{ width: sTitle.width, height: sTitle.height }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-text leading-tight text-balance">
            {gallery.displayTitle}
          </h2>
          <p className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-brand-accent mt-5">
            {gallery.scrollLabel}
          </p>
        </div>
        <GalleryPlaceholder width={s2.width} height={s2.height} />
      </div>

      <div className="flex sm:hidden flex-col items-center gap-3 w-full max-w-[375px] mx-auto">
        <GalleryPlaceholder width={s1.width} height={s1.height} fullWidth />
        <div
          className="w-full flex flex-col items-center justify-center text-center px-5 py-10 bg-brand-details/60 border border-brand-accent/15"
          style={{ aspectRatio: `${sTitle.width} / ${sTitle.height}` }}
        >
          <h2 className="font-serif text-2xl font-light text-brand-text leading-tight text-balance">
            {gallery.displayTitle}
          </h2>
          <p className="font-sans text-[9px] tracking-widest uppercase text-brand-accent mt-4">
            {gallery.scrollLabel}
          </p>
        </div>
        <GalleryPlaceholder width={s2.width} height={s2.height} fullWidth />
      </div>
    </section>
  );
};

const GalleryMasonryTile = ({ size, index }) => (
  <div
    className={`w-[280px] max-w-full shrink-0 ${GALLERY_TILE_HEIGHT[size]} overflow-hidden break-inside-avoid rounded-none transition-transform duration-500 ease-out hover:scale-[1.02]`}
  >
    <div
      className="w-full h-full bg-brand-details/70 border border-brand-accent/15 object-cover"
      role="img"
      aria-label={`Gallery image ${index + 1}`}
    />
  </div>
);

/** Row-major pattern → vertical columns (uniform column bottoms, no row gap holes) */
const patternToColumns = (pattern, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => []);
  const rowCount = Math.ceil(pattern.length / columnCount);

  for (let c = 0; c < columnCount; c++) {
    for (let r = 0; r < rowCount; r++) {
      const idx = r * columnCount + c;
      if (idx < pattern.length) {
        columns[c].push({ size: pattern[idx], index: idx });
      }
    }
  }

  return columns;
};

const MasonryColumn = ({ tiles }) => (
  <div className="flex flex-col gap-[20px]">
    {tiles.map(({ size, index }) => (
      <GalleryMasonryTile key={index} size={size} index={index} />
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
      {/* Desktop — 4 columns, stacked tiles (row 3 L in cols 1 & 3 tuck under row 2) */}
      <div className="hidden lg:flex gap-[20px] max-w-[1180px] mx-auto justify-center items-end">
        {columns4.map((col, colIdx) => (
          <MasonryColumn key={colIdx} tiles={col} />
        ))}
      </div>

      {/* Tablet — 2 columns (paired stacks) */}
      <div className="hidden md:flex lg:hidden gap-[20px] max-w-[1180px] mx-auto justify-center items-end">
        {columns2.map((col, colIdx) => (
          <MasonryColumn key={colIdx} tiles={col} />
        ))}
      </div>

      {/* Mobile — single column */}
      <div className="flex md:hidden flex-col gap-[20px] max-w-[280px] mx-auto items-center">
        {pattern.map((size, index) => (
          <GalleryMasonryTile key={index} size={size} index={index} />
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
          <Link
            to="/portfolio"
            className="font-sans text-2xs tracking-widest uppercase text-brand-accent"
          >
            Back to portfolio
          </Link>
        </div>
      </PageTransition>
    );
  }

  const scrollPattern = gallery.scrollPattern ?? [];

  return (
    <PageTransition>
      <article className="bg-brand-bg text-brand-text min-h-screen overflow-x-hidden">
        <IntroMasonry gallery={gallery} />

        <ScrollGalleryMasonry pattern={scrollPattern} />

        <footer className="border-t border-brand-accent/25">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 py-10 sm:py-14 md:py-16">
              <div className="flex flex-col items-center text-center gap-2 py-6 sm:py-0 border-b border-brand-accent/15 sm:border-b-0">
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-brand-text">
                  Portfolio
                </h2>
                <Link
                  to="/portfolio"
                  className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-brand-accent hover:text-brand-text transition-colors duration-300 py-2 px-3 min-h-[44px] inline-flex items-center justify-center"
                >
                  View My Recent Work
                </Link>
              </div>

              <div className="flex flex-col items-center text-center gap-2 py-6 sm:py-0 sm:border-l sm:border-brand-accent/20 sm:pl-8">
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-brand-text">
                  Get in Touch
                </h2>
                <Link
                  to="/contact"
                  className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-brand-accent hover:text-brand-text transition-colors duration-300 py-2 px-3 min-h-[44px] inline-flex items-center justify-center"
                >
                  Send me a message
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </PageTransition>
  );
};

export default CategoryGallery;
