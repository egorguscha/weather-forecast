import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { CardHeadTitle, H2, H3 } from '../atoms'

const WeatherCardHeadWrapper = styled.div`
  background: #46c9b5;
  padding: 1.5rem 2rem;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  color: #fff;
`

export const WeatherCardHead = ({
  weekday,
  month,
  day,
  temperatureMax,
  temperatureMin,
  currentDay
}) => (
  <WeatherCardHeadWrapper>
    <CardHeadTitle currentDay={currentDay}>
      {currentDay ? 'Today' : weekday}
    </CardHeadTitle>
    <H3 fontWeight={300}>
      {month} / {day}
    </H3>
    <H2 fontWeight={300}>
      {temperatureMin}/{temperatureMax} &#8451;
    </H2>
  </WeatherCardHeadWrapper>
)

WeatherCardHead.propTypes = {
  currentDay: PropTypes.bool.isRequired,
  weekday: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired
}
