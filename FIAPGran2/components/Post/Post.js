import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const Post = (props) => {
    const {post} = props;

    return (
        <View>
            <PostHeader post={post}/>
            <Image
                source={{ uri : post.imagem }}
                style={{ height : 300 }}/>
            <Text>{post.descricao}</Text>

            <PostFooter post={post}/>    
        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
  descricao : {
      padding : 8
  }  
})