
/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pinky-pink': '#ffdedb',
        'vibrant-red':'#ff8829',
        'funny-yellow':'#fbc329',
        'less-funny-yellow':'#fbd877',
        'not-perfect-grey': '#282d3a',
        'not-so-yellow' : '#bfae8a',
        'fefe' : '#fefffe', 
        'funky-green' : '#a5c90f'
      },
      backgroundImage: {
        'footer': "./src/assest/img/footer.jpg",
      },
    },
  },
  plugins: [],
}