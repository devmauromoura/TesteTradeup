import React from 'react';
import { Container, Icon, TInput, Title } from './styles';
import IInput from './typescript';

const Inp = (props: IInput) => {
    return(
        <Container>
            <Title color={props.color}>{props.title}</Title>
            <TInput 
                value={props.value} 
                onChangeText={props.set}
                keyboardType={props.keyboardType}
                color={props.color}
            >
                <Icon name={props.icon} color={props.color}/>
            </TInput>
        </Container>
    );
};

export default Inp;