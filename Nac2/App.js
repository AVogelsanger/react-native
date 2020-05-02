import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image, 
  Button
} from 'react-native';

import imgP0 from './assets/img/p0.png'
import imgP1 from './assets/img/p1.png'
import imgP2 from './assets/img/p2.png'
import imgP3 from './assets/img/p3.png'
import imgP4 from './assets/img/p4.png'
import imgP5 from './assets/img/p5.png'
import imgP6 from './assets/img/p6.png'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{padding : 16 , backgroundColor : 'green'}}>
          <Text style={{ color : 'white', fontSize : 20}}>Galeria de Fotos</Text>
        </View>

        <View style={{ alignSelf : 'center', padding : 15}}>
          <Image 
            source={ imgP0 }/>
        </View>

        <View style={{ padding : 16 }}>
          <Button
            onPress="trocar()"
            color='green'
            title="IMAGEM ANTERIOR" />
         </View>
         <View style={{ padding : 16 }}> 
          <Button 
            color='green'
            title="PRÓXIMA IMAGEM" />
        </View>
  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'yellow',
    flex : 1,
    flexDirection : 'column'
  }
})

var arrayImagens = [
  imgP0,
  imgP1,
  imgP2,
  imgP3,
  imgP4,
  imgP5,
  imgP6
]

function trocar() {
  for (let i = 0; i < arrayImagens.length; i++) {
    const element = array[i] + i ;
    return element;
  }
}