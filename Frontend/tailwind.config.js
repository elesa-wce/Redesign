import daisyui from "daisyui"
export default {
  //...
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all files are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}