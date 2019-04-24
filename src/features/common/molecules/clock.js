import React, { Component } from 'react'
import { Time } from '@ui/atoms'

export class Clock extends Component {
  state = {
    time: new Date()
  }
  updateClock = () => {
    this.setState({ time: new Date() })
  }
  componentDidMount() {
    this.timerId = setInterval(this.updateClock, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return <Time>{this.state.time.toLocaleTimeString()}</Time>
  }
}
