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

  onComment = ( post, comentario ) => {

    const posts = this.state.posts
    const index = posts.indexOf( post )

    post.comentarios.push({
      id : post.comentarios.length + 1,
      nome : "Meu usuário",
      texto : comentario
    })

    posts[index] = post

    this.setState({ posts })

  }

  render() {
    return(
      <View style={ style.container }>
        <Toolbar />

        <FlatList 
         data={ this.state.posts }
         renderItem={ ({ item }) => (
          <Post 
            item={ item }
            onComment={ (post, comentario) => this.onComment(post, comentario) } />
         ) } 
         keyExtractor={ (item) => item.id.toString() }
        />
      </View>
    )
  }
}