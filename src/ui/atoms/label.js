import styled from 'styled-components'

export const Label = styled.label`
  grid-area: label;
  margin: 0 0 15px 0;
`
export const LabelParam = styled.label`
  grid-area: param-label;
  color: #a2a2a2;
  margin: 0 0 0.3rem 0;
`

export const FilterRadioLabel = styled.label`
  user-select: none;
  display: inline-block;
  color: ${({ active }) => (active ? '#2ec4b6' : '#fdfffc')};
  transition: .2s
  &:hover {
    color: #2ec4b6;
    cursor: pointer;
  }
`
