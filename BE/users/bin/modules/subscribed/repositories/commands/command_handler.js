
const Subscribe = require('./domain');
const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');

const postOneSubscribe = async (payload) => {
  const subscribe = new Subscribe();
  const postCommand = async (payload) => {
      return await subscribe.addSubscribe(payload);
  }
  return postCommand(payload);
}

const deleteOneSubscribe = async (id) => {
  const subscribe = new Subscribe();
  const delCommand = async (id) => {
      return await subscribe.deleteSubscribe(id);
  }
  return delCommand(id);
}



module.exports = {
  postOneSubscribe : postOneSubscribe,
  deleteOneSubscribe : deleteOneSubscribe
};
