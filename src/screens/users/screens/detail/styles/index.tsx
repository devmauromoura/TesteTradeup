import styled from 'styled-components';
import colors from '../../../../../assets/colors';
import { Fonts } from '../../../../../assets/constants';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.neutral};
`;
export const Header = styled.ImageBackground`
    height: 300px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    
    z-index: 999;
`;
export const Name = styled.Text`
    font-family: ${Fonts.family};
    font-size: ${Fonts.titles}px;
    font-weight: bold;
`;
export const Body = styled.View`
    padding: 10px;
    z-index: 1;
`;

export const Card = styled.View`
    padding: 5px;
    padding-top: 15px;
    background-color: ${colors.background_light};
    border-radius: 5px;
`;

export const TextContainer = styled.View`
    margin-bottom: 10px;
`;

export const TextTitle = styled.Text`
    font-family: ${Fonts.family};
    font-weight: bold;
    font-size: ${Fonts.normal}px;
`;
export const TextItem = styled.Text`
    font-family: ${Fonts.family};
    font-size: 18px;
`;

export const CircleID = styled.View`
    height: 100px;
    width: 100px;
    background-color: ${colors.background_dark};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin-bottom: -45px;
`;
export const CircleText = styled.Text`
    font-family: ${Fonts.family};
    font-weight: bold;
    font-size: ${Fonts.titles}px;
    color: ${colors.font_light};
`;