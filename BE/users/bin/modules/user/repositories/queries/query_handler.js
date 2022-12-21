
const User = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');

const getOneUser = async (queryParam) => {
  const getQuery = async (queryParam) => {
      const user = new User(queryParam);
      const result = await user.viewOneUser();
      return result;
  }
  const result = await getQuery(queryParam);
  return result;
}

const getAllUsers = async (queryParam) => {
  const getQuery = async (queryParam) => {
      const user = new User(queryParam);
      const result = await user.viewAllUsers();
      return result;
  }
  const result = await getQuery(queryParam);
  return result;
}

module.exports = {
  getOneUser : getOneUser,
  getAllUsers : getAllUsers
};
