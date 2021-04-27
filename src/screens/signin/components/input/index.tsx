import React, {useState} from 'react';
import {
  Container,
  HideButton,
  HideText,
  Icon,
  HideIcon,
  InputContainer,
  TInput,
  Title,
} from './styles';
import IInput, { IHide } from './typescript';

const Inp = (props: IInput) => {
  const [hide, setHide] = useState<IHide>(true);
  return (
    <Container>
      <Title color={props.color}>{props.title}</Title>
      <InputContainer>
        <Icon name={props.icon} color={props.color} />
        {props.hide ? (
          <TInput
            value={props.value}
            onChangeText={props.set}
            keyboardType={props.keyboardType}
            color={props.color}
            secureTextEntry={hide}
          />
        ) : (
          <TInput
            value={props.value}
            onChangeText={props.set}
            keyboardType={props.keyboardType}
            color={props.color}
          />
        )}
      </InputContainer>
      {props.hide ? (
        <HideButton onPress={() => setHide(!hide)}>
          <HideText>{hide ? 'Mostrar senha' : 'Ocultar Senha'}</HideText>
          <HideIcon name={hide ? 'eye' : 'eye-off'} />
        </HideButton>
      ) : null}
    </Container>
  );
};
export default Inp;
