import React, { useReducer } from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const ACTIONS = {
  INCREMENTAR : "INCREMENTAR",
  DECREMENTAR : "DECREMENTAR",
  RESETAR : "RESETAR"
};

const reducer = (state, action) => {
  switch ( action.type ) {
    case ACTIONS.INCREMENTAR : 
      return state + 1;
    case ACTIONS.DECREMENTAR :
      return state - 1;  
    case ACTIONS.RESETAR :
      return 0;
    default:
      return state;
  }
}

const App = () => {

  let [contador, dispatch] = useReducer(reducer, 0);
  vscode://vscode.github-authentication/did-authenticate?windowId=1&code=01317ae91223d9fb743f&state=cf016554-d15a-4e41-928c-24a6ab442504
  return(
    <SafeAreaView>
      <Text>Número de cliques: {contador}</Text>
      
      <Button title="Incrementar" onPress={ () => dispatch({ type : ACTIONS.INCREMENTAR }) }/>
      <Button title="Decrementar" onPress={ () => dispatch({ type : ACTIONS.DECREMENTAR })}/>
      <Button title="Resetar" onPress={ () => dispatch({ type : ACTIONS.RESETAR })}/>
    </SafeAreaView>
  );
};

export default App;