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

const isValidParamPostOneUser = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.username] = {length: {minimum: 1}};
  constraints[payload.password] = {length: {minimum: 1}};
  constraints[payload.email] = {length: {minimum: 1}};
  constraints[payload.notelp] = {length: {minimum: 1}};
  constraints[payload.name] = {length: {minimum: 1}};
  values[payload.username] = payload.username;
  values[payload.password] = payload.password;
  values[payload.email] = payload.email;
  values[payload.notelp] = payload.notelp;
  values[payload.name] = payload.name;
  return await validateConstraints(values,constraints);
}

const isValidParamGetOneUser = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.username] = {length: {minimum: 6}};
  constraints[payload.password] = {length: {minimum: 6}};
  constraints[payload.email] = {length: {minimum: 6}};
  constraints[payload.notelp] = {length: {minimum: 10}};
  constraints[payload.name] = {length: {minimum: 6}};
  values[payload.username] = payload.username;
  values[payload.password] = payload.password;
  values[payload.email] = payload.email;
  values[payload.notelp] = payload.notelp;
  values[payload.name] = payload.name;
  return await validateConstraints(values,constraints);
}

const isValidParamGetManyUsers = async (payload) => {
  let constraints = {};
  let values = {};
  constraints[payload.username] = {length: {minimum: 6}};
  constraints[payload.password] = {length: {minimum: 6}};
  constraints[payload.email] = {length: {minimum: 6}};
  constraints[payload.notelp] = {length: {minimum: 10}};
  constraints[payload.name] = {length: {minimum: 6}};
  values[payload.username] = payload.username;
  values[payload.password] = payload.password;
  values[payload.email] = payload.email;
  values[payload.notelp] = payload.notelp;
  values[payload.name] = payload.name;
  return await validateConstraints(values,constraints);
}

module.exports = {
  isValidParamPostOneUser : isValidParamPostOneUser,
  isValidParamGetOneUser : isValidParamGetOneUser,
  isValidParamGetManyUsers : isValidParamGetManyUsers,
};
