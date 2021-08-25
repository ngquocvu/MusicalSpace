import { DefaultTheme } from 'styled-components'
export const lightTheme: DefaultTheme = {
  borderRadius: '15px',
  boxShadow: '2px 2px 4px 0px #cfd8dc',
  colors: {
    common: {
      black: '#111827',
      white: '#ffffff',
    },
    primary: '#6EE7B7',
    secondary: '#F87171',
    background: '#F3F4F6',
    accent: 'hsl(34.9,98.6%,72.9%)',
    button: 'hsl(205.1,100%,36.1%)',
    btnBackground: 'white',
  },
  breakpoints: {
    sm: 'screen and (min-width:640px)',
    md: 'screen and (min-width:768px)',
    lg: 'screen and (min-width:1024px)',
    xl: 'screen and (min-width:1280px)',
  },
}
