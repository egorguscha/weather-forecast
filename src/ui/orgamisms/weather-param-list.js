import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const WeatherCardList = styled.div`
  background: #fff;
  padding: 1.5rem 2rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

export const WeatherParamList = ({ children }) => (
  <WeatherCardList>{children}</WeatherCardList>
)

WeatherParamList.defaultProps = {}

WeatherParamList.propTypes = {
  children: PropTypes.node.isRequired
}
