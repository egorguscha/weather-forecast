import styled from 'styled-components'

export const H1 = styled.h1`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`}
`
export const H2 = styled.h2`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`}
`
export const H3 = styled.h3`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`}
`

export const CardHeadTitle = styled(H1)`
  margin-top: 0;
  ${({ currentDay }) => currentDay && `color: #2771ad`}
`
