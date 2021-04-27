import React from 'react';
import {Safe, Scroll} from '../styles';
import {
  BackOne,
  BackTwo,
  Body,
  Container,
  GeneralContainer,
  Header,
  Logo,
  Title,
} from './styles';

import logotradeup from '../../assets/images/logotradeup.png';
import Inp from './components/input';
import Button from '../../components/button';
import colors from '../../assets/colors';

import {useNavigation} from '@react-navigation/native';
import {useGeral} from '../../context';
import useAPI from '../../services/api';
import {end} from '../../assets/constants/endpoints';

const SignIn = () => {
  const navigation = useNavigation();

  const {auth, setAuth, setCModal, setCLoading} = useGeral();
  const {email, password} = auth;
  const {request} = useAPI();

  const handleLogin = async () => {
    if (email && email.length > 0 && password && password.length > 0) {
      setCLoading({visible: true});
      request(`${end.login()}`, 'POST', {
        email: email,
        password: password,
      })
        .then(res => {
          const {token} = res.data
          setAuth({...auth, token: token})
          navigation.navigate('List')
          setCLoading({visible: false});
        })
        .catch(e => {
          const err =
            e && e.response && e.response.data && e.response.data.error
              ? e.response.data.error
              : '';
          setCModal({
            title: 'Atenção!',
            message: `Não foi possível realizar o login.\nError: ${err}`,
            visible: true,
            timer: true,
            icon: 'close',
          });
          setCLoading({visible: false});
        });
    } else {
      setCModal({
        title: 'Atenção!',
        message: 'Preencha os campos corretamente!',
        visible: true,
        timer: true,
      });
      setCLoading({visible: false});
    }
  };

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
                value={email}
                set={value => setAuth({...auth, email: value})}
                color={colors.button_dark}
              />
              <Inp
                title="Senha"
                icon="key"
                value={password}
                set={value => setAuth({...auth, password: value})}
                color={colors.button_dark}
                hide
              />
              <Button title="Acessar" action={() => handleLogin()} />
            </Body>
          </Container>
          <BackTwo />
        </GeneralContainer>
      </Safe>
    </Scroll>
  );
};

export default SignIn;
