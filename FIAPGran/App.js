import React from 'react'

import {
  FlatList,
  Image,
  Text,
  View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
  faHeart as farHeart
} from '@fortawesome/free-regular-svg-icons'

import { 
  faHeart as fasHeart
} from '@fortawesome/free-solid-svg-icons'

import Toolbar from './ComponentesPersonalizados/ui/toolbar/Toolbar'

import posts from './data/posts.json'

export default class App extends React.Component {
  render() {
    return(
      <View style={{ flex : 1 }}>
        <Toolbar />

        <FlatList 
         data={ posts }
         renderItem={ ({item}) => (
           <View style={{ marginBottom : 24 }}>
             <View style={{ alignItems : 'center', flexDirection : 'row', padding : 8 }}>
               <Image 
                  source={{ uri : item.user.img }}
                  style={{ borderRadius : 15, height : 30, marginRight : 8, width : 30 }}/>

                  <Text style={{ fontWeight : 'bold' }}>{ item.user.nome } </Text>
             </View>

              <Image 
              source={{ uri : item.img }}
              style={{ height : 250 }}/>

              <Text style={{ padding : 8 }}>{ item.descricao }</Text>

              <View style={{ flexDirection : 'row', paddingHorizontal : 8 }}>
                <FontAwesomeIcon 
                  icon={ farHeart }
                  size={ 24 }
                  style={{ marginRight : 8 }}
                  />
                <Text>Curtidas: { item.likes }</Text>
              </View>

           </View>
          )}/>
      </View>
    )
  }
}