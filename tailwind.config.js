
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      beige: '#f2bc94',
      brown: '#722620',
      db: '#30110d',
      blue: '#3202a1',
    },
    
  },
screens: {
  'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  }
}