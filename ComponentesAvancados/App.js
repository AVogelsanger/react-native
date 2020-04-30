import React from 'react'
import {
  Button,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  View
} from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar backgroundColor='red' />

        <View style={{ alignItems : 'center', flex: 1, justifyContent : 'center', padding : 16 }}>
          <Image 
            source={{ uri : 'https://picsum.photos/250/250'}} 
            style={{ alignSelf : 'center', height : 250, width : 250 }}/>

          <TextInput
            placeholder='Digite seu usuário:'/>

          <TextInput 
            placeholder='Digite sua senha:' />

          <Button title='Entrar' />
        </View>
      </KeyboardAvoidingView>
    )
  }
}