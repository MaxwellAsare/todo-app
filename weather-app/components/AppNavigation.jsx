import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'


const Stack=createStackNavigator()
const AppNavigation = () => {

  return (
   <Stack.Navigator>
    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
   </Stack.Navigator>
  
  )
}

export default AppNavigation