import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FilterButtonWrapper = styled.div``

export const FilterButton = ({ children }) => (
  <FilterButtonWrapper>{children}</FilterButtonWrapper>
)

FilterButton.propTypes = {
  children: PropTypes.node.isRequired
}
