const express = require("express")
const carsRouter = require('./cars/cars-router')
const server = express()

server.use(express.json())
server.use('/api/cars', carsRouter)

server.use('*', (req, res) => {
    res.json('Cars API')
})

server.use(errorHandling)

function errorHandling (err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
}

module.exports = server
