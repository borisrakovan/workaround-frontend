module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      // desktop-first
      screens: {
         // "2xl": { max: "1535px" },
         xl: { max: "1280px" },
         // => @media (max-width: 1279px) { ... }
         lg: { max: "1024px" },
         // => @media (max-width: 1023px) { ... }
         md: { max: "768px" },
         // => @media (max-width: 767px) { ... }
         sm: { max: "640px" },
         // => @media (max-width: 639px) { ... }
         xs: { max: "512px" },
         // => @media (max-width: 512px) { ... }
      },
      container: {
         center: true,
         padding: {
            xl: "3.5625rem",
            DEFAULT: "1.5625rem",
            // lg: "4rem",
            // xl: "5rem",
         },
      },
      fontFamily: {
         sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      extend: {
         colors: {
            red: {
               DEFAULT: "#f44336",
               light: "#F9928B",
               lightest: "#F44336",
            },
            gray: {
               // light: "#E0E0E0",
               lightest: "#f5f5f5",
               DEFAULT: "#BFC0C0",
               dark: "#424242",
            },
            white: {
               DEFAULT: "#ffffff",
            },
            orange: {
               DEFAULT: "#EF8354",
               dark: "#EC6A32",
            },
            blue: {
               DEFAULT: "#2D3142",
               light: "#4F5D75",
            },
         },
      },
   },
   corePlugins: {
      boxShadow: false,
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
