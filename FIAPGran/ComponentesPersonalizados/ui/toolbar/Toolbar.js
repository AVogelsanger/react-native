import React from 'react'

import {
    StatusBar,
    Text,
    View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
  faImage
} from '@fortawesome/free-regular-svg-icons'

import style from './StyleSheet'


export default class App extends React.Component {
    render() {
      return(
        <View style={ style.container}> 
          <StatusBar backgroundColor='#ED145B'/>

            <FontAwesomeIcon
            color='#ED145B' 
            icon={ faImage } 
            size={32}
            style={{ marginRight : 8 }}/>

            <Text style={{ fontSize : 18, fontWeight : 'bold' }}>FIAPGran</Text>
        </View>
      )
    }
  }

