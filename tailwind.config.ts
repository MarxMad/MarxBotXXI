import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        marx: {
          'rojo-oscuro': '#8B0000',
          rojo: '#B22222',
          'rojo-claro': '#CC3333',
          dorado: '#DAA520',
          'dorado-claro': '#FFD700',
          negro: '#0D0D0D',
          'negro-surface': '#1A1A1A',
          crema: '#F5F0E6',
          'crema-oscuro': '#E8E0D0',
          blanco: '#FFFEF9',
          good: '#5A9C4A',
          warn: '#C4A02A',
        },
      },
      fontFamily: {
        display: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
