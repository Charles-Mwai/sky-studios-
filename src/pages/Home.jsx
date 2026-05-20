import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";

/** Featured work placeholders — 5-up masonry (Esther home layout) */
const featuredWorks = [
  {
    title: "Lorem ipsum dolor sit amet",
    type: "Lorem ipsum",
    to: "/portfolio/corporate",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    technicalInfo: "EXP.01 // 50mm F/2",
  },
  {
    title: "Consectetur adipiscing elit",
    type: "Lorem ipsum",
    to: "/portfolio/portraits",
    aspectRatio: "aspect-[9/18] md:aspect-[9/19]",
    aspectRatioMobile: "aspect-[4/5]",
    technicalInfo: "EXP.02 // 85mm F/1.4",
  },
  {
    title: "Sed do eiusmod tempor",
    type: "Lorem ipsum",
    to: "/portfolio/fashion",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    technicalInfo: "EXP.03 // 35mm F/1.8",
  },
  {
    title: "Incididunt ut labore et dolore",
    type: "Lorem ipsum",
    to: "/portfolio/product",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    technicalInfo: "EXP.04 // 24mm F/4",
  },
  {
    title: "Magna aliqua ut enim ad minim",
    type: "Lorem ipsum",
    to: "/portfolio/portraits",
    aspectRatio: "aspect-[7/9]",
    aspectRatioMobile: "aspect-[7/9]",
    technicalInfo: "EXP.05 // 90mm F/2.8",
  },
];

const FeaturedTile = ({ work, isMobile = false }) => (
  <div className="flex flex-col gap-2 sm:gap-2">
    <Link
      to={work.to}
      className="block active:opacity-90"
      aria-label={work.title}
    >
      <ViewfinderContainer
        aspectRatio={
          isMobile ? work.aspectRatioMobile : work.aspectRatio
        }
        label={`SKY // ${work.title.substring(0, 28)}`}
        technicalInfo={work.technicalInfo}
      />
    </Link>
    <div className="text-center md:text-left px-0.5">
      <h4 className="font-serif text-base sm:text-xl md:text-2xl font-light text-brand-text leading-snug text-balance">
        <Link
          to={work.to}
          className="inline-block py-1 hover:text-brand-accent transition-colors duration-300"
        >
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
          </div>
        </section>

        {/* Featured work — mobile: top-to-bottom order; desktop: 3-column masonry */}
        <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-5 md:px-8 max-w-8xl mx-auto">
          <div className="flex flex-col gap-5 md:hidden">
            {featuredWorks.map((work) => (
              <FeaturedTile key={work.to + work.title} work={work} isMobile />
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-2 md:gap-2.5 lg:gap-3">
            <div className="flex flex-col gap-2 md:gap-2.5">
              <FeaturedTile work={colLeftTop} />
              <FeaturedTile work={colLeftBottom} />
            </div>
            <div className="flex flex-col justify-center">
              <FeaturedTile work={colCenter} />
            </div>
            <div className="flex flex-col gap-2 md:gap-2.5">
              <FeaturedTile work={colRightTop} />
              <FeaturedTile work={colRightBottom} />
            </div>
          </div>
        </section>

        {/* Welcome / bio */}
        <section className="py-10 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            <div className="bg-brand-details/80 border border-brand-accent/15 rounded-[2px] p-5 sm:p-8 md:p-10 lg:p-14 flex flex-col gap-4 sm:gap-5 md:gap-6 order-2 lg:order-1 text-center lg:text-left">
              <span className="font-sans text-[9px] sm:text-[10px] tracking-mega uppercase text-brand-accent">
                Helping brands since 2019
              </span>
              <h2 className="font-serif text-[1.4rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-light text-brand-text leading-tight text-balance">
                Welcome to Sky Studios Photography
              </h2>
              <p className="font-sans text-[13px] sm:text-sm text-brand-muted leading-relaxed font-light text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>

            <div className="flex justify-center items-center order-1 lg:order-2 px-2 sm:px-8 lg:px-4">
              <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] aspect-[2/3] overflow-hidden rounded-full border border-brand-accent/30 p-1.5 sm:p-2 bg-brand-bg shadow-sm">
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
