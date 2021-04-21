import styled from 'styled-components';
import colors from '../../../../../../../assets/colors';
import { Fonts } from '../../../../../../../assets/constants';

export const CardContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    padding: 10px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${colors.shadow};
`;

export const ImgProfile  = styled.Image`
    height: 75px;
    width: 75px;
    border-radius: 5px;
`;
export const DetailContainer = styled.View``;
export const Name = styled.Text`
    font-family: ${Fonts.family};
    font-size:  ${Fonts.titles}px;
    font-weight: bold;
    color: ${colors.font_dark};
`;
export const Email = styled.Text`
    font-family: ${Fonts.family};
    font-size: ${Fonts.normal}px;
    color: ${colors.font_dark};
`;
export const ID = styled.Text`
    font-family: ${Fonts.family};
    font-size: ${Fonts.titles}px;
    font-weight: bold;
    color: ${colors.font_dark};
`;
