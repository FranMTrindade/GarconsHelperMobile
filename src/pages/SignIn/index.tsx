import React, {useState, useContext} from "react";
import { Ionicons } from "@expo/vector-icons";

import {View, 
        Text, 
        StyleSheet, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        KeyboardAvoidingView,
        Platform,
        ActivityIndicator,
    } from 'react-native'

import { AuthContext } from "../../contexts/AuthContext";



export default function SingIn(){

    const {signIn, loadingAuth} = useContext(AuthContext)

    const [show, setShow] = useState(true)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    
   async function handleLogin(){

        if(email === '' || password === '' ) {
            return;
        }
        
        await signIn({email, password})
    }

   
    
    return(
      
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container2}>

        <View style={styles.container}>
           
            <Image style={styles.logo}
            source={require('../../assets/logo.png')}/>

            
            
            <View style={styles.inputContainer}>
                
                <TextInput 
                style={styles.input} 
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}  
                />
              
                <TextInput
                style={styles.input} 
                placeholder="Sua senha"
                secureTextEntry={show}  
                value={password}
                onChangeText={setPassword}   
                /> 

                <TouchableOpacity style={styles.icon}  onPress={ () => setShow(!show)}>
                    {show ? 
                        
                        <Ionicons name="eye" size={20} color="#000"/>  :
                        
                        <Ionicons name="eye-off" size={20} color="#000"/>
                    }   
                 </TouchableOpacity>      

                 
           
            </View>

           
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                {loadingAuth ? (
                    <ActivityIndicator size={25} color="#000"/>
                ): (
                    <Text style={styles.buttontext}>Acessar</Text>
                )}        
            </TouchableOpacity>

           

            
        </View>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container2:{
        flex: 1,
    },
    
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    logo:{

        top: -40,
        width: 200,
        height: 200
    },
    
    inputContainer:{
        top: -50,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center', 
        paddingVertical: 32,
        paddingHorizontal: 14,   
    },

    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#C0C0C0',
        marginBottom: 10,
        borderRadius: 4,
        paddingHorizontal: 8

    },
    
    button:{
        top: -50,
        width: '85%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttontext:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },

    icon:{
        left: '41%',
        top: '-33%'
    }

    


})