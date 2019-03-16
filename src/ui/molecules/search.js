import React from 'react'
import styled from 'styled-components'
import { ButtonPrimary, InputSearch, Label } from '../atoms'

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr
  grid-template-areas:
    'label .'
    'input button';
`

export const Search = () => (
  <SearchWrapper>
    <Label>Town</Label>
    <InputSearch />
    <ButtonPrimary
      hover={'#ff9f1c'}
      initial={'#ffc16e'}
      active={'#e8911a'}
      color={'#fff'}
      borderRadius={[0, 10, 10, 0]}
    >
      Search
    </ButtonPrimary>
  </SearchWrapper>
)
