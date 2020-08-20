import AsyncStorage from '@react-native-community/async-storage';

const insertString = async (key, value, callback = null) => {
    try {
        await AsyncStorage.setItem(key, value, callback);
    } catch ( e ) {
        throw new Error('Erro ao inserir ao BD.')
    }
}

const insertObject = async (key, value, callback = null) => {
    try {
        const jsonValue = JSON.stringify(value);
        insertString(key, jsonValue, callback);  
    } catch ( e ) {
        throw new Error('Erro ao inserir o obj no BD!');
    }
}

const read = async (key, callback = null) => {
    try {
        await AsyncStorage.getItem(key, callback);
    } catch ( e ) {
        throw new Error('Erro ao ler o dado do BD!');
    }
}

export { insertString, insertObject, read }; 