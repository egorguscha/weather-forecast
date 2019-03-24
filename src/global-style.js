import { createGlobalStyle } from 'styled-components'
import { NormalizeCss } from './normalize-css'
export const GlobalStyle = createGlobalStyle`

${NormalizeCss}

@font-face {
  font-family: 'Roboto';
  src: url('./fonts/Roboto/Roboto-Regular.ttf') fromat('ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Roboto';
  src: url('./fonts/Roboto/Roboto-Light.ttf') fromat('ttf');
  font-weight: 300;
}
@font-face {
  font-family: 'Roboto';
  src: url('./fonts/Roboto/Roboto-Bold.ttf') fromat('ttf');
  font-weight: 600;
}
html,body {
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  background: #f5f5f5;
  color: #111
}
a {
  text-decoration:none;
}
ul,ol {
  margin:0;
  padding:0;
  list-style:none;
}
`
