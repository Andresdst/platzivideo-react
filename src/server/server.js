const express = require('express')
import dotenv from 'dotenv' //ya se soporta ambas importaciones
const webpack = require('webpack')

dotenv.config()
const {ENV, PORT} = process.env

const app = express()

if(ENV === 'develoment') {
    console.log('Development Config')
    //requiriendo dependencias
    const webpackConfig = require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    //definiendo compilador
    const compiler = webpack(webpackConfig)
    const serverConfig = { serverSideRender: true}

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));

}

app.get('*',(req,res)=>{
    res.send({hello: "express"})
})

app.listen(PORT,(err)=>{
    if(err) console.log(err)
    else console.log('Server on port 3000')
})