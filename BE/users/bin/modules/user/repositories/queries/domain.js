
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class User {

  constructor(param){
    this.id = param.id,
    this.username = param.username,
    this.password =  param.password,
    this.email = param.email,
    this.notelp = param.notelp,
    this.name = param.name
  }

  async viewOneUser(){
    const param = {"id": this.id};
    const result = await query.findOneUser(param);

    if(result.err){
        return result;
    }else{
        return wrapper.data(result.data);
    }
  }

  async viewAllUsers(){
    const param = {};
    const result = await query.findAllUsers(param);

    if(result.err){
        return result;
    }else{
        return wrapper.data(result.data);
    }
  }

}

module.exports = User;
