import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '../grid'
import { HeaderBox, Footer } from '../orgamisms'

export const MainTemplate = ({ header, footer, children, fullHeight }) => {
  return (
    <Grid.Wrapper fullHeight={fullHeight}>
      {header && <HeaderBox>{header}</HeaderBox>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </Grid.Wrapper>
  )
}

MainTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool
}
