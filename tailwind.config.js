/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this includes the relevant file paths
  ],
  theme: {
    extend: {
      colors: {
        "rsos-blue": "#0090CD",
        "rsos-blue-dark": "#086DB4",
        "step-bg-color": "#E1F2FF",
        "step-border-color": "#CDCDCD",
        "rs-table-bottom-border-color": "#E6E6E6",
      },
    },
  },
  plugins: [],
};
