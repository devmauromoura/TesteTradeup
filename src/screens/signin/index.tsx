import React, {useState} from 'react'
import {Safe, Scroll} from '../styles'
import {
  BackOne,
  BackTwo,
  Body,
  Container,
  GeneralContainer,
  Header,
  Logo,
  Title,
} from './styles'

import logotradeup from '../../assets/images/logotradeup.png'
import Inp from './components/input'
import Button from '../../components/button'
import colors from '../../assets/colors'
import {IState} from './typescript'

const SignIn = () => {
  const [user, setUser] = useState<IState>()

  return (
    <Scroll>
      <Safe>
        <GeneralContainer>
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
                value={user?.email}
                set={value => setUser({...user, email: value})}
                color={colors.button_dark}
              />
              <Inp
                title="Senha"
                icon="key"
                value={user?.password}
                set={value => setUser({...user, password: value})}
                color={colors.button_dark}
                hide
              />
              <Button title="Acessar" action={() => {}} />
            </Body>
          </Container>
          <BackTwo />
        </GeneralContainer>
      </Safe>
    </Scroll>
  )
}

export default SignIn
