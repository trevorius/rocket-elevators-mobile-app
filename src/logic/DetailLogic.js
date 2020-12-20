import React from 'react'

import global from '../global'

const fetch = require('node-fetch')

async function getElevatorInfo(id){
    // set the URL for API request
    const url= `${global.url}/api/elevators/${id}`
    // make the Api request
    const response = await fetch(url,
                        {
                            "method": "GET"
                        })
    try{
        // jsonify response
        const Elevator = await response.json();
        // console.groupCollapsed(Elevator);
        return Elevator;
    }
    catch(error){
        alert(`ERROR : ${error}`)
        console.log(error)
    }

}

export {getElevatorInfo}