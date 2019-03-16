import React from 'react'
import PropTypes from 'prop-types'
import { TownTemplate } from '@ui'
import { HeaderContent } from '@features/common'

export const CommonTemplate = ({ header, footer, children }) => (
  <TownTemplate header={header} footer={footer}>
    {children}
  </TownTemplate>
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
