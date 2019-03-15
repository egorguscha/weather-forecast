import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

`
