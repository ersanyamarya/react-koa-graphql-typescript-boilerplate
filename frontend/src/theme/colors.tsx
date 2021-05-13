import { SimplePaletteColorOptions } from '@material-ui/core'

const primary: SimplePaletteColorOptions = {
  main: '#FE6B8B',
}

const secondary: SimplePaletteColorOptions = {
  main: '#FF8E53',
}

const common = {
  black: '#333',
  white: '#fefefe',
}

const primaryGradient = `linear-gradient(45deg, ${primary.main} 30%, ${secondary.main}  90%)`
export { primary, secondary, primaryGradient, common }
