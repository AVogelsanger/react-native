import React, { useCallback, useMemo, useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const listaUnica = new Set();

const App = (props) => {

  let [ texto, setTexto ] = useState('');
  let [ lista, setLista ] = useState([]);

  const handleSalvar = useCallback((lista, texto) => {
    setLista([...lista, texto]);
    setTexto('');
  }, []);

  const listagem = useMemo(() => {

    console.log('useMemo executado!');

    return(
      <FlatList 
        data={ lista }
        renderItem={ ({ item }) => <Text>{item}</Text>}
        keyExtractor={ ( item ) => item + (Math.random() * 100000000)}/>
    );
  }, [lista]);

  listaUnica.add(handleSalvar);
  console.log(listaUnica.size)

  console.log('O componente foi renderizado!');

  return(
    <SafeAreaView style={ styles.container }>

      <TextInput
        onChangeText={ (txt) => setTexto(txt) } 
        style={ styles.input }
        value={ texto }/>

      <Button
        onPress={ () => handleSalvar(lista, texto) } 
        title="Salvar"/>

      {listagem}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
    padding : 16
  },
  input : {
    borderColor : '#ccc',
    borderWidth : 1,
    marginBottom : 8
  }
});