import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: grid;
  background: #011627;
  color: #fff;
  box-sizing: border-box;
  align-items: center;
  grid-template-rows: minmax(2.5rem, auto);
  padding: 1.2rem;
  justify-content: center;
  z-index: 999;
`

export const Footer = ({ children }) => (
  <FooterWrapper>{children}</FooterWrapper>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}
