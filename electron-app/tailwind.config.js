/** @type {import('tailwindcss').Config} */
import tw from 'tw-elements-react/dist/plugin.cjs'

export default {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [tw]
}
