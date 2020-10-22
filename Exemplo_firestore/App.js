import React from 'react';

import { 
  Button,
  Text,
  SafeAreaView
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const App = (props) => {

  const salvar = () => {
    firestore()
    .collection('filmes')
    .add({
      nome : 'Filme ' + Math.random()
    })
    .then(() => {
      alert('Registro criado com sucesso!');
    })
    .catch((error) => {
      alert('Ocorreu um erro!');
    })
  }

  return (
    <SafeAreaView>
      <Button 
        onPress={ () => salvar() }
        title="Salvar"/>
    </SafeAreaView>
  );
};

export default App;