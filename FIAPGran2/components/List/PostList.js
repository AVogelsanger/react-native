import React, { useContext } from 'react';

import {
    FlatList,
    Text
} from 'react-native';

import PostContext from '../../context/PostContext';

import Post from '../Post/Post'

const PostList = (props) => {
    const {posts} = useContext(PostContext);

    return (
        <FlatList
            data={posts}
            renderItem={ ({item}) => <Post post={item}/> }
            keyExtractor={ (item) => item.id.toString() }/>
    )
}

export default PostList;