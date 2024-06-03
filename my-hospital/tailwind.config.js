// Import the Config type from tailwindcss
import { Config } from 'tailwindcss';

// Export the configuration object using module.exports
module.exports = /** @type {Config} */ ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
