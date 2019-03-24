import styled from 'styled-components'

export const Input = styled.input`
  grid-area: input;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  &:focus {
    outline: none;
  }
`
export const InputSearch = styled(Input)`
  border: 1px solid #67d4c9;
  border-right: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: 0.3s;
  &:focus {
    border-color: #ff9f1c;
  }
`
