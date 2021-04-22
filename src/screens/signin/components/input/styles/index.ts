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
export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TInput = styled.TextInput`
    border-bottom-width: 1px;
    border-color: ${props => props.color ? props.color : colors.button_dark};
    width: 100%;
    padding-left: 25px;
    font-size: ${Fonts.normal}px;
`;
export const Icon = styled(Icons)`
    font-size: ${Fonts.titles}px;
    color: ${props => props.color ? props.color : colors.background_dark};
    margin-right: 50px;
    position: absolute;
`;

export const HideIcon = styled(Icons)`
    font-size: ${Fonts.titles}px;
    color: ${colors.background_dark};
`;

export const HideButton = styled.TouchableOpacity` 
    align-self: flex-end;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const HideText = styled.Text`
    font-family: ${Fonts.family};
    color: ${colors.text_blue};
    margin-right: 5px;
`;