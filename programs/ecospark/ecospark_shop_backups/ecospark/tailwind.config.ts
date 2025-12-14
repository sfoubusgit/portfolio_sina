import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#1D3925',
        'leaf-green': '#94C973',
        'olive': '#7D9A58',
        'soft-mint': '#CDECC5',
        'off-white': '#F8F7F3',
        'graphite': '#373737',
        'gray-low': '#D9D9D9',
        'gray-mid': '#B4B4B4',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'eco': '6px',
      },
      letterSpacing: {
        'badge': '0.05em',
      },
    },
  },
  plugins: [],
}
export default config


