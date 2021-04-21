import React from 'react';
import {Btn, Text} from './styles';
import IButton from './typscript';

const Button = (data: IButton) => {
  return (
    <Btn onPress={data.action}>
      <Text>{data.title}</Text>
    </Btn>
  );
};

export default Button;
