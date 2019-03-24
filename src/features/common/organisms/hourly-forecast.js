import React from 'react'
import PropTypes from 'prop-types'
import { HourlySubItem, ButtonHourly, WeatherIconDaily } from '@ui/atoms'
import { HourlyList, HourlyColumn } from '@ui/molecules'
import { HourlyForecastWrapper } from '@ui/atoms'
import createReactClass from 'create-react-class'
import { Transition } from 'react-transition-group'

export const HourlyForecast = createReactClass({
  getInitialState() {
    return {
      toggle: false
    }
  },
  handleClick() {
    this.setState({ toggle: !this.state.toggle })
  },
  render() {
    const { hourly } = this.props
    const { toggle } = this.state
    return (
      <HourlyForecastWrapper>
        <Transition timeout={0} in={toggle} unmountOnExit>
          {state => {
            return (
              <HourlyList animationState={state} refer={this.hourlyBox}>
                {hourly.map(({ temperature, icon, id, timeHourly }, i) => (
                  <HourlyColumn key={`${id}-s${i}`}>
                    <HourlySubItem>{temperature} &#176;</HourlySubItem>
                    <HourlySubItem>
                      <WeatherIconDaily
                        src={
                          icon &&
                          `https://darksky.net/images/weather-icons/${icon}.png`
                        }
                      />
                    </HourlySubItem>
                    <HourlySubItem>{timeHourly}</HourlySubItem>
                  </HourlyColumn>
                ))}
              </HourlyList>
            )
          }}
        </Transition>
        <ButtonHourly
          borderRadius={[0, 0, 25, 25]}
          hover={'#ff9f1c'}
          initial={'#ffc16e'}
          active={'#e8911a'}
          color={'#fff'}
          onClick={this.handleClick}
        >
          Hourly forecast
        </ButtonHourly>
      </HourlyForecastWrapper>
    )
  }
})

// export const HourlyForecast = ({ hourly }) => {
//   return (
//     <HourlyForecastWrapper>
//       <HourlyList>
//         {hourly.map(({ temperature, icon, id, timeHourly }, i) => (
//           <HourlyColumn key={`${id}-s${i}`}>
//             <HourlySubItem>{temperature} &#176;</HourlySubItem>
//             <HourlySubItem>
//               <WeatherIconDaily
//                 src={
//                   icon && `https://darksky.net/images/weather-icons/${icon}.png`
//                 }
//               />
//             </HourlySubItem>
//             <HourlySubItem>{timeHourly}</HourlySubItem>
//           </HourlyColumn>
//         ))}
//       </HourlyList>
//       <ButtonHourly
//         borderRadius={[0, 0, 25, 25]}
//         hover={'#ff9f1c'}
//         initial={'#ffc16e'}
//         active={'#e8911a'}
//         color={'#fff'}
//       >
//         Hourly forecast
//       </ButtonHourly>
//     </HourlyForecastWrapper>
//   )
// }

HourlyForecast.propTypes = {
  hourly: PropTypes.arrayOf(
    PropTypes.shape({
      temperature: PropTypes.number,
      icon: PropTypes.string,
      timeHourly: PropTypes.string,
      id: PropTypes.number
    })
  )
}
