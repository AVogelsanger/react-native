import React, { useContext } from 'react';
import {Button, View} from 'react-native';

import ContadorContext from '../contextos/ContadorContext';

const Acoes = () => {

    const {dispatch, ACTIONS} = useContext(ContadorContext);
    const acao = (type ) => dispatch({ type });

    return (
        <View>
            <Button title="Incrementar" onPress={() => acao(ACTIONS.INCREMENTAR)}/>
            <Button title="Decrementar" onPress={() => acao(ACTIONS.DECREMENTAR)}/>
            <Button title="Resetar" onPress={() => acao(ACTIONS.RESETAR)}/>
        </View>
    );
};

export default Acoes;