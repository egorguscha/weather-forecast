import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '../grid'
import { HeaderBox, Footer } from '../orgamisms'

export const MainTemplate = ({ header, footer, children }) => {
  return (
    <Grid.Wrapper fullHeight>
      {header && <HeaderBox>{header}</HeaderBox>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </Grid.Wrapper>
  )
}
