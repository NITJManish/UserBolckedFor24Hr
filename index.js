  require('dotenv').config();
const express =require('express');
const bodyParser=require('body-parser');
const app=express();
const db=require('./config/connectdb');
const PORT=process.env.PORT || 5000;



app.get("/",(req,res)=>{
    res.send("mks");
});


app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server run on port ${PORT}`);
});