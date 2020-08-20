import React, { useState } from 'react';
import { Button, SafeAreaView, TextInput } from 'react-native';

import { insertString, read } from './DB'

const App = (props) => {

  let [ texto, setTexto ] = useState('');

  const handlerSalvar = () => {
    insertString('texto', texto, (errors)=>{
      if (errors) {
        alert('Aconteceu um erro ao salvar!');
      } else {
        setTexto('');
      }
    });
  }

  const handlerRecuperar = () => {
    read('texto', (errors, dado)=>{
      if (errors) {
        alert('Não foi possível ler o BD!');
      } else {
        setTexto(dado);
      }
    })
  }

  return(
    <SafeAreaView>
      <TextInput onChangeText={ (txt) => setTexto(txt) } value={texto}/>

      <Button onPress={ () => handlerSalvar() } title='Salvar'/>
      <Button onPress={ () => handlerRecuperar() } title='Recuperar'/>
    </SafeAreaView>
  );
};

export default App;