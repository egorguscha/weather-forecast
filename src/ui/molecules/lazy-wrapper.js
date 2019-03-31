import React from 'react'

const LazyWrapper = ({ children }) => {
  return <div>{children()}</div>
}

export default LazyWrapper
