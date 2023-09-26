import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        menuIn: {
          "0%": { transform: "translateX(-400px)" },
          "100%": { transform: "translateX(0)" },
        },
        menuOut: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-400px)" },
        },
        morph: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
      animation: {
        menuIn: "menuIn 1s ease-in-out",
        menuOut: "menuOut 1s ease-in-out",
        morph: "morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
