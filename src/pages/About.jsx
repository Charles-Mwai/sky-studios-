import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

/* ─── placeholder box ─────────────────────────────────────────────────────── */
const Placeholder = ({ style, className = "" }) => (
  <div
    className={className}
    style={{
      background: "#efede8",
      border: "1px solid #DCDCDC",
      ...style,
    }}
  />
);

/* ─── thin SVG arrow ──────────────────────────────────────────────────────── */
const ArrowLeft = () => (
  <svg width="36" height="14" viewBox="0 0 36 14" fill="none" stroke="currentColor" strokeWidth="1">
    <line x1="36" y1="7" x2="0" y2="7" />
    <polyline points="9,1 0,7 9,13" />
  </svg>
);
const ArrowRight = () => (
  <svg width="36" height="14" viewBox="0 0 36 14" fill="none" stroke="currentColor" strokeWidth="1">
    <line x1="0" y1="7" x2="36" y2="7" />
    <polyline points="27,1 36,7 27,13" />
  </svg>
);

/* ══════════════════════════════════════════════════════════════════════════ */
export const About = () => {
  const [slide, setSlide] = useState(0);
  const SLIDES = 3;
  const next = () => setSlide((p) => (p + 1) % SLIDES);
  const prev = () => setSlide((p) => (p - 1 + SLIDES) % SLIDES);

  return (
    <PageTransition>
      <div style={{ background: "#F4F2EE", color: "#101010", overflowX: "hidden", minHeight: "100vh" }}>

        {/* ══════════════════════════════════════════════
            BLOCK 1 — HERO / ABOUT INTRO
        ══════════════════════════════════════════════ */}
        <section style={{ position: "relative" }}>

          {/* ── DESKTOP layout ─────────────────────────────────────────────── */}
          <div className="hidden lg:block" style={{ position: "relative" }}>

            {/* Accent rect — covers the lower ~65% of this section */}
            <div style={{
              position: "absolute",
              top: "35%",
              left: 0,
              right: 0,
              bottom: 0,
              background: "#bfc9c0",
              zIndex: 0,
            }} />

            <div style={{ maxWidth: 1500, margin: "0 auto", padding: "0 48px" }}>

              {/* Title: Behind the Lens + Meet Peter— centered */}
              <div style={{ paddingTop: 88, textAlign: "center", position: "relative", zIndex: 2 }}>
                <p style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Inter', sans-serif" }}>
                  Behind the Lens
                </p>
                <h1 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(56px, 6vw, 84px)",
                  fontWeight: 300,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  marginBottom: 0,
                }}>
                  Meet Peter
                </h1>
              </div>

              {/* ── Three-column image + text composition ── */}
              {/*
                Columns (24-unit grid):
                  col1 = 20.83%  (left portraits)
                  gap  =  8.33%  (contains flanking captions)
                  col2 = 25%     (circular portrait + bio)
                  gap  =  8.33%  (contains flanking captions)
                  col3 = 20.83%  (right tall portrait)
                  margins = remaining
              */}
              <div style={{ position: "relative", zIndex: 1, marginTop: 32 }}>

                {/* Flex row — images are flex children with explicit widths */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>

                  {/* ── LEFT: 2 stacked portraits ── */}
                  {/* They start lower (pushed down ~23% of page width) */}
                  <div style={{ width: "20.83%", flexShrink: 0, paddingTop: "40%", paddingBottom: 32 }}>
                    <Placeholder style={{ aspectRatio: "2/3", marginBottom: 16 }} />
                    <Placeholder style={{ aspectRatio: "2/3" }} />
                  </div>

                  {/* ── CENTER: captions + circular portrait + bio ── */}
                  <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0 2%",
                  }}>
                    {/* Flanking caption row — sits above/beside the top of circular image */}
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 16 }}>
                      <p style={{
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        lineHeight: 2.1,
                        width: "36%",
                        fontFamily: "'Inter', sans-serif",
                        color: "#101010",
                      }}>
                        Based in Nairobi, photographing people, brands and products since 2019
                      </p>
                      <p style={{
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        lineHeight: 2.1,
                        width: "36%",
                        textAlign: "right",
                        fontFamily: "'Inter', sans-serif",
                        color: "#101010",
                      }}>
                        Earthy tones and minimalism. Photos that speak softly with power.
                      </p>
                    </div>

                    {/* Circular portrait — 48% of center column width */}
                    <div style={{
                      width: "48%",
                      aspectRatio: "2/3",
                      background: "#efede8",
                      border: "1px solid #DCDCDC",
                      borderRadius: "9999px",
                    }} />

                    {/* Bio text area — on the accent rect */}
                    <div style={{ textAlign: "center", maxWidth: 400, marginTop: 40, paddingBottom: 48 }}>
                      <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'Inter', sans-serif" }}>
                        A bit about me
                      </p>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 1.95, color: "#3a3a3a", fontWeight: 300, marginBottom: 16 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 1.95, color: "#3a3a3a", fontWeight: 300, marginBottom: 32 }}>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: 19, color: "#101010", marginBottom: 4 }}>
                        xo xo
                      </p>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#101010" }}>
                        Sky Studios
                      </p>
                    </div>
                  </div>

                  {/* ── RIGHT: 1 very tall portrait ── */}
                  {/* Pushed down ~16% to align with accent rect start area */}
                  <div style={{ width: "20.83%", flexShrink: 0, paddingTop: "50%", paddingBottom: 32 }}>
                    <Placeholder style={{ aspectRatio: "5/9" }} />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE layout ───────────────────────────────────────────────── */}
          <div className="lg:hidden">

            {/* Title */}
            <div style={{ textAlign: "center", padding: "80px 24px 28px" }}>
              <p style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Inter', sans-serif" }}>
                Behind the Lens
              </p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 52, fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 0.92, marginBottom: 0 }}>
                Meet Esther
              </h1>
            </div>

            <div style={{ padding: "0 24px" }}>
              {/* Caption */}
              <p style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", lineHeight: 2.1, textAlign: "center", color: "#3a3a3a", marginBottom: 20, fontFamily: "'Inter', sans-serif" }}>
                Based in Nairobi, photographing people,<br />brands and products since 2019
              </p>

              {/* Circular portrait */}
              <div style={{
                width: "58%",
                maxWidth: 240,
                aspectRatio: "2/3",
                background: "#efede8",
                border: "1px solid #DCDCDC",
                borderRadius: "9999px",
                margin: "0 auto 20px",
              }} />

              {/* Side images: left 2 stacked + right tall */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <Placeholder style={{ aspectRatio: "5/9" }} />
                  <Placeholder style={{ aspectRatio: "5/9" }} />
                </div>
                <Placeholder style={{ aspectRatio: "5/19" }} />
              </div>
            </div>

            {/* Bio — on accent bg */}
            <div style={{ background: "#E5E5DB", margin: "20px 0 0", padding: "40px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 18, fontFamily: "'Inter', sans-serif" }}>
                A bit about me
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 1.95, color: "#3a3a3a", fontWeight: 300, marginBottom: 14 }}>
                I'm Esther, a commercial and editorial photographer with a passion for weaving beauty into every shot. My work is all about earthy tones and a minimalist vibe, creating images that are both timeless and enchanting.
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 1.95, color: "#3a3a3a", fontWeight: 300, marginBottom: 28 }}>
                When I'm not behind the camera, you can find me hiking in the mountains, tending to my collection of houseplants, or sipping on a meticulously brewed cup of coffee. I value authenticity and connection.
              </p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: 18, color: "#101010", marginBottom: 4 }}>xo xo</p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#101010" }}>Sky Studios</p>
            </div>
          </div>

        </section>

        {/* ══════════════════════════════════════════════
            BLOCK 2 — SELECTED WORK SLIDESHOW
        ══════════════════════════════════════════════ */}
        <section style={{ background: "#F4F2EE", padding: "80px 0" }}>
          <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>

            {/* Slides */}
            {Array.from({ length: SLIDES }).map((_, i) => (
              <div key={i} style={{ display: slide === i ? "block" : "none" }}>

                {/* Heading — centered */}
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                  marginBottom: 36,
                }}>
                  Selected Work
                </h2>

                {/* Two placeholders side by side */}
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  alignItems: "stretch",
                }}>
                  {/* Landscape left — 11/24 width */}
                  <Placeholder style={{ flex: "0 0 calc(11/20 * 100%)", aspectRatio: "11/8" }} className="w-full" />
                  {/* Portrait right — 9/24 width */}
                  <Placeholder style={{ flex: "0 0 calc(9/20 * 100%)", aspectRatio: "2/3" }} className="w-full" />
                </div>

              </div>
            ))}

            {/* Controls: ← [View All] → */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
              marginTop: 36,
            }}>
              <button
                onClick={prev}
                aria-label="Previous slide"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#101010", padding: 8, lineHeight: 0 }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#42423C"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#101010"}
              >
                <ArrowLeft />
              </button>

              <Link
                to="/portfolio"
                style={{
                  display: "inline-block",
                  background: "#101010",
                  color: "#fff",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "12px 32px",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#42423C"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#101010"}
              >
                View All
              </Link>

              <button
                onClick={next}
                aria-label="Next slide"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#101010", padding: 8, lineHeight: 0 }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#42423C"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#101010"}
              >
                <ArrowRight />
              </button>
            </div>

          </div>

          {/* Mobile slideshow: stack images */}
          <style>{`
            @media (max-width: 767px) {
              .about-slide-images { flex-direction: column !important; }
            }
          `}</style>
        </section>

        {/* ══════════════════════════════════════════════
            BLOCK 3 — CONTACT INFORMATION
        ══════════════════════════════════════════════ */}
        <section style={{ background: "#E5E5DB", padding: "80px 40px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              textAlign: "center",
              marginBottom: 56,
            }}>
              Contact information
            </h3>

            {/* 3 columns with 1px dividers */}
            <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
            }} className="about-contact-cols">

              {/* Col 1 — address */}
              <div style={{ flex: 1, textAlign: "center", padding: "0 32px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 2, fontWeight: 300 }}>Nairobi</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 2, fontWeight: 300 }}>Nairobi</p>
              </div>

              {/* Divider */}
              <div style={{ width: 1, background: "#DCDCDC", flexShrink: 0 }} className="about-divider" />

              {/* Col 2 — hours */}
              <div style={{ flex: 1, textAlign: "center", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 1.9, fontWeight: 300, maxWidth: 260 }}>
                  Stop by my studio from Monday to Friday between 10am–5pm, or send me a message and I'll reach out.
                </p>
              </div>

              {/* Divider */}
              <div style={{ width: 1, background: "#DCDCDC", flexShrink: 0 }} className="about-divider" />

              {/* Col 3 — email / phone */}
              <div style={{ flex: 1, textAlign: "center", padding: "0 32px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 2, fontWeight: 300 }}>peter@lorem.com</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15, lineHeight: 2, fontWeight: 300 }}>+254712345678</p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BLOCK 4 — CTA BANNER
        ══════════════════════════════════════════════ */}
        <section style={{ background: "#F4F2EE" }}>

          {/* Full-width landscape placeholder */}
          <Placeholder style={{ width: "100%", aspectRatio: "21/9" }} className="about-banner-img" />

          {/* Text + button below image */}
          <div style={{ textAlign: "center", padding: "72px 24px", maxWidth: 680, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'Inter', sans-serif" }}>
              Get in touch
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 40,
            }}>
              Contact me today — let's chat!
            </h1>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                background: "#101010",
                color: "#fff",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "13px 36px",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#42423C"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#101010"}
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* ── Responsive overrides ─────────────────────────────────────────── */}
        <style>{`
          @media (max-width: 767px) {
            .about-contact-cols { flex-direction: column !important; }
            .about-divider { width: 100% !important; height: 1px !important; margin: 24px 0 !important; }
            .about-banner-img { aspect-ratio: 4/3 !important; }
          }
        `}</style>

      </div>
    </PageTransition>
  );
};

export default About;