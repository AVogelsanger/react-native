import React from 'react'

import {
    Button,
    Text,
    View
} from 'react-native'

export default class TelaB extends React.Component {
    render() {
        return (
            <View>
                <Text>Tela B</Text>

                <Button 
                    onPress={ _ => this.props.navigation.navigate('TelaC', {
                        nome : 'Alexandre Vogel'
                    }) }
                    title='Ir para tela C'/>
            </View>
        )
    }
}