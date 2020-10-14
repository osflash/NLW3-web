import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.primaryText};
    background: ${({ theme }) => theme.colors.background}
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`
