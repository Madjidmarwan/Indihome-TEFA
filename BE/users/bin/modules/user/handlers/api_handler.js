
const wrapper = require('../../../helpers/utils/wrapper');
const commandHandler = require('../repositories/commands/command_handler');
const commandModel = require('../repositories/commands/command_model');
const queryHandler = require('../repositories/queries/query_handler');
const validator = require('../utils/validator');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');

const getOneUser = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneUser(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getOneUser(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}

const getAllUsers = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetManyUsers(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getAllUsers(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}

const postDataLogin = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneUser(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }
    return await commandHandler.postDataLogin(payload);
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) :
      wrapper.response(res,'success',result,'Login success');
  };
  sendResponse(await postRequest(validateParam));
};

const getUser = async (req, res) => {
  const { userId } = req;
  const getData = async () => queryHandler.getUser(userId);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get User', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Get User', http.OK);
  };
  sendResponse(await getData());
};

//const registerUser = async (req, res) => {
//  const payload = req.body;
//  const validatePayload = validator.isValidPayload(payload, commandModel.login);
//  const postRequest = async (result) => {
//    if (result.err) {
//      return result;
//    }
//    return commandHandler.registerUser(result.data);
//  };
//  const sendResponse = async (result) => {
//    /* eslint no-unused-expressions: [2, { allowTernary: true }] */
//    (result.err) ? wrapper.response(res, 'fail', result, 'Register User', httpError.CONFLICT)
//      : wrapper.response(res, 'success', result, 'Register User', http.OK);
//  };
//  sendResponse(await postRequest(validatePayload));
//};

const postOneUser = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneUser(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.postOneUser(payload);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await postRequest(validateParam));
}

const updateOneUser = async (req, res, next) => {
  const id  = req.params;
  const payload = req.body;
  const validateParam = await validator.isValidParamGetOneUser(payload);
  const patchRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.updateOneUser(id, payload);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await patchRequest(validateParam));
}

const deleteOneUser = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneUser(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.deleteOneUser(payload);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await deleteRequest(validateParam));
}

module.exports = {
  getOneUser : getOneUser,
  getAllUsers : getAllUsers,
  postOneUser : postOneUser,
  updateOneUser : updateOneUser,
  deleteOneUser : deleteOneUser,
  postDataLogin : postDataLogin
};
