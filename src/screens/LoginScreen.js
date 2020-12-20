// src/screens/Home.js

import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native'

import styles from './StyleSheets'
import global from '../global'
import {checkCredential} from '../logic/LoginLogic'



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

// async function checkCredential(props, credential){
//     const {navigation} = props

//     const response = await getEmployeeEmail(credential);
//     console.log (response)
    
//     if ( response === true )
//     {
//         navigation.navigate('Home')
//     }
//     else
//     {
//         // console.log("here")
//         alert("there was a problem please try again")
        
//     }
// }



// async function getEmployeeEmail(email){

//         const fetch = require('node-fetch')

//         console.log(typeof email)

//         const url = global.url + '/api/employees/email/' + email ;
//         console.log (url)

//         const response = await fetch(url,
//         // nicolas.genest@codeboxx.biz`,
//             {
//                 "method":"GET"
//             })
//         try{
//         const log = await response.json();
//         console.log("called api")
//         // console.log(log)
//         return log;
//         }        
//         catch (error) {
//             console.log(error)            
//         }


// }

export default Login

