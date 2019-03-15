import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  align-content: space-between;
`
const Column = styled.div`
  border: 2px solid #2ec4b6;
  ${({ gridArea }) => (gridArea ? `grid-area: ${gridArea}` : null)};
`

export const Grid = {
  Wrapper,
  Column
}
