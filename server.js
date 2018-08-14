const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const machine = require('./machine_learning');

const server = express()

const router = require('./route');

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use('/api/lenguage_recognition', router)

server.listen(config.port, () => {
  console.log(`API REST corriendo en http://localhost:${ config.port }`)
})

console.log(`TRAINNING MACHINE WAIT ...`)
machine.fitMachine()
