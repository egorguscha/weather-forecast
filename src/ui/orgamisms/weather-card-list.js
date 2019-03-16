import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const WeatherCardListWrapper = styled.div`
  display: grid;
  width: 70vw;
  margin: 0 auto 2rem auto;
`

export const WeatherCardList = ({ children }) => (
  <WeatherCardListWrapper>{children}</WeatherCardListWrapper>
)

WeatherCardList.defaultProps = {}

WeatherCardList.propTypes = {}
