import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Content } from './components/Content'

import 'bulma/css/bulma.css'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Content />
  </>
)
