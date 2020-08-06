import React, {useState, useEffect} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const Contador = (props) => <Text>Número de cliques: {props.cliques}</Text>

const App = () => {
  let [contador, setContador] = useState(0);
  let [outroState, setOutroState] = useState(0);

  useEffect(() => {
    console.log('Componente renderizado!');

    return () => {
      console.log('Componente desmontado!')
    }
  }, [outroState]); 

  return(
    <SafeAreaView>

      <Contador cliques = { contador }/>

      <Button title="Clique" onPress={ () => setContador(contador + 1) }/>
      <Button title="Outro state" onPress={ () => setOutroState(outroState + 1) }/>
    </SafeAreaView>
  );
};

export default App;