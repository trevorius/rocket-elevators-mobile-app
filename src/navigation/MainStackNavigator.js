import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View, Text, TouchableOpacity, Button, ColorPropType, Image } from 'react-native'


import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Login from '../screens/LoginScreen'
import pallet from '../screens/colors'
import style from '../screens/StyleSheets'
import logoPath from '../images/R2.png'
import styles from '../screens/StyleSheets'

const Stack = createStackNavigator()

// nav bar header for every page
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
        screenOptions={{
            gestureEnabled: true,
            
        }}
      >
        <Stack.Screen 
            name='Home' 
            component={Home} 
            options={({navigation}) =>  
              ({ 
                title: '', 
                headerLeft:() => (
                  <View
                style= {{marginLeft:10}}>
                <Image
                  style={styles.logo}
                  source={logoPath}
                  
                />
                  </View>
                ),
                headerRight: () => (
              <View
              style= {{marginRight:10}}>
              <Button
                onPress={() => {
                  componentWillUnmount(),
                  navigation.navigate ('Login')
                }}
                title="Logout"
                color= {pallet.red}
                style={style.buttonContainerRed}
              />
              {/* <Button
                onPress={() => navigation.navigate ('Detail')}
                title="elevator"
                color= {pallet.blue}
                style={style.buttonContainerBlue}
              /> */}
              </View>
              )
            })} 
        />
        <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{ title: 'Login', 
            headerRight:() => (
              <View
            style= {{marginRight:10}}>
            <Image
              style={styles.logo}
              source={logoPath}
              
            />
              </View>
            )} 
            }
        />
        <Stack.Screen 
            name= 'Detail'
            component={Detail}
            options={({navigation}) =>  
            ({ 
            title: 'Elevator', 
            // headerLeft:() => (
            //   <View
            // style= {{marginLeft:10}}>
            // <Image
            //   style={styles.logo}
            //   source={logoPath}
              
            // />
            //   </View>
            // ),             
            headerRight: () => (
            <View
            style= {{marginRight:10}}>
            <Button
              onPress={() => {
                componentWillUnmount()
                navigation.navigate ('Login')
              }}
              title="Logout"
              color= {pallet.red}
              style={style.buttonContainerRed}
            />
            {/* <Button
              onPress={() => navigation.navigate ('Detail')}
              title="elevator"
              color= {pallet.blue}
              style={style.buttonContainerBlue}
            /> */}
            </View>
            )
          })} 
            // {{title: 'Detail Screen'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
function componentWillUnmount() {
  // fix Warning: Can't perform a React state update on an unmounted component
  this.setState = (state,callback)=>{
      return;
  };
}

export default MainStackNavigator
