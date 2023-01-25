import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Homepage from './screens/Homepage';
import Youtube from './screens/Youtube';
import FeedbackScreen from './screens/FeedbackScreen';
import Beginnerworkout from './screens/Beginnerworkout';
import Beginnersfull from './screens/Beginnersfull';
import ProfileScreen from './screens/ProfileScreen';
import spotify from './screens/spotify'
import Welcomescreen from './screens/WelcomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return ( 
    <Tab.Navigator screenOptions={({ route }) => ({
      
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
      
              if (route.name === 'Home') {
                iconName = focused
                  ? 'barbell'
                  : 'barbell-outline';
              } else if (route.name === 'Feedback') {
                iconName = focused 
                ? 'chatbox-outline'
                : 'chatbox-outline'
              } 
              
              else if (route.name === 'Profile') {
                iconName = focused 
                ? 'person-outline'
                : 'person-outline';
              }
      
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color}/>;
             ;

            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
      <Tab.Screen  name="Home" component={Homepage} />
      <Tab.Screen  name="Profile" component={ProfileScreen} />
      <Tab.Screen  name="Feedback" component={FeedbackScreen} />
      <Tab.Screen name='Spotify' component={spotify} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen  name="TabNavigator" component={TabNavigator} />
        <Stack.Screen  name="WelcomeScreen" component={Welcomescreen} />
        <Stack.Screen name="Youtube" component={Youtube} />
        <Stack.Screen name='Spotify' component={spotify} />
        <Stack.Screen name="Beginnerworkout" component={Beginnerworkout} />
        <Stack.Screen name="Beginnersfull" component={Beginnersfull} />
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
