import React, {useEffect} from 'react';
import {useGeral} from '../../../../context';
import useAPI from '../../../../services/api';
import {Safe} from '../../../styles';
import CardList from './components/CardList';
import {Container} from './styles';

const List = () => {
  const {request} = useAPI();
  const {setUsers, setCLoading, setCModal} = useGeral();

  useEffect(() => {
    setCLoading({visible: true});
    request('/users', 'GET')
      .then(res => {
        const {page, total_pages, data} = res.data;
        setUsers({
          page: page,
          total_pages: total_pages,
          list: data,
        });
        setCLoading({visible: false});
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
  }, []);

  return (
    <Safe>
      <Container>
        <CardList />
      </Container>
    </Safe>
  );
};

export default List;
