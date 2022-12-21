
const Mongo = require('../../../../helpers/databases/mongodb/db');
const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const ObjectId = require('mongodb').ObjectId;

const findOneUser = async (params) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'users';
  const id = params.id
  const recordset = await db.findOne(table, id);
  return recordset;
}

const findOneUsername = async (params) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'users';
  const username = params.username
  const recordset = await db.findOneUsername(table, username);
  return recordset;
}

const findAllUsers = async (parameter) => {
  const db = new Mysql(config.get('/mysqlConfig'));
  const table =  'users';
  const recordset = await db.findMany(table); 
  return recordset;
}

module.exports = {
  findOneUser : findOneUser,
  findAllUsers : findAllUsers,
  findOneUsername : findOneUsername
}