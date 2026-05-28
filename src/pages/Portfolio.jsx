import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";
import LazyImage from "../components/LazyImage";

const CATEGORIES = [
  { id: "portraits",      title: "Portraits",            exp: "01", offset: "",       staggerOffset: "",      image: "/optimised/DSC_3094.webp" },
  { id: "fashion",        title: "Fashion",              exp: "02", offset: "100px",  staggerOffset: "",      image: "/optimised/DSC08097 (1).webp" },
  { id: "social-events",  title: "Social Events",        exp: "03", offset: "",       staggerOffset: "" },
  { id: "corporate",      title: "Corporate Events",     exp: "04", offset: "100px",  staggerOffset: "",      image: "/optimised/DSC08857.webp" },
  { id: "family-sessions",title: "Family Sessions",      exp: "05", offset: "",       staggerOffset: "" },
  { id: "weddings",       title: "Weddings",             exp: "06", offset: "-100px", staggerOffset: "110px", image: "/optimised/DSC_2529.webp" },
  { id: "product",        title: "Product",              exp: "07", offset: "",       staggerOffset: "110px", image: "/optimised/_901141.webp" },
  { id: "landscape",      title: "Wildlife & Landscape", exp: "08", offset: "-100px", staggerOffset: "110px", image: "/optimised/DSC_4043 (1).webp" },
  { id: "real-estate",    title: "Real Estate",          exp: "09", offset: "",       staggerOffset: "110px", image: "/optimised/DSC_1208.webp" },
  { id: "drone",          title: "Drone Photography",    exp: "10", offset: "-100px", staggerOffset: "110px", image: "/optimised/DJI_0247 (1).webp" },
];

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isDesktop;
};

const CategoryCard = ({ category }) => {
  const [isDesktop, setIsDesktop] = React.useState(() => window.innerWidth >= 1024);
  
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Only apply offset on desktop (1024px+)
  const marginTop = isDesktop
    ? category.offset
      ? `calc(${category.staggerOffset || "0px"} + ${category.offset})`
      : category.staggerOffset || undefined
    : undefined;

  return (
    <article className="flex flex-col w-full items-center md:items-start" style={{ marginTop }}>
      <Link
        to={`/portfolio/${category.id}`}
        className="block overflow-hidden active:opacity-90 w-full"
        aria-label={`View ${category.title} portfolio`}
      >
        <div className="w-full h-[280px] sm:h-[320px] md:h-[280px] overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02]">
          {category.image ? (
            <LazyImage src={category.image} alt={category.title} className="w-full h-full" />
          ) : (
            <ViewfinderContainer
              aspectRatio="w-full h-full"
              label={`SKY // ${category.title.toUpperCase()}`}
              technicalInfo={`EXP.${category.exp} // 50mm F/2`}
              className="!aspect-auto w-full h-full"
            />
          )}
        </div>
      </Link>
      <h2 className="mt-3 md:mt-4">
        <Link
          to={`/portfolio/${category.id}`}
          className="font-sans text-[10px] sm:text-xs md:text-xs tracking-[0.18em] uppercase text-brand-text hover:text-brand-accent transition-colors duration-300"
        >
          {category.title}
        </Link>
      </h2>
    </article>
  );
};

export const Portfolio = () => {
  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen overflow-x-hidden">
        <section className="pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-36 md:pb-12 lg:pt-40 lg:pb-14 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
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
            dive deeper into my works
          </motion.p>
        </section>

        <section className="relative pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Background block — desktop only */}
          <div
            className="hidden lg:block absolute left-0 w-full bottom-0"
            style={{ backgroundColor: "#bfc9c0", top: "210px" }}
          />
          <div className="relative max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 auto-rows-max">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
