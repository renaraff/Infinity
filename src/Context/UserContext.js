import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

function UserProvider ({children}) 
{
        const[ usuario, setUsuario ] = useState(null);
        const[logado, setLogado] = useState(false); 

        async function Login( email, senha ) {
            if( email == "isabela@gmail.com" && senha == "1234") 
            {
                await AsyncStorage.setItem( "usuario" , "Isabela")
                setLogado( true );
            }
        }

        async function infoUsuario()
        {
            const usuario = await AsyncStorage.getItem( "usuario" );
            if(usuario) {
            setUsuario( usuario );
            setLogado( true ); 
            }
            
        }
        
        useEffect( () => {
            infoUsuario();
        }, []);


        return (
            <UserContext.Provider value={ {usuario: usuario, logado: logado, Login, infoUsuario} } >
                {children}
            </UserContext.Provider>
        )
}


export default UserProvider;