/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./component-library/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#eff6ff",
        "primary-100": "#dbeafe",
        "primary-200": "#bfdbfe",
        "primary-300": "#93c5fd",
        "primary-400": "#4361EE",
        "primary-500": "#3b82f6",
        "primary-600": "#2563eb",
        "primary-700": "#1d4ed8",
        "primary-800": "#1e40af",
        "primary-900": "#1e3a8a",
        "primary-950": "#172554",
      },
    },
  },
  darkMode: "class",
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};

// 5465ff