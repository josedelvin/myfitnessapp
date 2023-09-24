import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Homepage from './screens/Homepage';
import Youtube from './screens/Youtube';
import FeedbackScreen from './screens/FeedbackScreen';
import Beginnerworkout from './screens/Beginnerworkout';
import Beginnersfull from './screens/Beginnersfull';
import ProfileScreen from './screens/ProfileScreen';
import spotify from './screens/spotify';
import Welcomescreen from './screens/WelcomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          } else if (route.name === 'Feedback') {
            iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Feedback" component={FeedbackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [showWelcome, setShowWelcome] = React.useState(true);

  useEffect(() => {
    // Use a timer to hide the WelcomeScreen after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Adjust the delay as needed

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showWelcome && (
          <Stack.Screen name="WelcomeScreen" component={Welcomescreen} />
        )}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Youtube" component={Youtube} />
        <Stack.Screen name="Spotify" component={spotify} />
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
