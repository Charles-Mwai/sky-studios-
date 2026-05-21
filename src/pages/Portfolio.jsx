import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";

const CATEGORIES = [
  { id: "portraits",    title: "Portraits",            exp: "01", offset: "",       staggerOffset: "" },
  { id: "fashion",      title: "Fashion",              exp: "02", offset: "100px",  staggerOffset: "" },
  { id: "weddings",     title: "Weddings",             exp: "03", offset: "",       staggerOffset: "" },
  { id: "corporate",    title: "Corporate Events",     exp: "04", offset: "100px",  staggerOffset: "" },
  { id: "product",      title: "Product",              exp: "05", offset: "-100px", staggerOffset: "110px" },
  { id: "landscape",    title: "Wildlife & Landscape", exp: "06", offset: "",       staggerOffset: "110px" },
  { id: "real-estate",  title: "Real Estate",          exp: "07", offset: "-100px", staggerOffset: "110px" },
  { id: "drone",        title: "Drone Photography",    exp: "08", offset: "",       staggerOffset: "110px" },
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
  const isDesktop = useIsDesktop();

  const marginTop = isDesktop
    ? category.offset
      ? `calc(${category.staggerOffset || "0px"} + ${category.offset})`
      : category.staggerOffset || undefined
    : undefined;

  return (
    <article className="flex flex-col w-full items-center md:items-start md:w-auto" style={{ marginTop }}>
      <Link
        to={`/portfolio/${category.id}`}
        className="block overflow-hidden active:opacity-90 w-full max-w-[280px] md:w-[280px]"
        aria-label={`View ${category.title} portfolio`}
      >
        <div className="w-full max-w-[280px] md:w-[280px] h-[360px] sm:h-[420px] overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02]">
          <ViewfinderContainer
            aspectRatio="w-full h-full"
            label={`SKY // ${category.title.toUpperCase()}`}
            technicalInfo={`EXP.${category.exp} // 50mm F/2`}
            className="!aspect-auto w-full h-full"
          />
        </div>
      </Link>
      <h2 className="mt-4">
        <Link
          to={`/portfolio/${category.id}`}
          className="font-sans text-sm tracking-[0.18em] uppercase text-brand-text hover:text-brand-accent transition-colors duration-300"
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
            dive deeper into my works
          </motion.p>
        </section>

        <section className="relative pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 md:px-12">
          {/* Background block — desktop only */}
          <div
            className="hidden md:block absolute left-0 w-full bottom-0"
            style={{ backgroundColor: "#e8cdac", top: "210px" }}
          />
          <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[140px] gap-y-10 sm:gap-y-12 md:gap-y-[90px] justify-items-center">
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
