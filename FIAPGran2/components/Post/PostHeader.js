import React from 'react';

import {
    StyleSheet, 
    Text,
    View
} from 'react-native';

import {
    Avatar
} from 'react-native-elements';

const PostHeader = (props) => {

    const {post} = props;

    const avatar = post.perfil && post.perfil.length > 0 
                    ? <Avatar 
                        rounded
                        source={{ uri : post.perfil }}
                        containerStyle={ styles.avatar }/>
                    : <Avatar 
                        rounded
                        source={{ uri : post.username.substring(0, 2).toUpperCase() }}
                        containerStyle={ styles.avatar }/>    

    return (
        <View style={ styles.container }>
            {avatar}
            <Text style={ styles.username }>
                { post.username }
            </Text>
        </View>
    );
};

export default PostHeader;

const styles = StyleSheet.create({
    avatar : {
        backgroundColor : '#CCC', 
        height : 30,
        marginRight : 8
    },
    container : {
        alignItems : 'center',
        flexDirection : 'row',
        padding : 8
    },
    username : {
        fontSize : 16,
        fontWeight : 'bold'
    }
});