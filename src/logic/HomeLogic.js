import React from 'react'

import global from '../global'

const fetch = require('node-fetch')





async function getInactiveElevators(){
    
    const url = global.url + '/api/elevators/not-operating';
    let elevatorDisplay = [];
    console.log("testing")
    console.log(url)
    const response = await fetch(url,
        {
            "method":"GET"
        })
    try{
        const inactiveElevators = await response.json();
        const testElevator = inactiveElevators[3].serial_number
        console.log("test Elevator : " + testElevator)

        for (let i = 0 ; i < inactiveElevators.length; i++){
            const elevatorInfo = {
                serialNumber: inactiveElevators[i].serial_number,
                ID: inactiveElevators[i].id
            }
            elevatorDisplay.push(elevatorInfo);
        }
        console.log (elevatorDisplay);
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