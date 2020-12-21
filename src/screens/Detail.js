// src/screens/Home.js

import React, {useState, Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import {getElevatorInfo, changeStatusToActive} from '../logic/DetailLogic'
import pallet from './colors'
import styles from './StyleSheets'
import {App} from './Home'


function Detail(props) {
  const {route} = props
  const {navigation} = props
  const {item} = route.params
  const {ID, lastInspectionDate, inspectionCertificate, status, serialNumber } = item

  getElevatorInfo(ID)
  // .then((Elevator) => {
  // // console.log(Elevator.information))
  if(status.toLowerCase() == 'active'){
    return (
      <View style={styles.container}>
        <Text style={styles.textLarge}>Elevator : </Text>
        <View>
          <Text style={styles.text} > ID : </Text>
          <Text style={styles.textRed} >{ID}</Text>
          <Text style={styles.text} > status : </Text>
          <Text style={styles.textRed} >{status}</Text>
          <Text style={styles.text} > last inspection date :</Text> 
          <Text style={styles.textRed} >{lastInspectionDate}</Text>
          <Text style={styles.text} > inspection certificate :</Text>
          <Text style={styles.textRed} >{inspectionCertificate}</Text>
          <Text style={styles.text} > serial number : </Text>
          <Text style={styles.textRed} >{serialNumber}</Text>
        </View>

        <TouchableOpacity
            style={styles.buttonContainerBlue}
            onPress={ () => { 
                
                navigation.navigate('Home')
            }             
            }>
            <Text style={styles.buttonText}>return to list of non-operational elevators</Text>
      </TouchableOpacity>

      </View>
    
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>Elevator : </Text>
      <View>
        <Text style={styles.text} > ID : </Text>
        <Text style={styles.textRed} >{ID}</Text>
        <Text style={styles.text} > status : </Text>
        <Text style={styles.textRed} >{status}</Text>
        <Text style={styles.text} > last inspection date :</Text> 
        <Text style={styles.textRed} >{lastInspectionDate}</Text>
        <Text style={styles.text} > inspection certificate :</Text>
        <Text style={styles.textRed} >{inspectionCertificate}</Text>
        <Text style={styles.text} > serial number : </Text>
        <Text style={styles.textRed} >{serialNumber}</Text>      
      </View>
      <TouchableOpacity
            style={styles.buttonContainerBlue}
            onPress={ async () => { 
            await changeStatusToActive(ID);
            const Elevator = await getElevatorInfo(ID);
            console.log(Elevator);

            const refreshedElevator = {
              ID: Elevator.id,
              lastInspectionDate:Elevator.last_inspection_date,
              inspectionCertificate: Elevator.inspection_certificate,
              status: Elevator.status,
              serialNumber: Elevator.serial_number,
            } 
            navigation.navigate('Detail', {item:refreshedElevator})
            }             
            }>
            <Text style={styles.buttonText}>change status to ACTIVE</Text>
      </TouchableOpacity>
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