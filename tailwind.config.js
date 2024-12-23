/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Noto Serif", "serif"], // For headings
        sans: ["Lato", "sans-serif"], // For paragraphs
      },
      width: {
        "90p": "90%",
        "80p": "80%",
        "85p": "85%",
        "75p": "75%",
        "66p": "66%",
        "60p": "60%",
        "40p": "40%",
        "50p": "50%",
      },
      fontSize: {
        // h1: ["44px", { lineHeight: "1.3" }],
        // h2: ["30px", { lineHeight: "1.4" }],
        // h3: ["22px", { lineHeight: "1.5" }],
        // h4: ["20px", { lineHeight: "1.5" }],
        // p1: ["20px", { lineHeight: "1.5" }],
        // p2: ["18px", { lineHeight: "1.6" }],
        h1: ["2.75em", { lineHeight: "1.3" }],
        h2: ["1.875em", { lineHeight: "1.4" }],
        h3: ["1.375em", { lineHeight: "1.5" }],
        h4: ["1.25em", { lineHeight: "1.5" }],
        p1: ["1.25em", { lineHeight: "1.5" }],
        p2: ["1.125em", { lineHeight: "1.6" }],
      },
      colors: {
        customGray: "#fafbfc",
        customPrimary: "#23b3f1",
        customBorder: "#888888",
        textColor: "#2b2b2b",
      },
      borderRadius: {
        btnRadius: "0.66em", // Add your custom border radius
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #ff5733 30%, #f0f0f0 60%)",
      },
    },
  },
  plugins: [],
};
