// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
export const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        height: '100%',
        color: '#8b9bab',
        background: 'white',
      },

      body: {
        overflow: 'scroll',
    },
    
    },
  },
  colors: {
    "900": "#181B23",
    "800": "#1F2029",
    "700": "#353646",
    "600": "#4B4D63",
    "500": "#616480",
    "400": "#797D9A",
    "300": "#9699B0",
    "200": "#B3B5C6",
    "100": "#D1D2DC",
    "50": "#EEEEF2",
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  }
})

