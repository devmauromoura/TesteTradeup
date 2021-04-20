import React from 'react';
import {Container, Logo, Safe} from './styles';

import logotradeup from '../../assets/images/logotradeup.png';

const SignIn = () => {
  return <Safe>
    <Container>
      <Logo source={logotradeup} resizeMode="contain" />
    </Container>
  </Safe>;
};

export default SignIn;
