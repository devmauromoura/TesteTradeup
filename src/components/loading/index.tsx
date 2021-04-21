import React from 'react'
import colors from '../../assets/colors'
import {Container, Ldg, Logo} from './styles'

import logotradeup from '../../assets/images/logotradeup.png'

const Loading = () => {
  return (
    <Container>
      <Logo source={logotradeup} resizeMode="contain" />
      <Ldg size={100} color={colors.font_light} />
    </Container>
  )
}

export default Loading
