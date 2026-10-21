import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Profile from './src/Profile';
import Search from './src/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabnavigator = () => {
  return(
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerStyle: {backgroundColor: "yellow"}}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarActiveTintColor:"red", tabBarInactiveTintColor: "black"}}/>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  )
}

const Stacknavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: {backgroundColor: "yellow"}}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stacknavigator /> */}
      <Tabnavigator />
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
