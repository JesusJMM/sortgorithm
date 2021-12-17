import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts:{
    heading: '"Roboto Mono",' + baseTheme.fonts.heading,
    body: '"Roboto Mono",' + baseTheme.fonts.body,
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
})

export default theme;
