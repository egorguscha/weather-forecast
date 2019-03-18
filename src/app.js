import React from 'react'
import { GlobalStyle } from './global-style'
import { NormalizeCss } from './normalize-css'

import { RouterConfig } from './routes'
export const App = () => (
  <>
    <GlobalStyle />
    <RouterConfig />
  </>
)
