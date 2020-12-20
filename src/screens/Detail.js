// src/screens/Home.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import {getElevatorInfo} from '../logic/DetailLogic'
import styles from './StyleSheets'


function Detail(props) {
  const {route} = props
  const {item} = route.params
  const {ID} = item
  const Elevator = getElevatorInfo(ID)
  console.log(Elevator.information)
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Elevator : </Text>
      <View>
        <Text style={styles.text} > ID : {ID}</Text>
      </View>
    </View>
  )
}
// return (
//   <View style={styles.container}>
//     <Text style={styles.text}>Details Screen</Text>
//     <TouchableOpacity
//       style={styles.buttonContainerBlue}
//       onPress={() => navigation.navigate('Home')}>
//         <Text style={styles.buttonText}>Go back Home</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.buttonContainerRed}
//       onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.buttonText}>LOGOUT</Text>
//       </TouchableOpacity>
//   </View>
// )

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ebebeb'
//   },
//   text: {
//     color: '#101010',
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   buttonContainer: {
//     backgroundColor: 'darkred',
//     borderRadius: 5,
//     padding: 10,
//     margin: 20

//   },
//   buttonText: {
//     fontSize: 20,
//     color: 'white'
//   }

// })

export default Detail

// src/screens/Detail.js