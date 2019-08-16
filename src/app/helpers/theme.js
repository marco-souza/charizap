import get from 'lodash/get'

const theme = {
  colors: {
    primary: '#786efd',
    secondary: '#2e364e',
    secondaryVariant: '#bdc4d3',
    success: '#00d756',
    error: '#fd595c',
    alert: '#fff793',
    white: '#FFFFFF',
    none: 'none',
    stroke: '#dfe6ff',
    modalHeader: '#F3F7FE',
    background: '#f8f9ff',
  },
  fonts: {
    segoe: 'Segoe UI',
    robotoDefault: 'Roboto',
    robotoMontserrat: 'Montserrat',
    fallback: 'Helvetica Neue, Arial, sans-serif',
  },
}

export const getPropsColor = (defaultColor = 'primary') =>
  ({ color = defaultColor }) => getColor(color)

export const getPropsBackground = (defaultColor = 'background') =>
  ({ background = defaultColor }) => getBgColor(background)

export const getFont = font =>
  get(theme, `fonts.${font}`, 'fonts.fallback')

export const getColor = color =>
  get(theme, `colors.${color}`, 'primary')

export const getBgColor = color =>
  get(theme, `colors.${color}`, 'background')

export default theme
