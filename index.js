import {AppRegistry} from 'react-native';
import Routes from './src/services/navigation/Routes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
