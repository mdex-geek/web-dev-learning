const axios = require('axios');


async function main(){
    const respone = await axios.put(
        'https://httpdump.app/dumps/599a3bae-0118-465e-94cd-d96f9888993f',{
            username:'garg',
            password : 'guard'
        },
        {
            maxBodyLength : 90,
            headers:{
                Authorization : "bear123"
            },
        },
    );
    console.log(respone.data)
}
main();