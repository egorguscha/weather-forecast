import React from 'react'
import createReactClass from 'create-react-class'
import { Time } from '@ui/atoms'

export const Clock = createReactClass({
  getInitialState() {
    return {
      time: new Date()
    }
  },
  componentDidMount() {
    this.timerId = setInterval(this.updateClock, 1000)
  },
  componentWillUnmount() {
    clearInterval(this.timerId)
  },
  updateClock() {
    this.setState({ time: new Date() })
  },
  render() {
    return <Time>{this.state.time.toLocaleTimeString()}</Time>
  }
})
