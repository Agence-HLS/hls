// const { default: plugin } = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [ 
    // plugin=(containblue,) =>{

      
    //   containblue({
    //     background: "rgba(26, 152, 177, 0.5)",
    //     boxshadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    //     backdropfilter: "blur(20px)",
    //     webkitbackdropfilter: "blur(20px)",
    //     borderradius: "10px",
    //   })
      
    // }
        
      
    

  ],
  darkMode: "class",
};

