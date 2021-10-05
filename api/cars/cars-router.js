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

router.put(
    '/:id', 
    checkCarId, 
    checkCarPayload, 
    checkVinNumberValid, 
    async (req,res,next) => {
    try {
        const updatedCar = await Cars.update(req.params.id, req.body)
        res.status(200).json(updatedCar)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', checkCarId, async (req, res, next) => {
    try {
        const deletedCar = await Cars.remove(req.params.id)
        res.status(200).json(deletedCar)
    } catch (err) {
        next(err)
    }
})

module.exports = router
