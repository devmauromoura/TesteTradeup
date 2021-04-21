import React from 'react'
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
} from './styles'

const Detail = () => {
  return (
    <Container>
      <Header source={{uri: 'https://reqres.in/img/faces/1-image.jpg'}}>
      <CircleID>
          <CircleText>1</CircleText>
      </CircleID>
      </Header>
      <Body>
        <Card>
            <TextContainer>
                <TextTitle>Nome</TextTitle>
                <TextItem>Mauro Moura</TextItem>
            </TextContainer>
            <TextContainer>
                <TextTitle>Nome</TextTitle>
                <TextItem>Mauro Moura</TextItem>
            </TextContainer>
            <TextContainer>
                <TextTitle>E-mail</TextTitle>
                <TextItem>email@email.com</TextItem>
            </TextContainer>
        </Card>
      </Body>
    </Container>
  )
}

export default Detail