import React from 'react'
import { GlobalStyle } from './global-style'
import { ConnectedRouter } from 'connected-react-router'
import { RouterConfig } from './routes'

export const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <RouterConfig />
    <GlobalStyle />
  </ConnectedRouter>
)
