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
        600: '#2989c4',
        700: '#2782ba',
        800: '#257bb0',
        900: '#2273a5'
      },
      artisan: {
        DEFAULT: '#28a6de',
        100: '#d9effa',
        200: '#abdcf3',
        300: '#81cbec',
        400: '#53b8e5',
        500: '#28a6de',
        600: '#259fd5',
        700: '#2297cb',
        800: '#1f8fc1',
        900: '#1c87b7'
      },
      services: {
        DEFAULT: '#39b3be',
        100: '#daf2f4',
        200: '#b0e2e6',
        300: '#8ad3d9',
        400: '#60c2cb',
        500: '#39b3be',
        600: '#36aab5',
        700: '#33a1ab',
        800: '#3098a1',
        900: '#2d8e97'
      },
      print: {
        DEFAULT: '#50bd94',
        100: '#e1f3eb',
        200: '#bee6d6',
        300: '#99d8c0',
        400: '#73caa9',
        500: '#50bd94',
        600: '#4bb58d',
        700: '#46ae87',
        800: '#41a680',
        900: '#3c9e79'
      },
      historian: {
        DEFAULT: '#67bd68',
        100: '#e6f4e5',
        200: '#c5e6c5',
        300: '#a7d9a7',
        400: '#86ca86',
        500: '#67bd68',
        600: '#60b861',
        700: '#58b359',
        800: '#50ad51',
        900: '#49a84a'
      },
      green: {
        DEFAULT: '#7dc142',
        100: '#e8f4de',
        200: '#cce7b5',
        300: '#b3db90',
        400: '#97cd67',
        500: '#7dc142',
        600: '#77b83e',
        700: '#71af3b',
        800: '#6aa637',
        900: '#649d33'
      },
      p2p: {
        DEFAULT: '#f89406',
        100: '#feecd4',
        200: '#fdd7a3',
        300: '#fbc06d',
        400: '#f9a937',
        500: '#f89406',
        600: '#eb8c06',
        700: '#df8506',
        800: '#d27d05',
        900: '#c67605'
      },
      orange: {
        DEFAULT: '#ed773a',
        100: '#fceae0',
        200: '#f8ccb5',
        300: '#f5b18d',
        400: '#f19362',
        500: '#ed773a',
        600: '#ea7030',
        700: '#e76927',
        800: '#e3611d',
        900: '#e05a14'
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
      '2xl': '1536px',
      '3xl': '1750px'
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
