const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"cointab_database"
});

const db=connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("server connected to mysql database");
});

module.exports=db;