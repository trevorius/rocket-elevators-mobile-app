import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Login from '../screens/LoginScreen'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
            gestureEnabled: true
        }}
      >
        <Stack.Screen 
            name='Home' 
            component={Home} 
            options={{ title: 'home screen'} } 
        />
        <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{ title: 'Login'} } 
        />
        <Stack.Screen 
            name= 'Detail'
            component={Detail}
            options={{title: 'Detail Screen'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
