import React from 'react'
import { SearchWrapper, ButtonPrimary, InputSearch, Label } from '../atoms'

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
