import React from 'react'

import {
  FlatList,
  View
} from 'react-native'

import Toolbar from './ComponentesPersonalizados/ui/toolbar/Toolbar'

import Post from './ComponentesPersonalizados/post/Post'

import posts from './data/posts.json'

import style from './StyleSheet'

export default class App extends React.Component {

  state = {
    posts : posts
  }


  render() {
    return(
      <View style={ style.container }>
        <Toolbar />

        <FlatList 
         data={ this.state.posts }
         renderItem={ ({ item }) => (<Post item={ item }/>) } 
         keyExtractor={ (item) => item.id.toString() }
        />
      </View>
    )
  }
}