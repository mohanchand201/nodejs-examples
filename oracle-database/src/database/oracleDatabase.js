const dbConfig = require('../config/dbConfig') ; 
const oracledb = require('oracledb')
require('dotenv').config()

async function start(){
    oracledb.initOracleClient({libDir: "D:\\instantclient_11_2"});
    // oracledb.initOracleClient({libDir: dbConfig.clientDir});
    await oracledb.createPool(dbConfig.userConfig) ; 
}

async function executeSQL(sql){
    let connection ; 
    let result ; 
    try{
        connection = await oracledb.getConnection() ;  
        result = connection.execute(sql).then((data)=>{
            return data ; 
        }).catch((error)=>{
            handleError(error) ; 
        })
    }catch(error) {
        result = undefined ;
        handleError(error) ;
    }
    returnConection(connection) ; 
    return result ; 
}

async function returnConection(connection){
    if (connection) {
        try {
          // Connections should always be released when not needed
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
}

async function stop() {
    try {
        await oracledb.getPool().close(10);
        console.log('Pool closed');
        process.exit(0);
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
}

function handleError(error){
    console.log("Error Occoured ",error) ; 
}

module.exports = {
    start , stop , executeSQL
}