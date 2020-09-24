import React, {
    createContext,
    useEffect,
    useReducer
} from 'react';

const ACTIONS = {
    RELOAD_FROM_API : "RELOAD_FROM_API",
    LIKE_POST : "LIKE_POST",
    INSERT_POST_COMMENT : "INSERT_POST_COMMENT",
    REMOVE_POST_COMMENT : "REMOVE_POST_COMMENT"
}

import { getPosts } from '../services/PostService';

const reducer = ( state, action ) => {
    switch ( action.type ) {
        case ACTIONS.RELOAD_FROM_API : {
            return action.payload;
        }
        case ACTIONS.LIKE_POST : {
            let userLogado = action.payload.userLogado;
            let postID = action.payload.postID;
            let post = state.find((item)=> item.id === postID);
            if ( post ) {
                let estaCurtido = post.curtidas.indexOf(userLogado) > -1;
                if ( estaCurtido ) {
                    post.curtidas = post.curtidas.filter((item) => item != userLogado );
                } else {
                    post.curtidas.push(userLogado);
                }
            }
            return [...state];
        }
        case ACTIONS.INSERT_POST_COMMENT : {
            let userLogado = action.payload.userLogado;
            let postID = action.payload.postID;
            let post = state.find((item) => item.id === postID);
            if ( post ) {
                post.comentarios.push({
                    id : post.comentarios.length + 1,
                    username : userLogado,
                    comentario
                });
            }
            return [...state];
        }
        case ACTIONS.REMOVE_POST_COMMENT : {
            let { postID, commentID } = action.payload;
            let post = state.find((item) => item.id === postID);
            if ( post ) {
                post.comentarios = post.comentarios.filter((c) => c.id != commentID);
            }
            return [...state]
        }
    }
}

const PostContext = createContext();

const PostProvider = (props) => {

    const [posts, dispatch] = useReducer(reducer, []);

    // Executa no primeiro render deste componente PostProvider
    useEffect(() => {

        // Busca na API e com os dados alimenta o estado posts
        // deste componente usando o reducer
        getPosts().then((response) => {
            dispatch({ type : ACTIONS.RELOAD_FROM_API, payload : response.data })
            console.log('opa');
        });
    }, []);

    return(
        <PostContext.Provider value={{ posts, dispatch, ACTIONS }}>
            {props.children}
        </PostContext.Provider>
    )
}

export { ACTIONS, PostProvider };
export default PostContext;