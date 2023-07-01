/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        navclose: {
          '0%': {
            width: "100%",
            height: "100%",
            'border-radius': '50%'
          },
          '10%': {
            width: "90%",
            height: "90%",
            'border-radius': '50%'
          },
          '20%': {
            width: "80%",
            height: "80%",
            'border-radius': '50%'
          },
          '30%': {
            width: "70%",
            height: "70%",
            'border-radius': '50%'
          },
          '40%': {
            width: "60%",
            height: "60%",
            'border-radius': '50%'
          },
          '50%': {
            width: "50%",
            height: "50%",
            'border-radius': '50%'
          },
          '60%': {
            width: "40%",
            height: "40%",
            'border-radius': '50%'
          },
          '70%': {
            width: "30%",
            height: "30%",
            'border-radius': 'none'
          },
          '80%': {
            width: "20%",
            height: "20%",
            'border-radius': '50%'
          },
          '90%': {
            width: "10%",
            height: "10%",
            'border-radius': '50%'
          },
          '100%': {
            width: "0%",
            height: "0%",
            'border-radius': 'none'
          },
        },
        navopen: {
          '0%': {
            width: "0%",
            height: "0%",
            'border-radius': '50%'
          },
          '10%': {
            width: "10%",
            height: "10%",
            'border-radius': '50%'
          },
          '20%': {
            width: "20%",
            height: "20%",
            'border-radius': '50%'
          },
          '30%': {
            width: "30%",
            height: "30%",
            'border-radius': '50%'
          },
          '40%': {
            width: "40%",
            height: "40%",
            'border-radius': '50%'
          },
          '50%': {
            width: "50%",
            height: "50%",
            'border-radius': '50%'
          },
          '60%': {
            width: "60%",
            height: "60%",
            'border-radius': '50%'
          },
          '70%': {
            width: "70%",
            height: "70%",
            'border-radius': 'none'
          },
          '80%': {
            width: "80%",
            height: "80%",
            'border-radius': '50%'
          },
          '90%': {
            width: "90%",
            height: "90%",
            'border-radius': '50%'
          },
          '100%': {
            width: "100%",
            height: "100%",
            'border-radius': 'none'
          },
        },
      },
      animation: {
        "nav-expand": "navopen 5s linear",
        "nav-close": "navclose 2s linear ",
      },
      colors: {
        smbg: "#FCD731",
        bg: "#2d4de9",
      },
    },
  },
  plugins: [],
};
