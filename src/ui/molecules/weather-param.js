import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WeatherIconParam, LabelParam } from '../atoms'

const WeatherParamWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'param-label param-icon' 'param-text param-icon';
  padding: 1rem 0;
  border-top: 1px solid #eca543;
  &:first-child {
    border-top: none;
  }
`
const WeatherParamText = styled.span`
  grid-area: param-text;
  font-size: 1.2rem;
`

export const WeatherParam = ({ label, value, icon }) => (
  <WeatherParamWrapper>
    <LabelParam>{label}</LabelParam>
    <WeatherParamText>{value}</WeatherParamText>
    <WeatherIconParam
      src="http://openweathermap.org/img/w/10d.png

"
    />
  </WeatherParamWrapper>
)

WeatherParam.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  icon: PropTypes.string
}
