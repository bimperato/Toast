module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background-img': "url('https://cdnimg.webstaurantstore.com/uploads/design/2021/4/toast-hero-xxl.svg')",
      })
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
