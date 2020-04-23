import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

export default class CheckBox extends React.Component {

    state = {
        checked : this.props.checked
    }


    render() {

        const styleQuadrado = this.state.checked 
                    ? [ styles.quadrado, styles.quadradoAtivo ]
                    : styles.quadrado

        return (
            <TouchableOpacity
                activeOpacity={ 0.5 }
                onPress={ _ => {
                    let value = !this.state.checked
                    this.setState({checked : value})

                    if ( typeof this.props.onChangeValue === 'function'){
                        this.props.onChangeValue( value )
                    } else {
                        console.warn('A propriedade onChangeValue do CheckBox dese ser declarada')
                    }    
                }}
                style = { styles.container} >
                    <View style={ styleQuadrado }/>
                    <Text style={ styles.texto }>
                        { this.props.text }
                    </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        flexDirection : 'row',
        padding : 8
    },
    quadrado : {
        borderColor : '#BBB',
        borderRadius : 5,
        borderWidth : 1,
        height : 32,
        marginRight : 8,
        width : 32
    },
    quadradoAtivo : {
        backgroundColor : 'green'
    },
    texto : {
        fontSize : 18
    }
})