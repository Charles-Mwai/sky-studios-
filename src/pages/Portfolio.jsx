import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";
import { portfolioCategories } from "../data/portfolioData";

const findCategory = (id) => portfolioCategories.find((c) => c.id === id);

/** Category display config */
const CATEGORY_CONFIG = {
  portraits: { aspectRatio: "aspect-[7/9]", aspectRatioMobile: "aspect-[7/9]", exp: "01" },
  fashion: {
    aspectRatio: "aspect-[9/18] md:aspect-[9/19]",
    aspectRatioMobile: "aspect-[4/5]",
    exp: "02",
  },
  weddings: { aspectRatio: "aspect-[7/9]", aspectRatioMobile: "aspect-[7/9]", exp: "03" },
  corporate: { aspectRatio: "aspect-[7/9]", aspectRatioMobile: "aspect-[7/9]", exp: "04" },
  product: { aspectRatio: "aspect-[7/9]", aspectRatioMobile: "aspect-[7/9]", exp: "05" },
  landscape: {
    aspectRatio: "aspect-[9/18] md:aspect-[9/19]",
    aspectRatioMobile: "aspect-[4/5]",
    exp: "06",
  },
  "real-estate": { aspectRatio: "aspect-[7/9]", aspectRatioMobile: "aspect-[7/9]", exp: "07" },
  drone: { aspectRatio: "aspect-[7/9]", aspectRatioMobile: "aspect-[7/9]", exp: "08" },
};

/** Mobile: top-to-bottom reading order */
const MOBILE_ORDER = [
  "portraits",
  "fashion",
  "weddings",
  "corporate",
  "product",
  "landscape",
  "real-estate",
  "drone",
];

/** Desktop: 3-column masonry */
const MASONRY_COLUMNS = [
  { ids: ["portraits", "corporate", "product"] },
  { ids: ["fashion", "landscape"] },
  { ids: ["weddings", "real-estate", "drone"] },
];

const CategoryTile = ({ category, aspectRatio, technicalInfo }) => (
  <article className="flex flex-col gap-2 sm:gap-2 group">
    <Link
      to={`/portfolio/${category.id}`}
      className="block w-full active:opacity-90"
      aria-label={`View ${category.title} portfolio`}
    >
      <ViewfinderContainer
        aspectRatio={aspectRatio}
        label={`SKY // ${category.title.toUpperCase()}`}
        technicalInfo={technicalInfo}
        className="w-full"
      />
    </Link>
    <h2 className="text-center px-0.5">
      <Link
        to={`/portfolio/${category.id}`}
        className="inline-block py-1 font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-brand-text hover:text-brand-accent transition-colors duration-500 ease-cinematic text-balance leading-snug"
      >
        {category.title}
      </Link>
    </h2>
  </article>
);

const renderTile = (id, isMobile) => {
  const category = findCategory(id);
  const config = CATEGORY_CONFIG[id];
  if (!category || !config) return null;

  return (
    <CategoryTile
      key={category.id}
      category={category}
      aspectRatio={isMobile ? config.aspectRatioMobile : config.aspectRatio}
      technicalInfo={`EXP.${config.exp} // 50mm F/2`}
    />
  );
};

export const Portfolio = () => {
  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen overflow-x-hidden">
        <section className="pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-40 md:pb-14 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[1.75rem] leading-tight sm:text-5xl md:text-6xl font-light tracking-tight text-brand-text text-balance"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-sm sm:text-lg md:text-xl italic text-brand-muted mt-3 sm:mt-4 max-w-[min(100%,18rem)] sm:max-w-md text-balance px-1"
          >
            dive deeper into my soul works
          </motion.p>
        </section>

        <section className="pb-12 sm:pb-16 md:pb-24 px-4 sm:px-5 md:px-8 max-w-8xl mx-auto">
          {/* Mobile: sequential stack */}
          <div className="flex flex-col gap-4 md:hidden">
            {MOBILE_ORDER.map((id) => renderTile(id, true))}
          </div>

          {/* Desktop: 3-column masonry */}
          <div className="hidden md:grid md:grid-cols-3 gap-2 md:gap-2.5 lg:gap-3">
            {MASONRY_COLUMNS.map((column, colIdx) => (
              <div
                key={colIdx}
                className={`flex flex-col ${
                  colIdx === 2 ? "gap-1 md:gap-1.5" : "gap-2 md:gap-2"
                }`}
              >
                {column.ids.map((id) => renderTile(id, false))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
