import React from 'react';
import {FlatList} from 'react-native';
import { useGeral } from '../../../../../../context';
import useAPI from '../../../../../../services/api';
import {end} from '../../../../../../assets/constants/endpoints';
import {
  CardContainer,
  DetailContainer,
  Email,
  ID,
  ImgProfile,
  Name,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const CardList = () => {
  const navigation = useNavigation();
  const {users, setUsers, setCModal} = useGeral();
  const {request} = useAPI();

  const handleMore = () => {
    const {page, total_pages} = users;
    if(page < total_pages){
      request(`${end.users(`${page+1}`)}`, 'GET').then(res => {
        const {page, total_pages, data} = res.data;
        const oldList = users.list;
        setUsers({
          page: page,
          total_pages: total_pages,
          list: oldList.concat(data)
        });
      })
      .catch(e => {
        const err =
          e && e.response && e.response.data && e.response.data.error
            ? e.response.data.error
            : '';
        setCModal({
          title: 'Atenção!',
          message: `Não foi possível obter a lista de usuários. Error:\n${err}`,
          visible: true,
          timer: true,
        }).
        setCLoading({visible: false});
      });
    }
  };

  const renderItem = ({item}) => {
    return (
      <CardContainer onPress={() => navigation.navigate('Detail', {
        costumer: item
      })}>
        <ImgProfile source={{uri: item.avatar}} resizeMode="contain"/>
        <DetailContainer>
          <Name>
            {item.first_name} {item.last_name}
          </Name>
          <Email>{item.email}</Email>
        </DetailContainer>
        <ID>{item.id}</ID>
      </CardContainer>
    );
  };

  return (
    <FlatList
      data={users.list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={handleMore}
      onEndReachedThreshold={0.1}
    />
  );
};

export default CardList;
