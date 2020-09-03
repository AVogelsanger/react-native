import React from 'react';

import {
  SafeAreaView
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './screens/Cadastro';
import Login from './screens/Login';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={ Login }
          name="Login" 
          options={{ headerShown : false }}/>

        <Stack.Screen 
          component={ Cadastro }
          name="Cadastro"/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;