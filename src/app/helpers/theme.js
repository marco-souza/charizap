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
    }
  },
  fonts: [
    // TODO: MacOS fonts
    // '-apple-system,',
    // 'BlinkMacSystemFont,',
    '"Segoe UI",',
    '"Roboto-light",',
    '"Helvetica Neue", Arial, sans-serif',
    // TODO: Emoji fonts
    // '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default;',
  ].join(' '),
}

export const getPropsColor = (defaultColor = 'primary') =>
  ({ theme, color = defaultColor }) =>
    theme.colors[color]

export const getPropsBackground = (defaultColor = 'default') =>
  ({ theme, background = defaultColor }) =>
    theme.colors.background[background]

export default theme
