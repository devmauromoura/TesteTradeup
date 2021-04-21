import colors from '../../assets/colors';
import {INoHeader,IHeader} from './typescript';
import LogoTitle from './LogoTitle';

export const noHeader: INoHeader = {
  headerShown: false,
};

export const Header: IHeader = {
  headerStyle: {
    backgroundColor: colors.background_dark,
  },
  headerTintColor: colors.font_light,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitle: LogoTitle
};