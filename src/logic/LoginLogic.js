import global from '../global'

// check the user against the list of authorised users
async function checkCredential(props, credential){
    const {navigation} = props
    // call the api to get a response
    const response = await getEmployeeEmail(credential);
    console.log (response)
    //send the user to the correct page
    if ( response === true )
    {
        navigation.navigate('Home')
    }
    else
    {
        alert("there was a problem please try again")        
    }
}


// Api call
async function getEmployeeEmail(email){
        //require fetch for the call
        const fetch = require('node-fetch')

        console.log(typeof email)

        //use a token in development to save navigation time
        if(global.tokenEmail)
        {
            email = global.tokenEmail
        }
        
        // Api URL to call
        const url = global.url + '/api/employees/email/' + email ;
        // console.log (url)

        //  the Api call
        const response = await fetch(url,
            {
                "method":"GET"
            })
        // check response
        try{
        const log = await response.json();
        console.log("called api")
        // console.log(log)
        return log;
        }  
        // log any errors   
        catch (error) {
            console.log(error)            
        }


}

export {checkCredential, getEmployeeEmail}