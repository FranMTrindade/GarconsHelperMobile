import react from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons'

interface ItemProps {
    data:{
        id: string;
        product_id: string;
        name: string;
        amount: string | number
    }

    deleteItem: (item_id: string) => void
}




export function ListItem({data, deleteItem} : ItemProps){

    function handleDelete(){
        deleteItem(data.id)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.item}>   {data.amount} - {data.name}</Text>

            <TouchableOpacity onPress={handleDelete}>
              <Feather name = "trash-2" color="#FF3F4B" size={25} style={{right: 12}}/>
            </TouchableOpacity>


        </View>

       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#C0C0C0',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#000'
    },
    item:{
        fontWeight: 'bold'
    }
})