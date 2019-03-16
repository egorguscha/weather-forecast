import React from 'react'
import PropTypes from 'prop-types'
import { MainTemplate } from '@ui'
import { HeaderContent } from '../organisms'

export const CommonTemplate = ({ header, footer, children }) => (
  <MainTemplate header={header} footer={footer}>
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
