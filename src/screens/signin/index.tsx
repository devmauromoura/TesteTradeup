import React, {useState, useCallback} from 'react'
import {Platform} from 'react-native'
import {
  BackOne,
  BackTwo,
  Body,
  Container,
  Header,
  Key,
  Logo,
  Safe,
  Title,
} from './styles'

import logotradeup from '../../assets/images/logotradeup.png'
import Inp from './components/input'
import Button from '../../components/button'
import colors from '../../assets/colors'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(

      <Key behavior={"height"}>
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
      </Key>

  )
}

export default SignIn
