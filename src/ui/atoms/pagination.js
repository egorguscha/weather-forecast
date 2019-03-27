import styled from 'styled-components'
import { ButtonPrimary } from '../atoms'

export const PagButton = styled.a`
  display: inline-block;
  text-align: center;
  transition: 0.2s;
  box-sizing: border-box;
  padding: 10px;

  color: #fff;
  width: 2.5rem;
  height: 2.5rem;

  ${({ active }) =>
    active
      ? `background:#e8911a;
         pointer-events: none;
         cursor: not-allowed;`
      : 'background: #ffc16e'};
  border-radius: 50%;
  user-select: none;
  &:hover {
    background: #ff9f1c;
    cursor: pointer;
  }
  &:active {
    background: #e8911a;
  }
  ${({ disabled }) =>
    disabled &&
    `
    background: #9f9c98;
    cursor: not-allowed;
    pointer-events: none;

  `}
`

export const PaginationWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(11, 3rem);
  justify-item: center;
  justify-content: center;
`
