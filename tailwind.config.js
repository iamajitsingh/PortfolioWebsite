module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  keyframes: {
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
    'hue-rotate': {
      '0%': { filter: 'hue-rotate(0deg)' },
      '100%': { filter: 'hue-rotate(360deg)' },
    },
  },
  animation: {
    shimmer: 'shimmer 2s linear infinite',
    'spin-slow': 'spin 10s linear infinite',
    'hue-rotate': 'hue-rotate 30s linear infinite',

  },
},
  },
  plugins: [],
}
