import React, {
  useEffect,
  useState
 } from 'react';
  
 import {
  Button,
  Text,
  View
 } from 'react-native';
  
 import auth from '@react-native-firebase/auth';
  
 const App = (props) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  const onAuthStateChange = (_user) => {
  setUser(_user);
  if ( initializing ) {
  setInitializing(false);
  }
  }
  
  useEffect(() => {
  return auth().onAuthStateChanged(onAuthStateChange);
  }, []);
  
  if ( initializing ) {
  return null;
  }
  
  if ( ! user ) {
  return (
  <Button 
  onPress={ () => auth().signInAnonymously() }
  title="Acessar" />
  )
  }
  
  return (
  <View>
    <Text>Olá usuário</Text>

    <Button 
      onPress={ () => auth().signOut() }
      title="Sair" />
  </View>
  );
 }
  
 export default App;