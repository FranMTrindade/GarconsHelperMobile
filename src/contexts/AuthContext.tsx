import React, {useState, createContext, ReactNode, useEffect} from 'react';
import { api } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean;
    signIn: ( credentials: SignInProps ) => Promise<void>;
    signOut: () => Promise<void>;
    loading: boolean;
    loadingAuth: boolean;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthProviderProps = {
    children : ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children} : AuthProviderProps){
   
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setloading] = useState(true)

    const  isAuthenticated = !!user.name;

    useEffect(() => {

        async function getUser(){
            
            const userInfo = await AsyncStorage.getItem('@key')
            let hasUser : UserProps = JSON.parse(userInfo || '{}')

            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })
            }

            setloading(false)
        }

        getUser();
    })

    async function signIn({ email, password }: SignInProps){
        setLoadingAuth(true);

        try{
            const response = await api.post('/login', {
                email,
                password
            })

           const {id, name, token} = response.data

           const data = {
            ...response.data
           }

           await AsyncStorage.setItem('@key', JSON.stringify(data))

           api.defaults.headers.common['Authorization'] = `Bearer ${token}`

           setUser({
            id,
            name, 
            email,
            token
           })

           setLoadingAuth(false);

        }catch(err){
            console.log("erro ao acessar", err)
            setLoadingAuth(false)
        }

    }

    async function signOut(){
        await AsyncStorage.clear()
        .then(() => {
            setUser({
                id: '',
                name: '',
                email: '',
                token: '',
            })
        })
    }
    
    return(  
        <AuthContext.Provider value={{user, isAuthenticated, signIn, loading, loadingAuth, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}