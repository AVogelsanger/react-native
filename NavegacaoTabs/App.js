import React from 'react'

import {
  NavigationContainer
} from '@react-navigation/native'
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import TelaA from './screens/TelaA'
import TelaB from './screens/TelaB'
import TelaC from './screens/TelaC'

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor : 'tomato',
            inactiveTintColor : 'gray'
          }}>

          <Tab.Screen name='TelaA' component={ TelaA }/>
          <Tab.Screen name='TelaB' component={ TelaB }/>
          <Tab.Screen name='TelaC' component={ TelaC }/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}