import React from 'react'

import {
    Button,
    Text,
    View,
} from 'react-native'

export default class TelaA extends React.Component {
    render() {
        return (
            <View>
                <Text>Tela A</Text>

                <Button 
                    onPress={ _ => this.props.navigation.navigate('TelaB') }
                    title='Ir para tela B'/>
            </View>
        )
    }
}