import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes'

import { AuthProvider } from './src/contexts/AuthContext';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={styles.back}/>
        <Routes/> 
      </AuthProvider> 
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  back:{
      backgroundColor: '#000',
  }
})