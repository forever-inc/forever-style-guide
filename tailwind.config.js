const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        DEFAULT: '#888',
        100: '#fafafa',
        200: '#f6f6f6',
        300: '#e7e7e7',
        400: '#ccc',
        500: '#888',
        600: '#666',
        700: '#333',
        800: '#222',
        900: '#111'
      },
      blue: {
        DEFAULT: '#2b91cf',
        100: '#daecf8',
        200: '#add5ee',
        300: '#83bfe4',
        400: '#55a7d9',
        500: '#2b91cf',
        600: '#2782ba',
        700: '#2273a5',
        800: '#1c618c',
        900: '#19577c'
      },
      artisan: {
        DEFAULT: '#28a6de',
        100: '#d9effa',
        200: '#abdcf3',
        300: '#81cbec',
        400: '#53b8e5',
        500: '#28a6de',
        600: '#2297cb',
        700: '#1c87b7',
        800: '#18759e',
        900: '#146386',

      },
      services: {
        DEFAULT: '#39b3be',
        100: '#daf2f4',
        200: '#b0e2e6',
        300: '#8ad3d9',
        400: '#60c2cb',
        500: '#39b3be',
        600: '#33a1ab',
        700: '#2d8e97',
        800: '#277d85',
        900: '#226b71'
      },
      print: {
        DEFAULT: '#50bd94',
        100: '#e1f3eb',
        200: '#bee6d6',
        300: '#99d8c0',
        400: '#73caa9',
        500: '#50bd94',
        600: '#46ae87',
        700: '#3c9e79',
        800: '#338868',
        900: '#2c7559'
      },
      historian: {
        DEFAULT: '#67bd68',
        100: '#e6f4e5',
        200: '#c5e6c5',
        300: '#a7d9a7',
        400: '#86ca86',
        500: '#67bd68',
        600: '#58b359',
        700: '#49a84a',
        800: '#3d8e3e',
        900: '#347935'
      },
      green: {
        DEFAULT: '#7dc142',
        100: '#e8f4de',
        200: '#cce7b5',
        300: '#b3db90',
        400: '#97cd67',
        500: '#7dc142',
        600: '#71af3b',
        700: '#649d33',
        800: '#57882c',
        900: '#4a7526'
      },
      p2p: {
        DEFAULT: '#f89406',
        100: '#feecd4',
        200: '#fdd7a3',
        300: '#fbc06d',
        400: '#f9a937',
        500: '#f89406',
        600: '#df8506',
        700: '#c67605',
        800: '#ad6704',
        900: '#945803'
      },
      orange: {
        DEFAULT: '#ed773a',
        100: '#fceae0',
        200: '#f8ccb5',
        300: '#f5b18d',
        400: '#f19362',
        500: '#ed773a',
        600: '#e76927',
        700: '#e05a14',
        800: '#bd4b11',
        900: '#a2410e'
      },
      red: {
        DEFAULT: '#bf3030',
        100: '#f6d8d8',
        200: '#e8acac',
        300: '#db8484',
        400: '#cc5858',
        500: '#bf3030',
        600: '#b52d2d',
        700: '#ab2b2b',
        800: '#a12929',
        900: '#962626'
      },
      ambassador: {
        DEFAULT: '#a4314c',
        100: '#f3d4dc',
        200: '#dfaab7',
        300: '#cc8394',
        400: '#b7586f',
        500: '#a4314c',
        600: '#9b2e48',
        700: '#912b43',
        800: '#87283f',
        900: '#7d253a'
      },
      white: '#fff',
      black: '#000',
      text: '#434445',
      silver: '#f6f7f8',
      beige: '#ebeae6',
      purple: '#6f266d'
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      //'2xl': '1536px',
      //'3xl': '1750px'
    },

    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700'
    },
    fontFamily: {
      sans: ['ProximaNova', ...defaultTheme.fontFamily.sans],
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
