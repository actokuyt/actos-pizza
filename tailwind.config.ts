import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        lightThemeText: "#171717",
        lightThemeBackground: "#ffffff",
        darkThemeText: "#fffff",
        darkThemeBackground: "#171717",
      }
    },
  },
  plugins: [],
};
export default config;
