import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, ExternalLink, Share2, Play } from "lucide-react";
import { portfolioCategories } from "../data/portfolioData";
import ViewfinderContainer from "./ViewfinderContainer";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-bg text-brand-text pt-16 pb-10 border-t border-brand-accent/20" role="contentinfo">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-12">
        
        {/* Instagram Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-b border-brand-accent/20 pb-4">
            <h5 className="font-serif text-sm tracking-wider uppercase text-brand-text/60">
              Follow us on Instagram
            </h5>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-serif text-base text-brand-accent hover:text-brand-text transition-colors duration-300 font-light"
            >
              @SkyStudios
            </a>
          </div>
          
          {/* Instagram Feed Grid (6 square viewfinder containers) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
            {[...Array(6)].map((_, i) => (
              <ViewfinderContainer
                key={i}
                aspectRatio="aspect-square"
                label={`SKY // INSTA.0${i + 1}`}
                technicalInfo="F/1.8 ISO 200"
                className="w-full"
              />
            ))}
          </div>
        </div>

        {/* Navigation & Info Blocks */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-6 pb-8 border-b border-brand-accent/20">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link to="/" className="group flex flex-col select-none">
              <span className="font-serif text-2xl tracking-mega uppercase font-light text-brand-text group-hover:text-brand-accent transition-colors duration-300">
                Sky Studios
              </span>
            </Link>
            <p className="font-sans text-xs text-brand-muted leading-relaxed">
              Fine art, portraiture, editorial, and commercial visual services. Celebrating subtle highlights, geometric shadows, and organic textures.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            
            {/* Primary Nav */}
            <div className="flex flex-col gap-3 min-w-[120px]">
              <span className="font-sans text-[9px] tracking-mega uppercase text-brand-accent font-semibold">
                Sitemap
              </span>
              <nav className="flex flex-col gap-2">
                <Link to="/" className="font-sans text-2xs tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors duration-200">
                  Home
                </Link>
                <Link to="/portfolio" className="font-sans text-2xs tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors duration-200">
                  Portfolio
                </Link>
                <Link to="/about" className="font-sans text-2xs tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors duration-200">
                  About Story
                </Link>
                <Link to="/contact" className="font-sans text-2xs tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors duration-200">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Categories Nav */}
            <div className="flex flex-col gap-3 min-w-[200px]">
              <span className="font-sans text-[9px] tracking-mega uppercase text-brand-accent font-semibold">
                Portfolios
              </span>
              <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
                {portfolioCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/portfolio/${cat.id}`}
                    className="font-sans text-[10px] tracking-wider uppercase text-brand-muted hover:text-brand-text transition-colors duration-200"
                  >
                    {cat.title}
                  </Link>
                ))}
              </nav>
            </div>

          </div>
        </div>

        {/* Social Links & Back To Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-text transition-all duration-300"
              aria-label="Instagram"
            >
              <ExternalLink size={14} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-text transition-all duration-300"
              aria-label="Facebook"
            >
              <Share2 size={14} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-text transition-all duration-300"
              aria-label="YouTube"
            >
              <Play size={14} />
            </a>
          </div>

          {/* Copyright */}
          <span className="font-sans text-[9px] sm:text-[10px] tracking-widest uppercase text-brand-muted/70 text-center sm:text-right">
            © 2026 Sky Studios. Built under editorial aesthetics.
          </span>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-muted hover:text-brand-text hover:border-brand-text transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
