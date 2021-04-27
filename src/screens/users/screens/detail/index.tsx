import React from 'react';
import {Safe} from '../../../styles';
import {
  Body,
  Card,
  CircleID,
  CircleText,
  Container,
  Header,
  TextContainer,
  TextItem,
  TextTitle,
} from './styles';


const Detail = (props) => {
  const {route} = props;
  const {costumer} = route.params;

  return (
    <Safe>
      <Container>
        <Header source={{uri: `${costumer.avatar}`}}>
          <CircleID>
            <CircleText>{costumer.id}</CircleText>
          </CircleID>
        </Header>
        <Body>
          <Card>
            <TextContainer>
              <TextTitle>Nome</TextTitle>
              <TextItem>{costumer.first_name} {costumer.last_name}</TextItem>
            </TextContainer>
            <TextContainer>
              <TextTitle>E-mail</TextTitle>
              <TextItem>{costumer.email}</TextItem>
            </TextContainer>
          </Card>
        </Body>
      </Container>
    </Safe>
  );
};

export default Detail;
