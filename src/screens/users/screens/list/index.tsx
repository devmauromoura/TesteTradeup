import React from 'react';
import { Safe } from '../../../styles';
import CardList from './components/CardList';
import { Container } from './styles';

const List = () => {
    return(
        <Safe>
            <Container>
                <CardList />
            </Container>
        </Safe>
    )
}

export default List;