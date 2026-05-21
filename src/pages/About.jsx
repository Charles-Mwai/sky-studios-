import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Compass, Award } from "lucide-react";
import PageTransition from "../components/PageTransition";
import ViewfinderContainer from "../components/ViewfinderContainer";

export const About = () => {
  return (
    <PageTransition>
      <div className="bg-brand-bg text-brand-text min-h-screen">
        
        {/* Editorial Title Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 md:px-12 w-full border-b border-brand-accent/20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-3 block">
              Biography
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light text-brand-text mb-4">
              The Creative Force
            </h1>
            <p className="font-sans text-[10px] tracking-widest uppercase text-brand-accent italic">
              Founder — Director — Lead Visualist
            </p>
          </div>
        </section>

        {/* Main Biography Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Photographer Portrait Viewfinder (Left Column) */}
            <div className="w-full lg:w-5/12 aspect-[3/4] lg:sticky lg:top-28">
              <ViewfinderContainer
                aspectRatio="aspect-[3/4]"
                label="SKY // STUDIO PORTRAIT"
                technicalInfo="EXP.001 // 85mm F/1.2"
                className="w-full"
              />
            </div>

            {/* Detailed Biography Text & Stats (Right Column) */}
            <div className="w-full lg:w-7/12 flex flex-col justify-start">
              <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-4 block">
                Our Journey
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-brand-text mb-8 leading-tight">
                A commitment to organic highlights, quiet framing, and atmospheric depth.
              </h2>
              
              <div className="flex flex-col gap-6 font-sans text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                <p>
                  Founded in 2018, Sky Studios was established with a singular layout philosophy: to act as a silent mirror to our subjects. We believe the most striking visuals are not created in laboratories, but curated in the quiet intervals of natural ambient light. Our lens selections and processing styles are fine-tuned to capture life exactly as it breathes.
                </p>
                <p>
                  Our Director’s career began in documentary photojournalism, traveling through East Asia and Western Europe to archive remote architectural remnants. This structural foundation heavily influences our current fashion campaigns and editorial real estate portfolios. Symmetrical alignment, high contrast ratios, and brutalist clean layouts dictate our visual architecture.
                </p>
                <p>
                  Today, Sky Studios operates out of Nairobi, serving corporate innovators, avant-garde apparel designers, and private collectors. We maintain a strict boundary on client numbers to ensure each project is handled with immersive, hands-on artistry.
                </p>
              </div>

              {/* Icon Info Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-brand-accent/20">
                <div className="flex flex-col gap-2">
                  <div className="text-brand-accent flex items-center gap-2">
                    <Camera size={14} />
                    <span className="font-sans text-[9px] tracking-widest uppercase font-semibold">Medium Format</span>
                  </div>
                  <p className="font-sans text-[11px] text-brand-muted leading-relaxed">
                    We utilize Phase One and Hasselblad systems for raw, deep resolution campaigns.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-brand-accent flex items-center gap-2">
                    <Compass size={14} />
                    <span className="font-sans text-[9px] tracking-widest uppercase font-semibold">Global Dispatch</span>
                  </div>
                  <p className="font-sans text-[11px] text-brand-muted leading-relaxed">
                    Available for assignments worldwide. Fully equipped for rapid destination production.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-brand-accent flex items-center gap-2">
                    <Award size={14} />
                    <span className="font-sans text-[9px] tracking-widest uppercase font-semibold">Exhibited</span>
                  </div>
                  <p className="font-sans text-[11px] text-brand-muted leading-relaxed">
                    Featured in Kyoto Photography Festival, D&AD Exhibitions, and AD Spotlights.
                  </p>
                </div>
              </div>

              {/* Clients List */}
              <div className="mt-16">
                <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-6 block">
                  Selected Editorial Clients
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 font-sans text-2xs sm:text-xs tracking-wider text-brand-muted uppercase">
                  <span>// Vogue India</span>
                  <span>// Harper's Bazaar</span>
                  <span>// Dwell Magazine</span>
                  <span>// Stripe Inc.</span>
                  <span>// Aman Resorts</span>
                  <span>// Hermès Europe</span>
                  <span>// Kinfolk Editorial</span>
                  <span>// Dazed & Confused</span>
                  <span>// Google Cloud</span>
                </div>
              </div>

              {/* Exhibitions */}
              <div className="mt-16">
                <span className="font-sans text-[10px] tracking-mega uppercase text-brand-accent mb-6 block">
                  Solo Exhibitions
                </span>
                <div className="flex flex-col gap-4 font-sans text-2xs sm:text-xs text-brand-muted">
                  <div className="flex justify-between border-b border-brand-accent/15 pb-2">
                    <span>"Quiet Shadows" — Gallery 21, New York</span>
                    <span className="text-brand-accent uppercase">October 2025</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-accent/15 pb-2">
                    <span>"Brutalist Horizons" — Museum of Modern Art, Tokyo</span>
                    <span className="text-brand-accent uppercase">June 2024</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-accent/15 pb-2">
                    <span>"The Forest Altar" — Kyoto Center for Photographic Arts</span>
                    <span className="text-brand-accent uppercase">February 2023</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-brand-dark text-brand-bg px-8 py-3.5 font-sans text-xs tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all duration-500 ease-cinematic rounded-[2px]"
                >
                  <span>Discuss A Commission</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </section>
        
      </div>
    </PageTransition>
  );
};

export default About;
