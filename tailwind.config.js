const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
        50: '#eef6fb',
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
        50: '#edf7fc',
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
        50: '#eef9fa',
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
        50: '#f1f9f6',
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
        50: '#f3faf3',
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
        50: '#f4faf0',
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
        50: '#fef6eb',
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
        50: '#fdf5f1',
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
        50: '#faeded',
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
        50: '#f9ebef',
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
      purple: {
        DEFAULT: '#6f266d',
        50: '#f5eff5'
      },
      white: '#fff',
      black: '#000',
      text: {
        DEFAULT: '#434445',
        muted: '#888'
      },
      silver: '#f6f7f8',
      beige: '#ebeae6',

      //deprecated bootxstrap classes
      danger: '#bf3030',
      success: '#7dc142',
      info: '#2b91cf',
      warning: '#ed773a'
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700'
    },
    fontFamily: {
      sans: ['ProximaNova', ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif
    }
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      ringColor: ['hover'],
      backgroundColor: ['even', 'odd']
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        'html, body': {
          width: '100%',
          overflowY: 'auto',
          fontSize: '14px !important', //base rem size
          webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          backgroundColor: theme('colors.beige')
        },
        'body': {
          color: theme('colors.text.DEFAULT')
        },
        'h1, h2, h3, h4, h5, h6': {
          color: theme('colors.text.DEFAULT'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: 1.1
        },
        'h1': {
          fontSize: theme('fontSize.6xl')
        },
        'h2': {
          fontSize: theme('fontSize.5xl')
        },
        'h3': {
          fontSize: theme('fontSize.4xl')
        },
        'h4': {
          fontSize: theme('fontSize.3xl')
        },
        'h5': {
          fontSize: theme('fontSize.2xl')
        },
        'h6': {
          fontSize: theme('fontSize.xl')
        },
        'p': {
          color: theme('colors.text.DEFAULT'),
          lineHeight: theme('lineHeight.normal'),
          fontSize: theme('fontSize.lg'),
        },
        'a': {
          color: theme('colors.blue.DEFAULT'),
          textDecoration: 'none',

          '&:visited, &:hover, &:active': {
            color: theme('colors.blue.DEFAULT')
          },

          '&:active, &:hover': {
            outline: 0
          },

          '&:hover, &:focus': {
            textDecoration: 'underline'
          },

          '&:focus': {
            outline: '5px auto -webkit-focus-ring-color'
          },

          '&:disabled': {
            color: theme('colors.text.muted'),
            textDecoration: 'none',
            cursor: 'text'
          }
        },
        'address': {
          fontStyle: 'normal'
        },
        'abbr[title]': {
          cursor: 'help'
        },
        'hr': {
          marginTop: theme('spacing.5'),
          marginBottom: theme('spacing.5'),
          borderTopWidth: '1px',
          borderTopColor: theme('colors.gray.300')
        },
        'ul': {
          paddingLeft: theme('spacing.10'),
          listStyle: 'disc'
        },
        'ol': {
          paddingLeft: theme('spacing.10'),
          listStyle: 'decimal',
        },
        'img': {
          margin: '0 auto',
          maxWidth: '100%'
        },
        'pre': {
          overflow: 'auto'
        },
        'span': {
          fontFamily: 'inherit'
        },
        'table': {
          borderSpacing: 0
        },
        'tr, td': {
          padding: 0
        },
        'dt': {
          fontWeight: theme('fontWeight.semibold')
        },
        'dd': {
          marginLeft: 0
        },
        'b, strong': {
          fontWeight: theme('fontWeight.bold')
        },
        '[disabled]': {
          cursor: 'default'
        }
      })
    }),
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.ellipsis-overflow': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        '.break-long-string': {
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word',
          hyphens: 'auto'
        },
        '.clearfix': {
          '&:before, &:after': {
            content: '',
            display: 'table',
            clear: 'both'
          }
        },
        '.fixed-cover': {
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        '.absolute-cover': {
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },

        //deprecated classes from bootstrap that need removed
        '.small': {
          fontSize: theme('fontSize.sm')
        },
        '.text-uppercase': {
          textTransform: 'uppercase'
        },
        '.text-lowercase': {
          textTransform: 'lowercase'
        },

        //classess that are not deprecated/are useful but are opinionated.
        '.list-unstyled': {
          paddingLeft: 0,
          listStyle: 'none'
        },
        '.list-inline': {
          paddingLeft: 0,
          listStyle: 'none',
          marginLeft: '-5px',
          marginRight: '-5px',

          '> li': {
            display: 'inline-block',
            paddingRight: '5px',
            paddingLeft: '5px'
          }
        }

      }, ['responsive', 'hover']);
    }),

    plugin(({ addComponents, theme }) => {

      addComponents({
        '.copy-block': {
          'h1, h2, h3, h4, h5, h6, p, ul, ol, address, dl': {
            marginTop: theme('spacing.5'),
            marginBottom: theme('spacing.5')
          },
          'ul ul, ol ol, ol ul, ul ol': {
            margin: 0
          },
          'a': {
            textDecoration: 'underline'
          }
        },

        '.container, .container-fluid, .container-fluid-xs, .container-fluid-sm, .container-fluid-md, .container-fluid-lg': {
          paddingLeft: '25px', //these need to be set to the highest value that f-grid can have. gutter-50/2
          paddingRight: '25px',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        '.container': {
          [`@media (min-width: ${theme('screens.sm')})`]: {
            maxWidth: theme('screens.sm')
          },
          [`@media (min-width: ${theme('screens.md')})`]: {
            maxWidth: theme('screens.md')
          },
          [`@media (min-width: ${theme('screens.lg')})`]: {
            maxWidth: theme('screens.lg')
          }
        },
        '.container-fluid-xs': {
          maxWidth: theme('screens.xs')
        },
        '.container-fluid-sm': {
          maxWidth: theme('screens.sm')
        },
        '.container-fluid-md': {
          maxWidth: theme('screens.md')
        },
        '.container-fluid-lg': {
          maxWidth: theme('screens.lg')
        }
      });
    })

  ],
};
