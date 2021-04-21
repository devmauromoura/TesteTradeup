import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Btn = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.button_dark};
`;
export const Text = styled.Text`
    font-family: Roboto;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.text_ligth};
`;