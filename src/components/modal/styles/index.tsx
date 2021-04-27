import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors';
import { Fonts } from '../../../assets/constants';

export const Container = styled.View`
    background-color: ${colors.background_dark};
    border-radius: 3px;
    padding: 10px;
`;
export const Header = styled.View`
    align-items: center;
    margin-bottom: 10px;
`;
export const Title = styled.Text`
    font-family: ${Fonts.family};
    font-size: ${Fonts.titles}px;
    color: ${colors.font_light};
    font-weight: bold;
`;
export const Body = styled.View`
    align-items: center;
`;
export const BIcon = styled(Icon)`
    font-size: 40px;
    color: ${colors.font_light};    
`;
export const BMessage = styled.Text`
    font-family: ${Fonts.family};
    font-size: ${Fonts.normal}px;
    color: ${colors.font_light};
`;
export const Button = styled.TouchableOpacity`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.button_dark};
    border-radius: 3px;
`;

export const ButtonText = styled.Text`
    font-family: ${Fonts.family};
    font-size: ${Fonts.normal}px;
    color: ${colors.font_light};
    font-weight: bold;
`;