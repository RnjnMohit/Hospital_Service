// Import the Config type from tailwindcss
import { Config } from 'tailwindcss';

// Export the configuration object using module.exports
module.exports = /** @type {Config} */ ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#020D2B',
        'custom-white': '#ADB1BC',
        'custom-sky': '#8EC0EE'  
      },
    },
  },
  plugins: [],
});
