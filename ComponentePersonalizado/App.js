import React from 'react'
import {
  Button,
  StyleSheet,
  View
} from 'react-native'

import CheckBox from './src/components/CheckBox'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
  faCoffee,
  faPizzaSlice,
  faIceCream
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

export default class App extends React.Component {

  state = {
    gostaDeSorvete : false,
    gostaDePizza   : false
  }

  traduzBooleano = (value) => value ? 'Sim' : 'Não'

  render() {
    return (
      <View>
        <View style={ styles.container }>
          <FontAwesomeIcon color='red' icon={ faCoffee } size={ 80 } />
          <FontAwesomeIcon color='blue' icon={ faIceCream }  size={ 80 } />
          <FontAwesomeIcon color='green' icon={ faPizzaSlice } size={ 80 } />
        </View>
        
        <CheckBox
          onChangeValue={ (value) => this.setState({ gostaDeSorvete : value }) }
          text="Você gosta de sorvete?" />

        <CheckBox 
          onChangeValue={ (value) => this.setState({ gostaDePizza : value }) }
          text="Você gosta de Pizza?" />

        <Button 
          onPress={ _ => {
            let gostaSorvete = this.traduzBooleano(this.state.gostaDeSorvete)
            let gostaPizza   = this.traduzBooleano(this.state.gostaDePizza)
            let msg = `Você gosta de sorvete? ${gostaSorvete}\nVocÃª gosta de pizza? ${gostaPizza}`
            alert(msg)
          }}
          title="Salvar" />

          <View style={ styles.container }>
            <FontAwesomeIcon icon={ faFacebook } size={ 30 } />
            <FontAwesomeIcon icon={ faInstagram } size={ 30 } />
            <FontAwesomeIcon icon={ faWhatsapp } size={ 30 } />
            <FontAwesomeIcon icon={ faTwitter } size={ 30 } />
            <FontAwesomeIcon icon={ faYoutube } size={ 30 } />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row', 
    justifyContent : 'space-around', 
    padding : 24
  }
})