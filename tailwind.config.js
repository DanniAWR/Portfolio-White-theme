/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#F5F5F5',
        'text-custom': '#8C7B73',
        'sky-blue': '#87CEEB'
      }
    }
  },
  plugins: [],
}

