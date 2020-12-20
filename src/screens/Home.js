import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import styles from './StyleSheets'
import {getInactiveElevators,function2} from '../logic/HomeLogic'

 function Home(props) {
  getInactiveElevators()
  const {navigation} = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainerBlue}
        onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Go to Detail Screen</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Home

