import React from 'react'

import global from '../global'

const fetch = require('node-fetch')




// a general function to return a list of inactive elevators
async function getInactiveElevators(){
    // set the endpoint that will be called 
    const url = global.url + '/api/elevators/not-operating';
    let elevatorDisplay = [];
    // make the api call
    const response = await fetch(url,
        {
            "method":"GET"
        })
    try{
        // jsonify the response
        const inactiveElevators = await response.json();
        // populate Display array
        for (let i = 0 ; i < inactiveElevators.length; i++){
            // extract desired information
            const elevatorInfo = {
                serialNumber: inactiveElevators[i].serial_number,
                ID: inactiveElevators[i].id
            }
            // add to the array
            elevatorDisplay.push(elevatorInfo);
        }

        // console.log(elevatorDisplay)

        // a log for the console to display the result works   
        console.log ("number of inactive elevators : " + elevatorDisplay.length);
        return elevatorDisplay;


    }
    catch(error){
        console.log(error)
    }

}
function function2(){

}

export {getInactiveElevators, function2}