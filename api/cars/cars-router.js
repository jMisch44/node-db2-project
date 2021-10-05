const express = require('express')
const Car = require('./cars-model.js')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await Car.getAll())
    } catch (err) {
        next(err)
    }
})

router.get('/:id', (req, res, next) => {
    try {
        res.json('get car by id')
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    try {
        res.json('create new car')
    } catch (err) {
        next(err)
    }
})

module.exports = router
