import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'

import { CategoryProps } from '../../pages/Order' 

interface ModalPicker{
    options: CategoryProps[];
    handleClosaModal: () => void;
    selectedItem: (item : CategoryProps) => void;             
}

const {width: WIDHT, height: HEIGHT} = Dimensions.get('window')

export function ModalPicker({options, handleClosaModal, selectedItem} : ModalPicker){
    
   function onPressItem(item : CategoryProps){
    selectedItem(item);
    handleClosaModal();
   }
   
   
    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={ () => onPressItem(item)}>
            <Text style={styles.item}>
                {item?.name}
            </Text>
        </TouchableOpacity>
    ))
    
    
    
    return(
        <TouchableOpacity onPress={handleClosaModal} style={styles.container}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
         
        </TouchableOpacity>
    )
}

const styles =  StyleSheet.create({
    
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    content:{
        width: WIDHT -20,
        height: HEIGHT / 2,
        backgroundColor: '#C0C0C0',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4
    },

    option:{
        alignItems: 'flex-start',
        borderTopWidth: 0.8,
        borderTopColor: '#000'
    },

    item:{
        margin: 18,
        fontSize: 14,
        fontWeight: 'bold'
    }
})