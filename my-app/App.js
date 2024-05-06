import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/views/Home';
import SettingsScreen from './src/views/Settings';
import ContactScreen from './src/views/Contacts';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
   
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
          else if (route.name === 'Contacts'){
            iconName = focused ? 'person' : 'person-outline'
          }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#468AFA',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home"  component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Contacts" component={ContactScreen} />
    </Tab.Navigator>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}