require('dotenv').config()

const userConfig = {
    "user": process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    configDir: process.env.DB_TNSPATH,
    connectString: process.env.DB_TNS,
    poolIncrement : 0,
    poolMax       : 2,
    poolMin       : 2,
    clientDir: "D:\\instantclient_11_2"
}

module.exports = {
    userConfig
}