/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        bigTablet: { max: "1200px", min: "1001px" },
        mediumTablet: { max: "1000px", min: "769px" },
        tablet: { max: "768px", min: "480px" },
        phone: { max: "479px", min: "0px" },
      },
      colors: {
        footer:'#1F2736',
        footerSub:'#A0AEC0',
        header:'#ffeacf',
        body:'#fafafa',
        primary:'#ffeacf',
        secondary:'#fd5600',
        secondarySoft:'#FD8B00',
      },
      backgroundImage: {
        background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0.88%, rgba(0, 0, 0, 0.6) 175.77%), url('/public/images/kebab.jpg')",
      },

    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
