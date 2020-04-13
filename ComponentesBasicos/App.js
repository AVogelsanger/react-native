import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import styles from './Styles'

export default class App extends React.Component {
  // render() renderiza os componentes na tela
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ [styles.texto, styles.textAzul, styles.tamanho1] }>Hello World!</Text>
        <Text style={ [styles.texto, styles.tamanho2] }>I love Jesus Cristo</Text>
        <Text style={ [styles.texto, styles.tamanho3] }>Jesus Cristo love us</Text>
      </View>
    )
  }
}


  