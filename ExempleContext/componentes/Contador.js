import React, { useContext } from 'react';
import {Text} from 'react-native';

import ContadorContext from '../contextos/ContadorContext';

const Contador = () => {
    const {contador} = useContext(ContadorContext);
    return <Text>Contador: {contador}</Text>;
}

export default Contador;