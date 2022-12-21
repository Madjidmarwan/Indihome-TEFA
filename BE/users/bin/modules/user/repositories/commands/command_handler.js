
const User = require('./domain');
const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');

const postOneUser = async (payload) => {
  const user = new User();
  const postCommand = async (payload) => {
      return await user.addUser(payload);
  }
  return postCommand(payload);
}

const updateOneUser = async (id, payload) => {
  const user = new User();
  const putCommand = async (id, payload) => {
      return await user.updateUser(id, payload);
  }
  return putCommand(id, payload);
}

const deleteOneUser = async (id) => {
  const user = new User();
  const delCommand = async (id) => {
      return await user.deleteUser(id);
  }
  return delCommand(id);
}

const postDataLogin = async (payload) => {
  const user = new User();
  const loginCommand = async (payload) => {
    return await user.login(payload);
  };
  return await loginCommand(payload);
};


module.exports = {
  postOneUser : postOneUser,
  updateOneUser : updateOneUser,
  deleteOneUser : deleteOneUser,
  postDataLogin : postDataLogin
};
