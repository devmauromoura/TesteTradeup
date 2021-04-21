import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {noHeader, Header} from '../../components/header';
import SBar from '../../components/statusbar';

import SignIn from '../../screens/signin';
import List from '../../screens/users/screens/list';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <SBar />
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} options={Header} />
        <Stack.Screen name="SignIn" component={SignIn} options={noHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
