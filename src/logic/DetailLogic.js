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
        console.log(Elevator);
        return Elevator;
    }
    catch(error){
        alert(`ERROR : ${error}`)
        console.log(error)
    }

}
async function changeStatusToActive(ID){
    // set url for api response
    const url = `${global.url}/api/elevators/status/${ID}`
    // define body
    const body = {
        id: ID,
        status: "Active"
    }
    console.log (body)
    // make api request PUT
    const response = await fetch(url,
        {
            "method": "PUT",
            "headers": {
                'Content-type': 'application/json; charset=UTF-8'
            },
            "body": JSON.stringify(body)
        })
    try{
        console.log(response)
    }
    catch(error){
        alert(error)

    }
    

}

export {getElevatorInfo, changeStatusToActive}