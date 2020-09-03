import React from 'react';

import {
    Button,
    SafeAreaView,
    StyleSheet    
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock as fasLock } from '@fortawesome/free-solid-svg-icons';

import { Input } from "react-native-elements";
import InputUserName from "../components/Input/InputUserName";
import InputPassword from "../components/Input/InputPassword";
import InputEmail from "../components/Input/InputEmail";

const Cadastro = (props) => {
    return(
        <SafeAreaView style={ styles.container }>
            <InputUserName />

            <InputEmail />

            <InputPassword />

            <Input
                leftIcon={
                    <FontAwesomeIcon 
                    color="#333"
                    icon={ fasLock }
                    size={ 24 }/>
                }
                placeholder="Confirme sua senha:"/>

            <Button color="#ed145b" title="Login" />
        </SafeAreaView>
    );
};

export default Cadastro;

const styles = StyleSheet.create({
    container : {
        padding : 16
    }
});