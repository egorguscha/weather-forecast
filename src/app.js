import React from 'react'
import { Header, Footer, Main } from './ui/orgamisms'
import { Grid } from './ui/grid'
import { Container } from './ui/atoms'
import { Search } from './ui/molecules'
export const App = () => (
  <Grid.Wrapper>
    <Header />
    <Main>
      <Container>
        <Search />
      </Container>
    </Main>
    <Footer />
  </Grid.Wrapper>
)
