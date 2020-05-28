import React from 'react'

import {
  NavigationContainer
} from '@react-navigation/native'

import {
  createDrawerNavigator
} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

import TelaA from './screens/TelaA'
import TelaB from './screens/TelaB'
import TelaC from './screens/TelaC'

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='TelaA' component={TelaA} />
          <Drawer.Screen name='TelaB' component={TelaB} />
          <Drawer.Screen name='TelaC' component={TelaC} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}