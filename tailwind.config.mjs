/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        burdeo: {
          900: '#2D0B10',
          DEFAULT: '#4A121A',
          800: '#4A121A',
          700: '#5F1923',
          600: '#771E2B',
        },
        crema: {
          100: '#FAF0DC',
          DEFAULT: '#FAF0DC',
          200: '#F3E5C8',
          300: '#EAD6B3',
        },
        almendra: {
          DEFAULT: '#E2CEB7',
          light: 'rgba(226, 206, 183, 0.35)',
          muted: 'rgba(226, 206, 183, 0.2)',
          dark: '#C9B096',
        },
        charcoal: {
          DEFAULT: '#1E1A1B',
          muted: '#4A4546',
        },
        alerta: {
          DEFAULT: '#8C1D24',
          hover: '#A3242C',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        md: '4px',
      },
      boxShadow: {
        subtle: '0 12px 32px -4px rgba(45, 11, 16, 0.12)',
        card: '0 20px 40px -15px rgba(45, 11, 16, 0.25)',
      },
    },
  },
  plugins: [],
};
