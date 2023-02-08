import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';
import { FinishOrder } from '../pages/FinishOrder';

export type StackParmsList = {
    Dashboard: undefined;
    Order: {
        number: number | string;
        order_id: string
    };
   
    FinishOrder: {
        number: number | string;
        order_id: string
    }
}

const Stack = createNativeStackNavigator<StackParmsList>();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
            <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/>
            <Stack.Screen name="FinishOrder" component={FinishOrder} options={{title: 'Finalizar Pedido', headerStyle:{backgroundColor: '#c0c0c0' }, headerTintColor: '#000'}} />
        </Stack.Navigator>
    )
}

export default AppRoutes