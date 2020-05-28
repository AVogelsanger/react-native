import React from 'react'

import {
  NavigationContainer
} from '@react-navigation/native'

import {
  createStackNavigator
} from '@react-navigation/stack'

const Stack = createStackNavigator()

import TelaA from './screens/TelaA'
import TelaB from './screens/TelaB'
import TelaC from './screens/TelaC'

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='TelaA' 
            component={TelaA} 
            options={{ title : 'HOME' }}/>
          <Stack.Screen 
            name='TelaB' 
            component={TelaB}
            options={{ 
              headerStyle : {
                backgroundColor : '#f4511e'
              },
              headerTintColor : '#FFF',
              headerTitleStyle : {
                fontWeight : 'bold'
              }
            }}/>
            
          <Stack.Screen name='TelaC' component={TelaC}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}