import {Dimensions, Plataform} from 'react-native'
import styled from 'styled-components'
import colors from '../../../assets/colors'

export const Safe = styled.SafeAreaView`
  flex: 1;
`

export const BackOne = styled.View`
  height: 35%;
  width: ${Dimensions.get('screen').width}px;
  background-color: ${colors.background_dark};
  align-items: center;
`

export const Logo = styled.Image`
  height: 100px;
  align-self: center;
`

export const BackTwo = styled.View`
  height: 65%;
  width: 100%;
  background-color: ${colors.background_light};
`

export const Container = styled.View`
  position: absolute;
  z-index: 1;
  width: 90%;
  height: 80%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  align-self: center;
  bottom: 30px;
  border-radius: 20px;
  background-color: ${colors.background_light};
  elevation: 8;
`

export const Header = styled.View`
  height: 30%;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
`

export const Body = styled.View`
  height: 60%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
