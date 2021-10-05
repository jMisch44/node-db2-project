const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = async (id) => {
  return await db('cars').where('id', id).first();
}

const create = async (car) => {
  const id = await db('cars').insert(car);
  return await getById(id);
}

const update = () => {
  // update
}

const remove = async (id) => {
  const car = await getById(id);
  await db('cars').where('id', id).delete();
  return car;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
