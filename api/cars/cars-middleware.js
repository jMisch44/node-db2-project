const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try{
    const car = await Cars.getById(req.params.id);
    if(!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`
      });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body;
  if(vin === undefined) {
    next({
      status: 400,
      message: `vin is missing` 
    })
  } else if(make  === undefined) {
    next({
      status: 400,
      message: `make is missing` 
    })
  } else if(model === undefined) {
    next({
      status: 400,
      message: `model is missing` 
    })
  } else if (mileage === undefined) {
    next({
      status: 400,
      message: `mileage is missing` 
    })
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin)
  if(isValidVin) {
    next()
  } else {
    next({
      status: 400, message: `vin ${req.body.vin} is invalid`
    })
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const cars = await Cars.getAll()
    const filteredCars = cars.filter(car => car.vin === req.body.vin)
    if(filteredCars.length > 0) {
      next({
        status: 400,
        message: `vin ${req.body.vin} already exists`,
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
