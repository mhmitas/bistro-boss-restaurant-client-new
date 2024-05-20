/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "dracula",
      {
        dashboard: {
          "primary": "#570DF8",
          "secondary": "#D1A054",
          "accent": "#008139",
          "neutral": "#000000",
          "base-100": "#ffffff",
          "base-200": "#f5f5f4",
          "base-300": "#e5e7eb",
          "info": "#00a4bf",
          "success": "#00ac6b",
          "warning": "#ffaa50",
          "error": "#B91C1C",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}