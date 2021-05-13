import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { primary, primaryGradient, secondary, common } from './colors'

const fontFamily = ['Noto Sans JP', 'Roboto'].join(',')
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary,
      secondary,
      common,
    },
    shape: {
      borderRadius: 5,
    },
    typography: {
      fontFamily,
      fontSize: 12,
      subtitle1: {
        letterSpacing: '2px',
      },
      subtitle2: {
        letterSpacing: '1.6px',
      },
    },
    overrides: {
      MuiFab: {
        secondary: { background: primaryGradient },
        root: {
          fontSize: '1.2em',
        },
      },
      MuiButton: {
        root: {
          fontSize: '1.1em',
        },
      },
      MuiCssBaseline: {
        '@global': {
          html: {
            WebkitFontSmoothing: 'auto',
            scrollBehavior: 'smooth',
            fontFamily: fontFamily,
          },
          body: {
            fontFamily: fontFamily,
          },
        },
      },
    },
    props: {
      MuiButton: {
        variant: 'contained',
        color: 'primary',
        disableElevation: false,
        disableRipple: false,
        size: 'medium',
      },
      MuiTextField: {
        variant: 'outlined',
        color: 'secondary',
      },

      MuiTypography: {
        color: 'primary',
      },
      MuiCircularProgress: {
        size: 80,
        thickness: 3,
      },
      MuiFab: {
        color: 'secondary',
        size: 'large',
        variant: 'extended',
      },
    },
  })
)

theme.typography.h1 = {
  fontFamily,
  fontSize: '5.2em',
  [theme.breakpoints.down('md')]: {
    fontSize: '5.5em',
  },
}

export default theme
