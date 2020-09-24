import React,{
    useContext,
    useState
} from 'react';

import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

import { Input } from 'react-native-elements';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
    faHeart as farHeart,
    faComment as farComment
} from '@fortawesome/free-regular-svg-icons'

import { 
    faHeart as fasHeart,
    faPaperPlane as fasPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import PostFooterIcon from './PostFooterIcon';

import Comment from '../Comment/Comment';

import UserContext from '../../context/userContext';
import PostContext from '../../context/PostContext';

const PostFooter = (props) => {

    const {ACTIONS, dispatch} = useContext(PostContext);

    const {userLogado} = useContext(UserContext);

    const {post} = props;

    const curtido = post.curtidas.indexOf(userLogado) > -1;

    const [exibirInputComentario, setExibirInputComentario] = useState(false);

    const [comentario, setComentario] = useState('');
    const handlerCurtir = () => {
        dispatch({ type : ACTIONS.LIKE_POST, payload : {
            postID : post.id,
            userLogado
        }});
    }

    const handlerComentar = () => {
        if ( comentario.trim().length === 0) {
            alert('Escreva um comentário');
            return;
        }
            dispatch({
                type : ACTIONS.INSERT_POST_COMMENT,
                payload : {
                    postID : post.id,
                    comentario,
                    userLogado
                }
            })
        setComentario('');
    }
    

    return (
        <View style={ styles.container }>
            <View style={ styles.containerIcon }>
                <PostFooterIcon 
                    color={ (curtido) ? '#F00' : '#000'}
                    icon={ (curtido) ? fasHeart : farHeart }
                    onPress={ () => handlerCurtir() }/> 
                
                <PostFooterIcon 
                    icon={ farComment }
                    onPress={() => setExibirInputComentario( ! exibirInputComentario)}/>
            </View>

            { exibirInputComentario && 
                <View style={ styles.containerCommentInput }>
                    <Input 
                        onChangeText={(txt) => setComentario(txt)}
                        value={ comentario } />

                    <TouchableOpacity 
                        onPress={ () => handlerComentar() }>
                        <FontAwesomeIcon
                            icon={fasPaperPlane}
                            size={24}/>
                    </TouchableOpacity>
                </View>
            }

            <FlatList 
                data={ post.comentarios }
                renderItem={ ({item}) => <Comment post={ post } comment={ item } /> }
                keyExtractor={ (item) => item.id.toString() }
                style={ styles.comentarios }/>
        </View>
    );
};

export default PostFooter;

const styles = StyleSheet.create({
    comentarios : {
        marginTop : 8
    },
    container : {
        paddingHorizontal : 8
    },
    containerIcon : {
        flexDirection : 'row'
    },
    containerCommentInput : {
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 8
    },
    containerIcons : {
        flexDirection : 'row'
    }
});