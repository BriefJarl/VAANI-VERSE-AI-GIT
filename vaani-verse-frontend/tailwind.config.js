/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      /* ========================
         COLORS (Royal Neon Theme)
      ======================== */

      colors: {

        neonPurple: "#9333ea",
        neonBlue: "#3b82f6",
        neonPink: "#ec4899",
        neonDark: "#0f0c29",

      },


      /* ========================
         FONTS
      ======================== */

      fontFamily: {

        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],

      },


      /* ========================
         ANIMATIONS
      ======================== */

      animation: {

        gradient: "gradient 12s ease infinite",

        float: "float 6s ease-in-out infinite",

        glow: "glow 2s ease-in-out infinite alternate",

        pulseSlow: "pulseSlow 4s ease-in-out infinite",

        fadeIn: "fadeIn 1.2s ease-out forwards",

      },


      /* ========================
         KEYFRAMES
      ======================== */

      keyframes: {

        /* Animated gradient background */
        gradient: {

          "0%,100%": {
            backgroundPosition: "0% 50%",
          },

          "50%": {
            backgroundPosition: "100% 50%",
          },

        },


        /* Floating animation */
        float: {

          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },

        },


        /* Neon glow animation */
        glow: {

          from: {
            boxShadow:
              "0 0 20px #9333ea, 0 0 40px #3b82f6",
          },

          to: {
            boxShadow:
              "0 0 40px #ec4899, 0 0 60px #9333ea",
          },

        },


        /* Slow pulse */
        pulseSlow: {

          "0%,100%": {
            opacity: 0.6,
          },

          "50%": {
            opacity: 1,
          },

        },


        /* Fade in */
        fadeIn: {

          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },

        },

      },


      /* ========================
         BACKGROUND SIZE
      ======================== */

      backgroundSize: {

        "400%": "400% 400%",

      },


      /* ========================
         BOX SHADOW (Neon Glow)
      ======================== */

      boxShadow: {

        neon: "0 0 20px #9333ea, 0 0 40px #3b82f6",

        neonPink: "0 0 20px #ec4899",

        neonBlue: "0 0 20px #3b82f6",

      },


      /* ========================
         BLUR (Glass effect)
      ======================== */

      backdropBlur: {

        xs: "2px",

      },

    },

  },

  plugins: [],

}