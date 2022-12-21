
const query = require('../queries/query');
const command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const jwtAuth = require('../../../../auth/jwt_auth_helper');
const commonUtil = require('../../../../helpers/utils/common');
const logger = require('../../../../helpers/utils/logger');
const model = require('./command_model')
const validate = require('validate.js');
const { NotFoundError, UnauthorizedError, ConflictError } = require('../../../../helpers/error');

const algorithm = 'aes-256-ctr';
const secretKey = 'Dom@in2018';

class User {

  async addUser(payload){
    const data = [payload];
    let view = model.users();

    const { username, password } = payload;
    const user = await query.findOneUsername({username});
    if(user.data[0]){
      //return wrapper.error('error', 'Username telah terdaftar', 400);
      return wrapper.error(new UnauthorizedError('Username already Exist!'));
    } else {
      const chiperPwd = await commonUtil.encrypt(password, algorithm, secretKey);
      payload.password = chiperPwd;


      view = data.reduce((accumulator, value) => {
          if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
          if(!validate.isEmpty(value.username)){accumulator.username = value.username;}
          if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
          if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
          if(!validate.isEmpty(value.notelp)){accumulator.notelp = value.notelp;}
          if(!validate.isEmpty(value.name)){accumulator.name = value.name;}          
          return accumulator;
      }, view);
      const document = view;
      const result = await command.insertOne(document);
      return result;
    }
}

async login(payload) {
  const ctx = 'domain-generateCredential';
  const { username, password } = payload;
  const user = await query.findOneUsername({username});
  if(!user.data[0]){
    //return wrapper.error('error', 'Email belum terdaftar', 404);
    return wrapper.error(new UnauthorizedError('User not Found!'));
  } 
    const pass = await commonUtil.decrypt(user.data[0].password, algorithm, secretKey);
    
    if (pass !== password) {
      return wrapper.error(new UnauthorizedError('Password invalid!'));
    }

    const Id = user.data[0].id;
    const name = user.data[0].name;
    const email = user.data[0].email;
    const notelp = user.data[0].notelp

    const data = {
      Id,
      username,
      email,
      notelp,
      name
    };
    const token =  await jwtAuth.generateToken(data);
    return wrapper.data({jwt: token}, '', 200); 
    
}

async updateUser(payload){
  const data = [payload];
  let view = model.users();
  view = data.reduce((accumulator, value) => {
      if(!validate.isEmpty(value.id)){accumulator.id = value.id;}
      if(!validate.isEmpty(value.username)){accumulator.username = value.username;}
      if(!validate.isEmpty(value.password)){accumulator.password = value.password;}
      if(!validate.isEmpty(value.email)){accumulator.email = value.email;}
      if(!validate.isEmpty(value.notelp)){accumulator.notelp = value.notelp;}
      if(!validate.isEmpty(value.name)){accumulator.name = value.name;}          
      return accumulator;
  }, view);
  const document = view;
  const result = await command.updateOne(document);
  return result;
}

async deleteUser(params){
  const result = await command.deleteOne(params);
  return result;
}

}

module.exports = User;
