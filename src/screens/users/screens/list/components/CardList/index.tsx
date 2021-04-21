import React from 'react'
import {FlatList} from 'react-native'
import {
  CardContainer,
  DetailContainer,
  Email,
  ID,
  ImgProfile,
  Name,
} from './styles'

const CardList = () => {
  const data = [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
    },
    {
       id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg"
      },
      {
       id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg"
      },
      {
       id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg"
      }
  ]

  const renderItem = ({item}) => {
    return (
      <CardContainer>
        <ImgProfile source={{uri: item.avatar}} resizeMode="contain"/>
        <DetailContainer>
          <Name>
            {item.first_name} {item.last_name}
          </Name>
          <Email>{item.email}</Email>
        </DetailContainer>
        <ID>{item.id}</ID>
      </CardContainer>
    )
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default CardList;
