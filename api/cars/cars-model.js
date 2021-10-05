const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = async (id) => {
  return await db('cars').where('id', id).first()
}

const create = async (car) => {
  const id = await db('cars').insert(car)
  return id
}

module.exports = {
  getAll,
  getById,
  create,
}
