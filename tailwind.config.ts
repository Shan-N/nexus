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
        'neon-purple': '0px 4px 15px rgba(139, 92, 246, 0.8)', // Adjust the color and blur to your liking
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
