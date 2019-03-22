import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const WeatherCardWrapper = styled.div`
  border-radius: 25px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  width: 70vw;
  margin: 0 auto 2rem auto;
`

export const WeatherCard = ({ children }) => (
  <WeatherCardWrapper>{children}</WeatherCardWrapper>
)

WeatherCard.defaultProps = {}

WeatherCard.propTypes = {}
