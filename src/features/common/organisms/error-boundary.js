import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

export const ErrorBoundary = createReactClass({
  getInitialState() {
    return {}
  },
  componentDidCatch(error, info) {
    console.log(1)
    console.log(error)
    console.log(info)
  },
  render() {
    return this.props.children
  }
})
