import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'

import pallet from './colors'

const size ={
  Title: 40,
  Large: 25,
  normal: 18,
  small: 12,
  padding:10,
  paddingSmall:8,
  marginSmall:4,
  marginLarge: 15

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: pallet.white
    },
    text: {
      color: pallet.black,
      fontSize: size.normal,
    },
    textBold: {
      color: pallet.black,
      fontSize: size.normal,
      fontWeight: 'bold'
    },
    textGreen:{
      color: pallet.green,
      fontSize: size.normal,
      fontWeight: 'bold'
    },
    textRed: {
      color: pallet.brightRed,
      fontSize: size.normal,
      fontWeight: 'bold'
    },
    textLarge: {
      color: pallet.black,
      fontSize: size.Large,
      textDecorationLine: 'underline',
      fontWeight: 'bold'
    },
    textSmall:{
      color: pallet.black,
      fontSize: size.small,
      fontWeight: 'bold'
    },
    buttonContainerBlue: {
      backgroundColor: pallet.blue,
      borderRadius: 5,
      padding: size.paddingSmall,
      margin: size.marginLarge
  
    },
    buttonContainerRed: {
      backgroundColor: pallet.red,
      borderRadius: 5,
      padding: size.paddingSmall,
      margin: size.marginLarge
  
    },
    buttonText: {
      fontSize: size.normal,
      color: pallet.white
    },
    textInput: {
      padding: size.padding,
      margin: size.marginSmall,
      fontSize:size.small,
      color: pallet.black,
      borderStyle: "dashed"
    },
    item:{
      padding: size.paddingSmall,
      borderBottomWidth: 3,
      color: pallet.red

    },
    box:{
      padding: size.padding,
      margin: size.marginSmall,

    },
    logo:{
      width: 100
    }

  
})
  
  
export default styles;
