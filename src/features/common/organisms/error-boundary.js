import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends Component {
  componentDidCatch(error, info) {
    console.log(1)
    console.log(error)
    console.log(info)
  }
  render() {
    return this.props.children
  }
}
