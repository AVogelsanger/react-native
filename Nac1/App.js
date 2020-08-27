import React, { useState } from 'react';
import { Button, Image, SafeAreaView, Text, TextInput } from 'react-native';

import user from './img/user.png'

import { insertString, read } from './DBNac'

const App = (props) => {

  let [ logado, setLogado ] = useState(false);

  let [ usuarioCadastro, setUsuarioCadastro] = useState('');
  let [ senhaCadastro, setSenhaCadastro] = useState('');

  let [ usuarioLogin, setUsuarioLogin ] = useState('');
  let [ senhaLogin, setSenhaLogin ] = useState('');

  const handlerCadastrar = () =>{
    insertString(usuarioCadastro, senhaCadastro, (errors)=>{
      if (errors) {
        alert('Error ao cadastrar usuário!');
      } else {
        alert('Usuário cadastrado com sucesso!');
        setUsuarioCadastro('');
        setSenhaCadastro('');
      }
    });
  };

  const handlerEntrar = () => {
    read(usuarioLogin, (errors, dado)=>{
      if (errors) {
        alert('Usuário ou senha incorretos!');
      } else if(dado === senhaLogin){
          alert('Usuário logado!');

          setLogado(true);
      }
    });
  }

  const handlerSair = () => {
    setLogado(false);
    setSenhaLogin('');
    setUsuarioLogin('');
  }


  return(
    <SafeAreaView>

        <Image 
          resizeMode='cover'
          source={ user }
          style={ { height : 50, width : 100, left : 130} }/>

      <Text>Cadastro</Text>
      <TextInput onChangeText={ (txt) => setUsuarioCadastro(txt) } value={usuarioCadastro} 
                 style={ {borderColor : 'gray', borderWidth : 1, marginBottom : 8 } }/>
      <TextInput onChangeText={ (txt) => setSenhaCadastro(txt) } value={senhaCadastro}
                 style={ {borderColor : 'gray', borderWidth : 1, marginBottom : 8 } }/>

      <Button onPress={ () => handlerCadastrar() } title='Cadastrar'/>           

      <Text>Login</Text>
      <TextInput onChangeText={ (txt) => setUsuarioLogin(txt) } value={usuarioLogin} 
                 style={ {borderColor : 'gray', borderWidth : 1, marginBottom : 8 } }/>
      <TextInput onChangeText={ (txt) => setSenhaLogin(txt) } value={senhaLogin}
                 style={ {borderColor : 'gray', borderWidth : 1, marginBottom : 8 } }/>

      <Button onPress={ () => handlerEntrar() } title='Entrar'/>

    { logado && <Button onPress={ () => handlerSair() } title='Sair'/> }
      
    </SafeAreaView>
  );
};

export default App;