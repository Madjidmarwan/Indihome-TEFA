const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');

const insertOne = async (document) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'subscribe';
  const recordset = await db.postOne(table, document);
  return recordset;
}

const deleteOne = async (params) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'subscribe';
  const id = params.id
  const recordset = await db.deleteOne(table, id);
  return recordset;
}

module.exports = {
  insertOne: insertOne,
  deleteOne: deleteOne
}
