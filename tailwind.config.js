const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('./config/colors');

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    configViewer: {
      baseFontSize: 14
    },
    colors,
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
      serif: ['Caladea', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      fontSize: {
        '8xl': ['5.25rem', { lineHeight: '1' }],
        '9xl': ['6rem', { lineHeight: '1' }]
      }
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
          backgroundColor: theme('colors.beige')
        },
        'body': {
          color: theme('colors.text.DEFAULT'),
          '-webkit-font-smoothing': 'antialiased'
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
          color: theme('colors.heroblue.DEFAULT'),
          textDecoration: 'none',

          /*'&:visited, &:hover, &:active': {
            color: theme('colors.blue.DEFAULT')
          },*/

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
        'sup': {
          fontSize: '60%',
          letterSpacing: 'normal'
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
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
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

        '.scrollbar-light': {
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar:horizontal': {
            height: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(125, 125, 125, 0.2)'
          },
        },

        //make sure we only even have weight normal with serif font (this overrides default heading for now)
        '.font-serif': {
          fontWeight: 'normal',
          letterSpacing: '0.035rem' //custom per design
        },

        //deprecated classes from bootstrap that need removed.
        '.small': {
          fontSize: theme('fontSize.sm')
        },
        '.text-uppercase': {
          textTransform: 'uppercase'
        },
        '.text-lowercase': {
          textTransform: 'lowercase'
        },
        '.l-padded': {
          padding: '20px',
          [`@media (min-width: ${theme('screens.md')})`]: {
            padding: '40px'
          },
        },
        '.l-padded-thin': {
          padding: '10px',
          [`@media (min-width: ${theme('screens.md')})`]: {
            padding: '20px'
          },
        },
        '.l-section': {
          marginTop: '40px',
          [`@media (min-width: ${theme('screens.md')})`]: {
            padding: '20px'
          },
          [`@media (min-width: ${theme('screens.sm')})`]: {
            padding: '10px'
          }
        },
        '.l-section-far': {
          marginTop: '60px',
          [`@media (min-width: ${theme('screens.md')})`]: {
            padding: '40px'
          },
          [`@media (min-width: ${theme('screens.sm')})`]: {
            padding: '20px'
          }
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

        '.container, .container-fluid, .container-fluid-xs, .container-fluid-sm, .container-fluid-md, .container-fluid-lg, .container-fluid-xl': {
          paddingLeft: '15px', //these need to be set to the highest value that f-grid can have. gutter-50/2
          paddingRight: '15px',
          marginRight: 'auto',
          marginLeft: 'auto',
          [`@media (min-width: ${theme('screens.sm')})`]: {
            paddingRight: '20px',
            paddingLeft: '20px'
          },
          [`@media (min-width: ${theme('screens.md')})`]: {
            paddingRight: '25px',
            paddingLeft: '25px'
          }
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
        },
        '.container-fluid-xl': {
          maxWidth: '100rem'
        }
      });
    })

  ]
};
