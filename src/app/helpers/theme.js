import get from 'lodash/get'

const theme = {
  colors: {
    primary: '#786efd',
    secondary: '#2e364e',
    secondaryVariant: '#bdc4d3',
    success: '#00d756',
    error: '#fd595c',
    alert: '#fff793',
    background: {
      default: '#f8f9ff',
      stroke: '#dfe6ff',
      primary: '#786efd',
      white: '#FFFFFF',
      none: 'none',
      modalHeader: '#F3F7FE',
    }
  },
  fonts: {
    segoe: 'Segoe UI',
    robotoDefault: 'Roboto',
    robotoMontserrat: 'Montserrat',
    fallback: 'Helvetica Neue, Arial, sans-serif',
  },
}

export const getPropsColor = (defaultColor = 'primary') =>
  ({ theme, color = defaultColor }) =>
    theme.colors[color]

export const getPropsBackground = (defaultColor = 'default') =>
  ({ theme, background = defaultColor }) =>
    theme.colors.background[background]

export const getFont = font =>
  get(theme, `fonts.${font}`, 'fonts.fallback')

export const getColor = color =>
  get(theme, `colors.${color}`, 'primary')

export const getBgColor = color =>
  get(theme, `colors.background.${color}`, 'default')

export default theme
