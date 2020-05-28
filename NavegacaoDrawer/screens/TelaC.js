import React from 'react'

import {
    Text,
    View
} from 'react-native'

export default class TelaC extends React.Component {
    render() {

        const {nome} =  this.props.route.params

        return (
            <View>
                <Text>Olá { nome }</Text>
            </View>
        )
    }
}