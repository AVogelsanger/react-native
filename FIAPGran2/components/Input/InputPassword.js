import React from "react";

import { Input } from "react-native-elements";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock as fasLock } from '@fortawesome/free-solid-svg-icons';

const InputPassword = (props) => {
    return(
    
        <Input
            leftIcon={
                <FontAwesomeIcon 
                color="#333"
                icon={ fasLock }
                size={ 24 }/>
            } 
            placeholder="Digite sua senha:"
        {...props}/>      
    );
};

export default InputPassword;