
const Query = require('../queries/query');
const Command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const jwtAuth = require('../../../../auth/jwt_auth_helper');
const commonUtil = require('../../../../helpers/utils/common');
const logger = require('../../../../helpers/utils/logger');
const model = require('./command_model')
const command = require('./command');
const validate = require('validate.js');
const { NotFoundError, UnauthorizedError, ConflictError } = require('../../../../helpers/error');

class Subscribe {

  async addSubscribe(payload){
    const data = [payload];
    let view = model.subscribes();
    view = data.reduce((accumulator, value) => {
        if(!validate.isEmpty(value.id_subscribe)){accumulator.id_subscribe = value.id_subscribe;}
        if(!validate.isEmpty(value.product)){accumulator.product = value.product;}          
        return accumulator;
    }, view);
    const document = view;
    const result = await command.insertOne(document);
    return result;
}

async updateSubscribe(payload){
  const data = [payload];
  let view = model.subscribes();
  view = data.reduce((accumulator, value) => {
    if(!validate.isEmpty(value.id_subscribe)){accumulator.id_subscribe = value.id_subscribe;}
    if(!validate.isEmpty(value.product)){accumulator.product = value.product;}        
      return accumulator;
  }, view);
  const document = view;
  const result = await command.updateOne(document);
  return result;
}

async deleteSubscribe(params){
  const result = await command.deleteOne(params);
  return result;
}

}

module.exports = Subscribe;
