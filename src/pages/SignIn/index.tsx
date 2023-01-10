import React from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'

export default function SingIn(){
    return(
        <View style={styles.container}>
           
            <Image style={styles.logo}
            source={require('../../assets/logo.png')}/>
            
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Digite seu email"/>
                <TextInput  style={styles.input} placeholder="Sua senha"/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Acessar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'       
    },

    logo:{
        marginBottom: 18
    },
    
    inputContainer:{
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
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8

    },
    
    button:{
        width: '95%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttontext:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026',
    }

    


})