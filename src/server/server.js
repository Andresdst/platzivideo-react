const express = require('express')
import dotenv from 'dotenv' //ya se soporta ambas importaciones 

dotenv.config()
const {ENV, PORT} = process.env

const app = express()

if(ENV === 'develoment') {
    console.log('Development Config')
}

app.get('*',(req,res)=>{
    res.send({hello: "express"})
})

app.listen(PORT,(err)=>{
    if(err) console.log(err)
    else console.log('Server on port 3000')
})