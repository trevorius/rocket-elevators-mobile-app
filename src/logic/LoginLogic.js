import global from '../global'


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

        if(global.tokenEmail)
        {
            email = global.tokenEmail
        }

        const url = global.url + '/api/employees/email/' + email ;
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

export {checkCredential, getEmployeeEmail}