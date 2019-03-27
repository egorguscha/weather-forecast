import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: minmax(2.5rem, auto);
  background: #011627;
  color: #fff;
  padding: 1.2rem;
  grid-template-areas: 'time menu';
  box-sizing: border-box;
`

export const HeaderBox = ({ children }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
)

HeaderBox.propTypes = {
  children: PropTypes.node.isRequired
}
