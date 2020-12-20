
import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native'

import styles from './StyleSheets'
import global from '../global'
import {checkCredential} from '../logic/LoginLogic'


// first view of the app it contains a login area with an input field for the user to enter a valid email address 
// and a login button
function Login(props) {

    const [textInput, setTextInput] = useState('');

    const {navigation} = props
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Login to your account</Text>
        <TextInput 
            style={styles.textInput} 
            onChangeText={textInput => setTextInput(textInput)} 
            placeholder="Account Name" >
        </TextInput>
        <TouchableOpacity
            style={styles.buttonContainerBlue}
            onPress={async () => 
            await checkCredential(props, textInput)
            }>
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
    )
}


export default Login

