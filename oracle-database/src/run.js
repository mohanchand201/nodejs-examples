const database = require('./database/oracleDatabase') ; 

async function run()
{
    await database.start() ; 
    let result = await database.executeSQL("select count(*) from ymax.rsubscriber") ;  
    if(result != undefined)
        console.log(result.rows)
    else
        console.log("Unable to fetch data") ; 

    await database.stop() ;     
}

run() ; 
