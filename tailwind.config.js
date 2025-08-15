/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neumorph': '8px 8px 16px #a3b1c680, -8px -8px 16px #ffffff',
        'neumorph-inset': 'inset 4px 4px 8px #a3b1c666, inset -4px -4px 8px #ffffffb3',
        'neumorph-pressed': '12px 12px 24px #a3b1c699, -12px -12px 24px #ffffffe6',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
