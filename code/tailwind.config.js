/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-active': 'var(--color-primary-active)',
        'primary-light': 'var(--color-primary-light)',
        'primary-light-hover': 'var(--color-primary-light-hover)',
        'primary-light-active': 'var(--color-primary-light-active)',
        'secondary': 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'surface': 'var(--color-surface)',
        'text': 'var(--color-text)',
        'danger': 'var(--color-danger)',
        'danger-hover': 'var(--color-danger-hover)',
        'danger-active': 'var(--color-danger-active)'
      }
    },
  },
  safelist: [
    {
      pattern: /grid-cols-(\d)/,
      variants: ['sm', 'md', 'lg'],
    },
  ],
  plugins: [],
}
