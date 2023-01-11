import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/Homepage';
import Welcomescreen from './screens/WelcomeScreen';
import Youtube from './screens/Youtube'
const Stack= createNativeStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer style={styles.container}> 
      <Stack.Navigator>
        
        <Stack.Screen name="HomePage" component={Youtube} />
        </Stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
