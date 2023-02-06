import React, { useState} from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParmsList } from '../../Routes/app.routes';

export default function Dashboard(){

    const navigation = useNavigation<NativeStackNavigationProp<StackParmsList>>();
    const [table, setTable] = useState('');

    async function openOrder(){
        if(table === ''){
            return;
        }

        navigation.navigate('Order', {number: table, order_id: 'asçldjalsdjasd'})

    }



    
    return(
        
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Novo Pedido</Text>

          <TextInput 
          style={styles.input}
          placeholder='Numero da mesa' 
          keyboardType='numeric'
          value={table}
          onChangeText={setTable}
          />

          <TouchableOpacity style={styles.button} onPress={openOrder}>
            <Text style={styles.buttonText}>Abrir mesa</Text>
          </TouchableOpacity>
        
        
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    
    title:{
       fontSize: 30,
       fontWeight: 'bold',
       marginBottom: 30
    },

    input:{
            
        width: '90%',
        height: 60,
        backgroundColor: '#C0C0C0',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 22,    
    },

    button:{
        width: '90%',
        height: 50,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        marginVertical: 20,
         justifyContent: 'center',
         alignItems: 'center'
    },

    buttonText:{
        fontSize: 18,
        fontWeight: 'bold'
    }

   
})