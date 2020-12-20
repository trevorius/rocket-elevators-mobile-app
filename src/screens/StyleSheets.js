import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'

import pallet from './colors'



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: pallet.white
    },
    text: {
      color: pallet.black,
      fontSize: 24,
      fontWeight: 'bold'
    },
    buttonContainerBlue: {
      backgroundColor: pallet.blue,
      borderRadius: 5,
      padding: 10,
      margin: 20
  
    },
    buttonContainerRed: {
      backgroundColor: pallet.red,
      borderRadius: 5,
      padding: 10,
      margin: 20
  
    },
    buttonText: {
      fontSize: 20,
      color: 'white'
    },
    textInput: {
      padding: 15,
      margin: 5,
      fontSize:10,
      color: pallet.black,
      borderStyle: "dashed"
    }
  
})
  
  
export default styles;
