import React from 'react'
import {
  StyleSheet,
  Switch,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'

import imgNatureza from './assets/img/natureza.jpg'

export default class App extends React.Component {

  state = {
    isEnabled : false
  }

  render() {
    return (
      <View style={{padding : 16}}>
        <TouchableHighlight
          activeOpacity={0.5} 
          onPress={ _ => alert('TouchableHighlight pressionado!')}
          underlayColor='yellow'>

          <Text 
            numberOfLines={1}
            ellipsizeMode='tail'
            selectable={true}>
            Lorem impsum dolor sit amet, consectetur adipiscing elit.
            Nunc felis lacus, tristique id eros et, consectetur
            ullamcorper magma, Duis commodo vivera arnare.
          </Text>
        </TouchableHighlight>

        <TextInput 
          autoFocus={true}
          editable={true}
          keyboardType='numeric'
          maxLength={ 3 }
          onBlur={ _ => alert('Campo perdeu o foco')}
          onChangeText={ value => alert(value) }
          onFocus={ _ => alert('Campo recebeu o foco')}
          placeholder='Digite sua idade'
          style={ styles.input}/>

        <TextInput 
          multiline={true}
          style={ [styles.input, styles.inputMultiline] }
          textAlignVertical='top'/>  

        {/*<Image
          source={ { uri : 'https://picsum.photos/id/237/200/300' } }
        style={ {height : 300, width : 200} }/>  */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ _ => alert('TouchableOpacity pressionado')}>
        <Image 
          resizeMode='cover'
          source={ imgNatureza }
          style={ { height : 200, width : 200} }/>
        </TouchableOpacity>

        <Button 
          color='#F00'
          title="Clique-me"
          onPress={ _ => alert('Botão pressionado') } />

          <Switch 
            value={this.state.isEnabled}
            onValueChange={ value => {
              this.setState({ isEnabled : !this.state.isEnabled })
            }}
            trackColor={ { true : '#FFF', false : '#333'} }
            thumbColor='green'/> 

      </View>
    )
  }
}

const styles = StyleSheet.create({
  input : {
    backgroundColor : 'yellow',
    borderColor : '#DDD',
    borderWidth : 1,
    color: 'red',
    marginVertical: 8,
    paddingHorizontal : 8
  },
  inputMultiline : {
    height : 200
  }
})