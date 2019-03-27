import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '../grid'
import { HeaderBox, Footer } from '../orgamisms'

export const TownTemplate = ({ header, footer, children }) => {
  return (
    <Grid.Wrapper>
      {header && <HeaderBox>{header}</HeaderBox>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </Grid.Wrapper>
  )
}

TownTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}
