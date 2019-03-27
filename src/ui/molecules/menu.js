import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  grid-area: menu;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  column-gap: 2rem;
`

export const Menu = ({ children }) => <MenuWrapper>{children}</MenuWrapper>

Menu.propTypes = {
  children: PropTypes.node.isRequired
}
