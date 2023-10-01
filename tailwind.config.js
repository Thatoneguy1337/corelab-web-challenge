/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White:"#FFFFFF",
        LightGreen:"B9FFDD",
        LightBlue:"BAE2FF",
        LightYellow:"FFE8AC",
        LightPink:"FFCAB9",
        Blue:"9DD6FF",
        DarkPink:"F99494",
        Pink:"ECA1FF",
        Yellow:"DAFF8B",
        Salmon:"FFA285",
        Grey:"CDCDCD",
        DarkGrey:"979797",
        LightBrown:"A99A7C",
      },
      fontWeight: {
        700: "700",
        600: "600",
        500: "500",
        400: "400",
      },
      borderRadius: {
        4: "4px",
      },
      padding: {
        btnBigPad: "28px",
        btnMedPad: "20px",
      },
      height: {
        btgBigH: "48px",
        btgMedH: "38px",
      },
      fontSize: {
        btgBigF: "16px",
        btgMedF: "14px",
      },
      fontFamily: {
        lexend: "Lexend",
      },
      screens: {
        maxsm: { max: "768px" },
        midson: {min: "1215px"}
      },
    },
  },
  plugins: [],
}
