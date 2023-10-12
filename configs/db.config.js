module.exports = {
    development: {
    HOST : "localhost",
    USER : "root",
    PASSWORD : "root123",
    DB : "ecom_db",
    dialect : "mysql",
    pool :{
    max :5,
    min :0,
    acquire: 30000, //max time in ms that a pool will try to get connection before throwing error
    idle :10000 // maximum time in ms that a connection can be idle before being released
    }
   },
   test: {
    HOST : "localhost",
    USER : "root",
    PASSWORD : "harshit@16",
    DB : "ecom_test_db",
    dialect : "mysql",
    pool :{
    max :5,
    min :0,
    acquire: 30000, //max time in ms that a pool will try to get connection before throwing error
    idle :10000 // maximum time in ms that a connection can be idle before being released
    }
   },
   production:{
    HOST : "sql12.freemysqlhosting.net",
    USER : "sql12652483",
    PASSWORD : "2plttqqlGa",
    DB : "sql12652483",
    dialect : "mysql",
    pool :{
    max :5,
    min :0,
    acquire: 30000, //max time in ms that a pool will try to get connection before throwing error
    idle :10000 // maximum time in ms that a connection can be idle before being released
}
}
}