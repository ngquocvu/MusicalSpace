import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    boxShadow: string
    colors: {
      common: {
        black: string
        white: string
      }
      primary: string
      secondary: string
      background: string
      accent: string
      button: string
      btnBackground: string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
