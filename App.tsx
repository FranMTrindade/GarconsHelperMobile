import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes'


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView backgroundColor="#000"/>
      <Routes/>  
    
    </NavigationContainer>
  );
}


