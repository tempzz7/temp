module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0d0d0d', // Deep black for backgrounds
        'primary-violet': '#7c3aed', // Deep violet for primary accents
        'accent-violet': '#a78bfa', // Lighter violet for secondary accents or hover effects
        'light-gray': '#f3f4f6', // Light gray for text on dark backgrounds
        'medium-gray': '#9ca3af', // Medium gray for secondary text or subtle elements
        'dark-gray': '#1f2937', // Dark gray for card backgrounds or sections
      },
    },
  },
  plugins: [],
}