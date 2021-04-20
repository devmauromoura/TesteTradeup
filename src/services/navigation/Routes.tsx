import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../../screens/signin';
import {noHeader} from '../../components/header';
import SBar from '../../components/statusbar';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <SBar />
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={noHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
