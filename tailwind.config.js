/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    extend: {
      colors:{
        purpleColor:'hsl(241,74%,75%)',
        orangeColor:'hsl(13,84%,81%)',
        pinkColor:'hsl(304,79%,80%)',
        bgColor:'hsl(224,100%,98%)',
        whiteColor:'hsl(0,0%,100%)'

      },
      fontFamily:{
        defaultText:['Cormorant Garamond','serif']
      },
      backgroundImage: {
        'profile': "url('/src/assets/image12.jpg')",
        
      }
      
    },
  },
  plugins: [],
}
