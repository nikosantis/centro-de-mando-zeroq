import React from 'react'
import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.png'

export const Header = () => (
  <HeaderContainer>
    <img src={Logo} alt='Control' />
  </HeaderContainer>
)
