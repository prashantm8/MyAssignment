import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './src/screens/details';
import Employee from './src/screens/Employee'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { store } from './src/redux/store';


const Stack = createStackNavigator();

const Routes = () => {
  return(
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Employee" component={Employee} />
      </Stack.Navigator>
    </NavigationContainer>  
  </SafeAreaProvider> )
}

export default function App() {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  )
}





