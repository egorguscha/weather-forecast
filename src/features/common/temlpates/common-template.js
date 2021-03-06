import React from 'react'
import PropTypes from 'prop-types'
import { MainTemplate } from '@ui/templates'
import { HeaderContent } from '../organisms'

export const CommonTemplate = ({ header, footer, children, fullHeight }) => (
  <MainTemplate header={header} footer={footer} fullHeight={fullHeight}>
    {children}
  </MainTemplate>
)

CommonTemplate.defaultProps = {
  header: <HeaderContent />,
  footer: 'powered by MURGUT'
}

CommonTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.string,
  children: PropTypes.node
}
