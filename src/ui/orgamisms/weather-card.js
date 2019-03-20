import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { WeatherCardHead } from '../molecules'

const WeatherCardWrapper = styled.div`
  border-radius: 25px;
  margin: 0 0 2.5rem 0;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
`
const WeatherParamList = styled.div`
  background: #fff;
  padding: 1.5rem 2rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`

export const WeatherCard = ({ children }) => (
  <WeatherCardWrapper>
    <WeatherCardHead />
    <WeatherParamList>{children}</WeatherParamList>
  </WeatherCardWrapper>
)

WeatherCard.defaultProps = {}

WeatherCard.propTypes = {}
