const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');

const insertOne = async (document) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'users';
  const recordset = await db.postOne(table, document);
  return recordset;
}

const updateOne = async (params, document) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'users';
  const id = params.id
  const recordset = await db.updateOne(table, document, id);
  return recordset;
}

const deleteOne = async (params) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'users';
  const id = params.id
  const recordset = await db.deleteOne(table, id);
  return recordset;
}

module.exports = {
  insertOne: insertOne,
  updateOne: updateOne,
  deleteOne: deleteOne
}
