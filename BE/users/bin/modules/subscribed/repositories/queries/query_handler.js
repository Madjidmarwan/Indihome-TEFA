
const Subscribe = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');

const getOneSubscribe = async (queryParam) => {
  const getQuery = async (queryParam) => {
      const subscribe = new Subscribe(queryParam);
      const result = await subscribe.viewOneSubscribe();
      return result;
  }
  const result = await getQuery(queryParam);
  return result;
}

const getAllSubscribes = async (queryParam) => {
  const getQuery = async (queryParam) => {
      const subscribe = new Subscribe(queryParam);
      const result = await subscribe.viewAllSubscribes();
      return result;
  }
  const result = await getQuery(queryParam);
  return result;
}

module.exports = {
  getOneSubscribe : getOneSubscribe,
  getAllSubscribes : getAllSubscribes
};
