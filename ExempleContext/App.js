import React, {createContext, useReducer} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

import Contador from './componentes/Contador';
import Acoes from './componentes/Acoes';

import {ContadorProvider} from './contextos/ContadorContext';

const App = () => {
  return (
    <ContadorProvider>
      <SafeAreaView>
      <Contador />
      <Acoes />
    </SafeAreaView>
    </ContadorProvider>
  );
};

export default App;