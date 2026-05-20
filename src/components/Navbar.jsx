import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { portfolioCategories } from "../data/portfolioData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll logic for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
        staggerChildren: 0.05
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.07
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 15 },
    opened: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-cinematic ${
          isScrolled
            ? "py-3 bg-brand-bg/95 backdrop-blur-md border-b border-brand-accent/20 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group flex flex-col select-none">
            <span className="font-serif text-xl sm:text-2xl tracking-mega uppercase font-light text-brand-text group-hover:text-brand-accent transition-colors duration-300">
              Sky Studios
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              to="/"
              className={`font-sans text-2xs sm:text-xs tracking-widest uppercase transition-colors duration-300 relative py-1 ${
                location.pathname === "/"
                  ? "text-brand-accent font-medium"
                  : "text-brand-text/80 hover:text-brand-text"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`font-sans text-2xs sm:text-xs tracking-widest uppercase transition-colors duration-300 relative py-1 ${
                location.pathname === "/about"
                  ? "text-brand-accent font-medium"
                  : "text-brand-text/80 hover:text-brand-text"
              }`}
            >
              About
            </Link>
            
            {/* Portfolio Dropdown */}
            <div className="relative group/nav py-1">
              <Link
                to="/portfolio"
                className={`font-sans text-2xs sm:text-xs tracking-widest uppercase transition-colors duration-300 flex items-center gap-1 ${
                  location.pathname.startsWith("/portfolio")
                    ? "text-brand-accent font-medium"
                    : "text-brand-text/80 hover:text-brand-text"
                }`}
              >
                Portfolio <ChevronDown size={10} className="mt-0.5" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 ease-cinematic p-2 bg-brand-bg border border-brand-accent/20 rounded-[2px] shadow-md flex flex-col gap-1">
                <Link
                  to="/portfolio"
                  className="font-sans text-[10px] tracking-widest uppercase px-3 py-2 text-brand-text/75 hover:bg-brand-details hover:text-brand-text transition-all duration-200 border-b border-brand-accent/15 mb-1"
                >
                   
                </Link>
                {portfolioCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/portfolio/${cat.id}`}
                    className="font-sans text-[10px] tracking-widest uppercase px-3 py-2 text-brand-text/75 hover:bg-brand-details hover:text-brand-text transition-all duration-200"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`font-sans text-2xs sm:text-xs tracking-widest uppercase transition-colors duration-300 relative py-1 ${
                location.pathname === "/contact"
                  ? "text-brand-accent font-medium"
                  : "text-brand-text/80 hover:text-brand-text"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Call for Bookings & Mobile Hamburger */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="hidden sm:flex items-center border border-brand-accent/40 px-4 py-1.5 sm:px-5 sm:py-2 font-sans text-[9px] sm:text-[10px] tracking-widest uppercase rounded-[2px] text-brand-text hover:bg-brand-dark hover:text-brand-bg hover:border-brand-dark transition-all duration-500 ease-cinematic"
            >
              Get in touch
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex items-center justify-center p-2 rounded-full text-brand-text hover:bg-brand-details transition-all duration-300"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col md:flex-row bg-brand-dark text-brand-bg overflow-y-auto"
          >
            {/* Main Links */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-20 py-24 md:py-12 border-b md:border-b-0 md:border-r border-brand-accent/10">
              <span className="font-sans text-[8px] sm:text-[10px] tracking-mega uppercase text-brand-accent mb-6 block opacity-60">
                Navigation
              </span>
              <div className="flex flex-col gap-5 sm:gap-7">
                <motion.div variants={itemVariants}>
                  <Link
                    to="/"
                    className="font-serif text-3xl sm:text-5xl italic hover:text-brand-accent transition-colors duration-300"
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="/portfolio"
                    className="font-serif text-3xl sm:text-5xl italic hover:text-brand-accent transition-colors duration-300"
                  >
                    Portfolio
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="/about"
                    className="font-serif text-3xl sm:text-5xl italic hover:text-brand-accent transition-colors duration-300"
                  >
                    About Story
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link
                    to="/contact"
                    className="font-serif text-3xl sm:text-5xl italic hover:text-brand-accent transition-colors duration-300"
                  >
                    Contact & Bookings
                  </Link>
                </motion.div>
              </div>

              {/* Bottom Copyright */}
              <div className="mt-16 md:mt-24">
                <span className="font-serif text-base sm:text-lg tracking-widest text-brand-bg select-none block">
                  Sky Studios
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-brand-accent/50 block mt-1">
                  © 2026 Sky Studios. All rights reserved.
                </span>
              </div>
            </div>

            {/* Categories Menu */}
            <div className="w-full md:w-1/3 bg-[#171717] px-6 sm:px-12 py-12 md:py-24 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <span className="font-sans text-[8px] sm:text-[10px] tracking-mega uppercase text-brand-accent opacity-60">
                  Categories
                </span>
                <nav className="flex flex-col gap-2 sm:gap-3">
                  {portfolioCategories.map((cat, idx) => (
                    <motion.div key={cat.id} variants={itemVariants}>
                      <Link
                        to={`/portfolio/${cat.id}`}
                        className="font-sans text-[11px] sm:text-xs tracking-widest uppercase text-brand-bg/75 hover:text-brand-accent transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="text-[9px] opacity-40">0{idx + 1}.</span>
                        <span>{cat.title}</span>
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="mt-12 pt-6 border-t border-brand-accent/10">
                <Link
                  to="/contact"
                  className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-brand-bg border border-brand-accent/30 px-4 py-2 hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 rounded-[2px] inline-block"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
