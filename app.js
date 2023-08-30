const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cookieParser())

const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '3d'})
}

app.get('/', (req, res)=>{
    const token = createToken('GabrielToken')
    res.cookie('admin', token, {maxAge: 1000*60*60*24*3})
    res.send('HELLO WORLD!!!')
})


app.listen(3200, console.log('Server listening on Port 3200'))




