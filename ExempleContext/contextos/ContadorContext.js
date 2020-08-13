import React, {createContext, useReducer} from 'react';

const ContadorContext = createContext();

const ACTIONS = {
    INCREMENTAR : "INCREMENTAR", 
    DECREMENTAR : "DECREMENTAR",
    RESETAR : "RESETAR"
};
  
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENTAR : 
        return state + 1;
        case ACTIONS.DECREMENTAR : 
        return state - 1;
        case ACTIONS.RESETAR : 
        return 0;
        default :
        return state;      
    }
}

const ContadorProvider = (props) => {
    let [contador, dispatch] = useReducer(reducer, 0);

    return(
        <ContadorContext.Provider value={{contador, dispatch, ACTIONS }}>
            {props.children}
        </ContadorContext.Provider>
    );
};

export {ContadorProvider};
export default ContadorContext;
