import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { api } from '../../services/api'
import { StackParmsList } from '../../Routes/app.routes'

type RouteDetailParams = {
    FinishOrder: {
        number: string | number;
        order_id: string;
    }
}

type FinishOrderRoutProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export function FinishOrder(){

    const route = useRoute<FinishOrderRoutProp>()
    const navigation = useNavigation<NativeStackNavigationProp<StackParmsList>>();
    
    async function handleFinish(){    
        try{
            await api.put('/order/send', {
                order_id: route.params?.order_id
            })
            navigation.popToTop();
       
        }catch(err){
            console.log(err)
        }
    }


    return(
        <View style={styles.container}>
            <Text style={styles.alert}>Deseja finalizar o pedido?</Text>
            <Text style={styles.title}>Mesa {route.params?.number}</Text>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                    <Text style={styles.textButton}>Finalizar pedido</Text>
                    <Feather name="shopping-cart" size={20}/>
            </TouchableOpacity>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },

    alert:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12 ,
    },
    button:{
        backgroundColor: '#3FFFA3',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton:{
        fontSize: 18,
        marginRight: 8,
        fontWeight: 'bold',
    }
})