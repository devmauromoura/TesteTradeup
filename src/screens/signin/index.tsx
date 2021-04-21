import React, {useState} from 'react'
import {Safe} from '../styles'
import {BackOne, BackTwo, Body, Container, Header, Logo, Title} from './styles'

import logotradeup from '../../assets/images/logotradeup.png'
import Inp from './components/input'
import Button from '../../components/button'
import colors from '../../assets/colors'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Safe>
      <BackOne>
        <Logo source={logotradeup} resizeMode="contain" />
      </BackOne>
      <Container>
        <Header>
          <Title>Login</Title>
        </Header>
        <Body>
          <Inp
            title="E-mail"
            icon="email"
            value={email}
            set={value => setEmail(value)}
            color={colors.button_dark}
          />
          <Inp
            title="Senha"
            icon="key"
            value={email}
            set={value => setEmail(value)}
            color={colors.button_dark}
          />
          <Button title="Acessar" action={() => {}} />
        </Body>
      </Container>
      <BackTwo />
    </Safe>
  )
}

export default SignIn
