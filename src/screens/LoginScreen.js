// src/screens/Home.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import styles from './StyleSheets'


function Login(props) {
  const {navigation} = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login to your account</Text>
      <TouchableOpacity
        style={styles.buttonContainerBlue}
        onPress={async () => {
           if (await getEmployeeEmail())
           {
                navigation.navigate('Home')
           }
            
           }}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
    </View>
  )
}


async function getEmployeeEmail(){

        const fetch = require('node-fetch')

        const response = await fetch('http://fabf0755c3b8.ngrok.io/api/employees/email/martin.chantal@codeboxx.biz',
            {
                "method":"GET"
            })
        const log = await response.json();

        console.log(log)
        return log;


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