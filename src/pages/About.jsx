import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export const About = () => {
  return (
    <PageTransition>
      <div className="bg-[#f5f3ee] text-[#111111] min-h-screen overflow-hidden">

        {/* HERO */}
        <section className="pt-16 md:pt-24 pb-32 px-6">

          <div className="max-w-[1700px] mx-auto">

            {/* Small Label */}
            <div className="text-center mb-8">
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#5e5a54]">
                Behind The Lens
              </span>
            </div>

            {/* Large Title */}
            <div className="text-center mb-24">
              <h1 className="font-serif text-[64px] sm:text-[92px] md:text-[120px] leading-none tracking-[-0.05em] font-light">
                Meet Peter
              </h1>
            </div>

            {/* Editorial Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-20 lg:gap-x-20">

              {/* LEFT COPY */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-end">

                <div className="max-w-[320px]">
                  <p className="text-[11px] leading-[2.2] tracking-[0.22em] uppercase text-[#5e5a54]">
                    Based in Nairobi, photographing people,
                    brands and spaces through quiet,
                    atmospheric storytelling.
                  </p>
                </div>

              </div>

              {/* CENTER IMAGE */}
              <div className="order-1 lg:order-2 flex justify-center">

                <div className="w-[320px] sm:w-[380px] md:w-[440px] aspect-[3/4] bg-[#d9d9d9] overflow-hidden rounded-t-[220px]" />

              </div>

              {/* RIGHT COPY */}
              <div className="order-3 flex justify-center lg:justify-start">

                <div className="max-w-[320px]">
                  <p className="text-[11px] leading-[2.2] tracking-[0.22em] uppercase text-[#5e5a54]">
                    Earthy tones and minimalism.
                    Images that feel calm,
                    intimate and timeless.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* STORY */}
        <section className="py-40 px-6">

          <div className="max-w-[760px] mx-auto">

            <div className="flex flex-col gap-10 text-[15px] leading-[2.15] text-[#5e5a54] font-light">

              <p>
                Sky Studios began with a simple intention —
                to create photographs that feel honest,
                restrained and emotionally grounded.
                Over the years, that quiet approach evolved
                into a visual language shaped by natural light,
                atmosphere and stillness.
              </p>

              <p>
                Inspired by editorial photography,
                architecture and slow storytelling,
                our work focuses on capturing moments
                without over-directing them.
                Whether documenting weddings,
                fashion editorials or interior spaces,
                the process remains intentional and calm.
              </p>

              <p>
                Today, Sky Studios collaborates with
                individuals, brands and creative teams
                seeking imagery that feels timeless rather
                than trend-driven. Every project is approached
                with simplicity, patience and attention to detail.
              </p>

            </div>

          </div>

        </section>

        {/* EDITORIAL IMAGE STRIP */}
        <section className="pb-40 px-6">

          <div className="max-w-[1500px] mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">

              <div className="aspect-[4/5] bg-[#d9d9d9] overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.01]" />

              <div className="aspect-[4/5] bg-[#d9d9d9] overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.01]" />

              <div className="aspect-[4/5] bg-[#d9d9d9] overflow-hidden transition-transform duration-700 ease-out hover:scale-[1.01]" />

            </div>

          </div>

        </section>

        {/* SIGNATURE */}
        <section className="pb-40 px-6">

          <div className="max-w-[760px] mx-auto">

            <div className="font-serif italic text-[22px] leading-[2] text-[#111111]">
              xo xo
              <br />
              Sky Studios
            </div>

          </div>

        </section>

        {/* SELECTED WORK */}
        <section className="py-24 px-6">

          <div className="max-w-[1500px] mx-auto">

            <div className="flex items-center justify-between mb-10">

              <span className="text-[11px] tracking-[0.28em] uppercase text-[#5e5a54]">
                Selected Work
              </span>

              <Link
                to="/portfolio"
                className="text-[11px] tracking-[0.22em] uppercase text-[#5e5a54] hover:text-black transition-colors"
              >
                View All
              </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">

              <div className="aspect-[4/5] bg-[#d9d9d9]" />

              <div className="aspect-[4/5] bg-[#d9d9d9]" />

            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section className="py-40 px-6">

          <div className="max-w-[760px] mx-auto text-center">

            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-10">
              Let’s create something thoughtful together.
            </h2>

            <div className="flex flex-col gap-5 text-[14px] text-[#5e5a54]">

              <a
                href="mailto:hello@skystudios.com"
                className="hover:text-black transition-colors"
              >
                hello@skystudios.com
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-black transition-colors"
              >
                Instagram
              </a>

              <Link
                to="/contact"
                className="hover:text-black transition-colors"
              >
                Contact
              </Link>

            </div>

          </div>

        </section>

      </div>
    </PageTransition>
  );
};

export default About;