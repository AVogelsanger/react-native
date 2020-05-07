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

import colors from '../../../config/colors.json'

import config from '../../../app.json'

export default class App extends React.Component {
    render() {
      return(
        <View style={ style.container}> 
          <StatusBar backgroundColor='#ED145B'/>

            <FontAwesomeIcon
            color={ colors.magenta } 
            icon={ faImage } 
            size={32}
            style={{ marginRight : 8 }}/>

            <Text style={ config.displayName }>FIAPGran</Text>
        </View>
      )
    }
  }

