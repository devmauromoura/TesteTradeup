import styled from 'styled-components';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../../assets/colors';
import { Fonts } from '../../../../../assets/constants';


export const Container = styled.View`
    width: 100%;
    margin-bottom: 30px;
`;
export const Title = styled.Text`
    font-family: ${Fonts.family};
    font-weight: bold;
    color: ${props => props.color ? props.color : colors.background_dark};
`;
export const TInput = styled.TextInput`
    border-bottom-width: 1px;
    border-color: ${props => props.color ? props.color : colors.button_dark};
    width: 100%;
`;
export const Icon = styled(Icons)`
    font-size: ${Fonts.titles}px;
    color: ${props => props.color ? props.color : colors.background_dark};
    margin-right: 50px;
`;