var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const port = 8002
const { authRouter } = require('./2.routers')


app.use(bodyParser())
app.use(cors())

app.use('/auth', authRouter)

app.listen(port, console.log(`Listenin' in port ` + port))