module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        boardbg: "url('/public/img/boardbg.jpeg')",
        gramybg: "url('/public/img/gramybg.png')",
        gramyheader: "url('/public/img/gramyheader.png')",
        gramybgnophone: "url('public/img/gramybgnophone.png')",
        gramybox: "url('public/img/gramybox.png')",
        gramyfooter: "url('public/img/gramyfooter.png')",
        gramymiddlebox: "url('public/img/gramymiddlebox.png')",
        jongjae: "url('public/img/jongjae.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
