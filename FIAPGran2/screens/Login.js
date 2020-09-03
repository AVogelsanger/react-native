import React,
{
    useCallback,
    useState
} from 'react';

import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera as fasCamera } from '@fortawesome/free-solid-svg-icons';

import InputUserName from "../components/Input/InputUserName";
import InputPassword from "../components/Input/InputPassword";

const Login = (props) => {

    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');

    const handleCadastro = useCallback(() => {
        props.navigation.navigate('Cadastro');
    }, []);
    return(
        <SafeAreaView style={ styles.container }>
            <View style={ styles.logotipo}>
                <FontAwesomeIcon 
                    color="#ed145b"
                    icon={ fasCamera }
                    size={ 128 }/>
                <Text style={ styles.logotipoTexto }>FIAPGRAN 2</Text>
            </View>

            <InputUserName />

            <InputPassword />

            <Button color="#ed145b" title="Login" />

            <TouchableOpacity 
                onPress={useCallback(() => handleCadastro(), [])}
                style={ styles.btnCadastro }>
                <Text>Cadastre-se</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    btnCadastro : {
        alignItems : 'center',
        marginTop : 8
    },
    container : {
        flex : 1,
        justifyContent : 'center',
        padding : 16
    },
    logotipo : {
        alignItems : 'center'
    },
    logotipoTexto : {
        fontSize : 18,
        fontWeight : 'bold'
    }
});