/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button-header': '#475467',
        'header-primary': '#7F56D9',
        'header-title':'#E9D7FE'
      },
    }
  },
  plugins: [
  ],
}