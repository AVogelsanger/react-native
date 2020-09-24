import React, {
    createContext,
    useState
} from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
    const [userLogado, setUserLogado ] = useState();
    return (
        <UserContext.Provider value={{ userLogado, setUserLogado }}>
            { props.children }
        </UserContext.Provider>
    )
}
export { UserProvider };
export default UserContext;