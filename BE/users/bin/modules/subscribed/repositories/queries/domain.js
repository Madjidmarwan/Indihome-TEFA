
const query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const { NotFoundError } = require('../../../../helpers/error');

class Subscribe {

  constructor(param){
    this.id = param.id,
    this.id_user = param.id_user,
    this.product =  param.product
  }

  async viewOneSubscribe(){
    const param = {"id": this.id};
    const result = await query.findOneSubscribe(param);

    if(result.err){
        return result;
    }else{
        return wrapper.data(result.data);
    }
  }

  async viewAllSubscribes(){
    const param = {};
    const result = await query.findAllSubscribes(param);

    if(result.err){
        return result;
    }else{
        return wrapper.data(result.data);
    }
  }

}

module.exports = Subscribe;
