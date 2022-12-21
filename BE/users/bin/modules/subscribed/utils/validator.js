const joi = require('joi');
const validate = require('validate.js');
const Mongo = require('../../../helpers/databases/mongodb/db');
const wrapper = require('../../../helpers/utils/wrapper');
const config = require('../../../infra/configs/global_config');

const isValidPayload = (payload, constraint) => {
  const { value, error } = joi.validate(payload, constraint);
  if(!validate.isEmpty(error)){
    return wrapper.error('fail', error, 409);
  }
  return wrapper.data(value, 'success', 200);

};

const validateConstraints = async (values,constraints) => {
  if(validate(values,constraints)){
      return wrapper.error('Bad Request',validate(values,constraints),400);
  }else{
      return wrapper.data(true);
  }
}

const isValidParamPostOneSubscribe = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.id_user] = {length: {minimum: 1}};
  constraints[payload.product] = {length: {minimum: 1}};
  values[payload.id_user] = payload.id_user;
  values[payload.product] = payload.product;
  return await validateConstraints(values,constraints);
}

const isValidParamGetOneSubscribe = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.id_user] = {length: {minimum: 1}};
  constraints[payload.product] = {length: {minimum: 1}};
  values[payload.id_user] = payload.id_user;
  values[payload.product] = payload.product;
  return await validateConstraints(values,constraints);
}

const isValidParamGetManySubscribes = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.id_user] = {length: {minimum: 1}};
  constraints[payload.product] = {length: {minimum: 1}};
  values[payload.id_user] = payload.id_user;
  values[payload.product] = payload.product;
  return await validateConstraints(values,constraints);
}

module.exports = {
  isValidParamPostOneSubscribe : isValidParamPostOneSubscribe,
  isValidParamGetOneSubscribe : isValidParamGetOneSubscribe,
  isValidParamGetManySubscribes : isValidParamGetManySubscribes,
};
