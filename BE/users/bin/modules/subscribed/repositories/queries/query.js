
const Mongo = require('../../../../helpers/databases/mongodb/db');
const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const ObjectId = require('mongodb').ObjectId;

const findOneSubscribe = async (params) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'subscribe';
  const id = params.id
  const recordset = await db.findOne(table, id);
  return recordset;
}

const findAllSubscribes = async (parameter) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'subscribe';
  const recordset = await db.findMany(table); 
  return recordset;
}

module.exports = {
  findOneSubscribe : findOneSubscribe,
  findAllSubscribes : findAllSubscribes
}