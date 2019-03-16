import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { WeatherIcon } from '../atoms'

const IconWrapper = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  justify-content: center;
  &:first-child {
    ${({ devider }) =>
      devider &&
      `
     border-right: 1px solid #b3b3b3;
    `}
  }
`
const IconText = styled.span``

export const WeatherIconWrapper = ({ children, icon }) => (
  <IconWrapper devider>
    {icon && <WeatherIcon src={icon} />}
    {children && <IconText>{children}</IconText>}
  </IconWrapper>
)

WeatherIconWrapper.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string
}
