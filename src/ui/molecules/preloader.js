import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const PreloaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`
const PreloaderInner = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 10px solid #eca543;
  border-top: 10px solid transparent;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -2rem 0 0 -2rem;
  z-index: 999;
  animation: ${rotate} 1s linear infinite;
`

export const Preloader = () => {
  return (
    <PreloaderWrapper>
      <PreloaderInner />
    </PreloaderWrapper>
  )
}
