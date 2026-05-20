/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAF9F6",       // Esther off-white primary background
          dark: "#1C1C1C",     // Soft charcoal
          text: "#1C1C1C",     // Primary text
          accent: "#C2B8A3",   // Muted gold/taupe accent
          details: "#EFECE6",  // Muted beige details/borders
          muted: "#505050",    // Muted paragraph text
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
        mega: "0.25em",
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      transitionTimingFunction: {
        "cinematic": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-in-up": "fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      }
    },
  },
  plugins: [],
}
