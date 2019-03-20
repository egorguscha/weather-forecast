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

export const WeatherIconWrapper = ({ children, icon }) => {
  console.log(children)
  return (
    <IconWrapper devider>
      {icon && <WeatherIcon src={icon} />}
      {children && <IconText>{children} &#176;С</IconText>}
    </IconWrapper>
  )
}

WeatherIconWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string
}
