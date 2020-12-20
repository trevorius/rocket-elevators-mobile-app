// src/screens/Home.js

import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native'
import styles from './StyleSheets'



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

async function checkCredential(props, credential){
    const {navigation} = props

    const response = await getEmployeeEmail(credential);
    console.log (response)
    
    if ( response === true )
    {
        navigation.navigate('Home')
    }
    else
    {
        // console.log("here")
        alert("there was a problem please try again")
        
    }
}



async function getEmployeeEmail(email){

        const fetch = require('node-fetch')

        console.log(typeof email)

        const url = 'https://fabf0755c3b8.ngrok.io/api/employees/email/' + email ;
        console.log (url)

        const response = await fetch(url,
        // nicolas.genest@codeboxx.biz`,
            {
                "method":"GET"
            })
        try{
        const log = await response.json();
        console.log("called api")
        // console.log(log)
        return log;
        }        
        catch (error) {
            console.log(error)            
        }


}
        // this.setState({
        //     fromFetch: true,
        //     loading: true,

        // })
    //     // fetch("http://localhost:5501/api/employees")
    //         .then(response => response.json())
    //         .then((responseJson) => {
    //             console.log('getting data from fetch', responseJson)
    //             // setTimeout(() => {
    //             //     this.setState({
    //             //         loading: false,
    //             //         dataSource: responseJson
    //             //     })
    //             // }, 2000)

    //         })
    //         .catch(error => console.log(error))
    // }







    // return fetch('http://localhost:5501/api/employees')
    //     .then((response) => response.json())
    //     .then((employeeList) => {
    //         console.log(employeeList);
    //         return employeeList
    //     })
    //     .catch((error) => {
    //         console.log("caught an error")
    //         console.error(error);
    //     })


    // try {
    //     let response = await fetch(
    //     'http://localhost:5501/api/employees',{method:'GET'}
    //     // /email/martin.chantal@codeboxx.biz',
    //     );
    //     let responseJson = await response.json();
    //     console.log(responseJSon);
    //     return responseJson;
    // } catch (error) {
    //     console.error(error);
    // }
// }













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
//     backgroundColor: 'blue',
//     borderRadius: 5,
//     padding: 10,
//     margin: 20

//   },
//   buttonText: {
//     fontSize: 20,
//     color: 'white'
//   }
// })

export default Login

// src/screens/Detail.js