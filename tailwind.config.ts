import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon-purple': '0 0 15px 5px rgba(147, 51, 234, 0.5)', // Adjust the color and blur to your liking
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
