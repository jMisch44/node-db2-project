const express = require('express')
const Cars = require('./cars-model.js')
const { 
    checkCarId, 
    checkCarPayload, 
    checkVinNumberValid, 
    checkVinNumberUnique 
} = require('./cars-middleware')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await Cars.getAll())
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, (req, res) => {
    res.status(200).json(req.car)
})

router.post(
'/', 
checkCarPayload, 
checkVinNumberValid, 
checkVinNumberUnique, 
async (req, res, next) => {
    try {
        res.status(201).json(await Cars.create(req.body))
    } catch (err) {
        next(err)
    }
})

module.exports = router
