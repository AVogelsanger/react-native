import React, {
    createContext,
    useReducer,
    useEffect
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