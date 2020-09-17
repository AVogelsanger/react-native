import React from 'react';

import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
    faHeart as farHeart,
    faComment as farComment
} from '@fortawesome/free-regular-svg-icons'

import PostFooterIcon from './PostFooterIcon';

const PostFooter = (props) => {

    return (
        <View style={ styles.container }>
            <View style={ styles.containerIcon }>
                <PostFooterIcon icon={ farHeart }/>
                <PostFooterIcon icon={ farComment }/>
            </View>

            <View>

            </View>
            <FlatList />
        </View>
    );
};

export default PostFooter;

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 8
    },
    containerIcon : {
        flexDirection : 'row'
    }
});