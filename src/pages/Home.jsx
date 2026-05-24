import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";
import LazyImage from "../components/LazyImage";

/** Featured work placeholders — 5-up masonry (Esther home layout) */
const featuredWorks = [
  {
    title: "Weddings",
    to: "/portfolio/weddings",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    imageSrc: "/optimised/DSC05913.webp",
  },
  {
    title: "Potraits",
    to: "/portfolio/portraits",
    aspectRatio: "aspect-[9/18] md:aspect-[9/19]",
    aspectRatioMobile: "aspect-[4/5]",
    imageSrc: "/optimised/DSC_2052.webp",
  },
  {
    title: "Product",
    to: "/portfolio/product",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    imageSrc: "/optimised/_MG_8910.webp",
  },
  {
    title: "Fashion",
    to: "/portfolio/fashion",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    imageSrc: "/optimised/DSC07929 (1).webp",
  },
  {
    title: "Real Estate",
    to: "/portfolio/real-estate",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    imageSrc: "/optimised/DSC_1191.webp",
  },
];

const FeaturedTile = ({ work, isMobile = false, width, height }) => (
  <div className="flex flex-col gap-2">
    <Link to={work.to} className="block active:opacity-90" aria-label={work.title}>
      <div
        className="overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.02]"
        style={isMobile ? { width: "100%", aspectRatio: "7/9" } : { width, height }}
      >
        <LazyImage src={work.imageSrc} alt={work.title} className="w-full h-full" />
      </div>
    </Link>
    <div className="text-center md:text-left px-0.5">
      <h4 className="font-serif text-base sm:text-xl md:text-2xl font-light text-brand-text leading-snug text-balance">
        <Link to={work.to} className="inline-block py-1 hover:text-brand-accent transition-colors duration-300">
          {work.title}
        </Link>
      </h4>
      <h5 className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-brand-accent mt-0.5">
        {work.type}
      </h5>
    </div>
  </div>
);

export const Home = () => {
  const [colLeftTop, colCenter, colRightTop, colLeftBottom, colRightBottom] =
    featuredWorks;

  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen overflow-x-hidden">
        {/* Hero */}
        <section className="pt-24 pb-10 sm:pt-32 sm:pb-14 md:pt-40 md:pb-16 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-mega uppercase text-brand-accent mb-2 sm:mb-3 block max-w-[90vw] text-balance"
            >
              Commercial & Editorial Photography
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[1.75rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-text max-w-[min(100%,20rem)] sm:max-w-3xl text-balance px-1"
            >
              Subtle Beauty, Bold Impact
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8"
            >
              <Link
                to="/portfolio"
                className="font-sans text-[10px] sm:text-xs tracking-widest uppercase border border-brand-text/40 px-6 py-3 text-brand-text hover:bg-brand-dark hover:text-brand-bg hover:border-brand-dark transition-all duration-500 ease-cinematic inline-flex items-center justify-center min-h-[44px]"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Featured work — mobile: top-to-bottom order; desktop: 3-column masonry */}
        <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-5 md:px-8 max-w-8xl mx-auto">
          <div className="flex flex-col gap-5 md:hidden">
            {featuredWorks.map((work) => (
              <FeaturedTile key={work.to + work.title} work={work} isMobile />
            ))}
          </div>

          <div className="hidden md:flex flex-row items-start justify-center gap-3 lg:gap-4">
            {/* Left column */}
            <div className="flex flex-col">
              <FeaturedTile work={colLeftTop}    width="330px" height="315px" />
              <div style={{ marginTop: "56px" }}>
                <FeaturedTile work={colLeftBottom} width="330px" height="315px" />
              </div>
            </div>
            {/* Center column */}
            <div>
              <FeaturedTile work={colCenter} width="470px" height="750px" />
            </div>
            {/* Right column */}
            <div className="flex flex-col">
              <FeaturedTile work={colRightTop}    width="330px" height="315px" />
              <div style={{ marginTop: "56px" }}>
                <FeaturedTile work={colRightBottom} width="330px" height="315px" />
              </div>
            </div>
          </div>
        </section>

        {/* Welcome / bio */}
        <section className="py-10 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            <div
              className="border border-brand-accent/15 rounded-[2px] p-6 sm:p-10 md:p-12 flex flex-col gap-4 sm:gap-5 order-2 lg:order-1 items-start justify-center w-full lg:w-[570px] lg:h-[655px]"
              style={{ backgroundColor: "#bfc9c0" }}
            >
              <span className="font-sans text-[9px] sm:text-[10px] tracking-mega uppercase text-brand-accent text-left">
                Helping brands since 2019
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-light text-brand-text leading-tight text-left">
                Welcome to Sky Studios Photography
              </h2>
              <p className="font-sans text-[13px] sm:text-sm text-brand-muted leading-relaxed font-light text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>

            <div className="flex justify-center items-center order-1 lg:order-2">
              <div
                className="overflow-hidden rounded-full border border-brand-accent/30 p-1.5 sm:p-2 bg-brand-bg shadow-sm w-full max-w-[320px] sm:max-w-[420px] lg:w-[570px] lg:max-w-none"
                style={{ aspectRatio: "570 / 655" }}
              >
                <ViewfinderContainer
                  aspectRatio="aspect-[2/3]"
                  shape="pill"
                  label="SKY // PORTRAIT BIOGRAPHY"
                  technicalInfo="85mm F/1.2"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Link directory */}
        <section className="py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto border-t border-brand-accent/25">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8 py-2 sm:py-4">
            <div className="flex flex-col items-center text-center gap-2 py-5 sm:py-0 border-b border-brand-accent/15 sm:border-b-0">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-brand-text">
                Portfolio
              </h2>
              <Link
                to="/portfolio"
                className="font-sans text-[10px] sm:text-[10px] tracking-widest uppercase text-brand-accent hover:text-brand-text transition-colors duration-300 py-2 px-3 min-h-[44px] inline-flex items-center justify-center"
              >
                View My Recent Work
              </Link>
            </div>

            <div className="flex flex-col items-center text-center gap-2 py-5 sm:py-0 sm:border-l sm:border-brand-accent/20 sm:pl-8">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-brand-text">
                Contact Me
              </h2>
              <Link
                to="/contact"
                className="font-sans text-[10px] sm:text-[10px] tracking-widest uppercase text-brand-accent hover:text-brand-text transition-colors duration-300 py-2 px-3 min-h-[44px] inline-flex items-center justify-center"
              >
                Send me a message
              </Link>
            </div>
          </div>
        </section>

        {/* Closing statement */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 text-center border-t border-brand-accent/20">
          <h2 className="font-serif text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-text leading-snug sm:leading-tight text-balance max-w-[17rem] sm:max-w-2xl md:max-w-4xl mx-auto">
            Let&apos;s create photos that speak softly
          </h2>
          <h2 className="font-serif text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-brand-text leading-snug sm:leading-tight text-balance max-w-[17rem] sm:max-w-2xl md:max-w-4xl mx-auto mt-1 sm:mt-2">
            with power
          </h2>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
