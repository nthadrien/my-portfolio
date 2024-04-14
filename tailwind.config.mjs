/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    screens: {
      'sm': '280px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary:"var(--pry-clr)",
        secondary:"var(--snd-clr)",
        neutral:"var(--ntr-clr)",
        "dark-primary":"var(--drk-pry-clr)",

      }
    },
  },
  plugins: [],
}
