import React, {useContext} from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
    faTrashAlt as farTrashAlt,
} from '@fortawesome/free-regular-svg-icons'

import PostContext, { ACTIONS } from '../../context/PostContext';
import UserContext from '../../context/userContext';

const Comment = (props) => {

    const {ACTIONS, dispatch} = useContext(PostContext); 

    const {userLogado} = useContext(UserContext);

    const { comment, post } = props;

    const handlerExcluirComentario = () => {
        dispatch({
            type : ACTIONS.REMOVE_POST_COMMENT,
            payload : {
                commentID : comment.id,
                postID : post.id
            }
        });
    }


    

    return (
        <View style={ styles.container }>
            <Text>
                <Text style={styles.username }>{comment.username}: </Text>
                {comment.comentario}
            </Text>

            { userLogado === comment.username &&
                <TouchableOpacity
                    onPress={() => handlerExcluirComentario() }>
                    <FontAwesomeIcon
                        icon={ farTrashAlt }
                        size={ 24 }/>
                </TouchableOpacity>  
            }

        </View>
    );
};

export default Comment;

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginBottom : 8,
        justifyContent : 'space-between'
    },
    username : {
        fontWeight : 'bold'
    }
});