import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { GlobalStyle } from './global-style'
import { NormalizeCss } from './normalize-css'

const root = document.getElementById('root')
const render = () =>
  ReactDOM.render(
    <>
      <NormalizeCss />
      <GlobalStyle />
      <App />
    </>,
    root
  )

render()
