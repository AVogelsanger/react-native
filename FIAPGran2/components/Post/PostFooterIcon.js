import React from 'react';

import { 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const PostFooterIcon = (props) => {

    return (
        <TouchableOpacity 
            onPress={ props.onPress }
            style={ styles.icon }>
                <FontAwesomeIcon
                    color={ props.color ?? '#000'} 
                    icon={ props.icon }
                    size={ 32 }/>
        </TouchableOpacity>
    );
};

export default PostFooterIcon;

const styles = StyleSheet.create({
    icon : {
        marginRight : 8
    }
});