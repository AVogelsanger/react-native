import React from 'react'

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { 
   faComment as farComment, 
  faHeart as farHeart
} from '@fortawesome/free-regular-svg-icons'

import {
    faHeart as fasHeart
} from '@fortawesome/free-solid-svg-icons'

import style from './StyleSheet'
import color from '../../../config/colors.json'

export default class PostFooter extends React.Component {

    state = {
        curtido : this.props.item.curtidoPorMim
    }

    curtir = () => {
        let curtido = ! this.state.curtido
        this.setState({ curtido })

        let post = this.props.item

        post.curtidoPorMim = curtido

        if ( curtido ) {
            post.likes++
        } else {
            post.likes--
        }
    }

    render() {

        let iconLike = (this.state.curtido) ? fasHeart : farHeart
        let colorLike = (this.state.curtido) ? color.vermelho : color.preto

        return (
            <View style={ style.container }>
                <TouchableOpacity onPress={ _ => this.curtir() }>

                    <FontAwesomeIcon
                        icon={ farComment }
                        size={ 24 }
                        style={ style.iconComment } />

                    <FontAwesomeIcon 
                        color={ colorLike }
                        icon={ iconLike }
                        size={ 24 }
                        style={ style.iconLike }/>
                </TouchableOpacity>

                <Text>Curtidas: { this.props.item.likes }</Text>
            </View>
        )
    }
}
