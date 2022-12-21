
const wrapper = require('../../../helpers/utils/wrapper');
const commandHandler = require('../repositories/commands/command_handler');
const commandModel = require('../repositories/commands/command_model');
const queryHandler = require('../repositories/queries/query_handler');
const validator = require('../utils/validator');
const { ERROR:httpError, SUCCESS:http } = require('../../../helpers/http-status/status_code');

const getOneSubscribe = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetOneSubscribe(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getOneSubscribe(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}

const getAllSubscribes = async (req, res, next) => {
  const queryParam = req.params;
  const validateParam = await validator.isValidParamGetManySubscribes(queryParam);

  const getRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await queryHandler.getAllSubscribes(queryParam);
    }
  }

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res, 'success', result, `Your Request Has Been Processed`);
  }

  sendResponse(await getRequest(validateParam));
}

const postDataLogin = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.login);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return commandHandler.postDataLogin(result.data);
  };

  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Login Subscribe')
      : wrapper.response(res, 'success', result, 'Login Subscribe', http.OK);
  };
  sendResponse(await postRequest(validatePayload));
};

const getSubscribe = async (req, res) => {
  const { subscribeId } = req;
  const getData = async () => queryHandler.getSubscribe(subscribeId);
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, 'Get Subscribe', httpError.NOT_FOUND)
      : wrapper.response(res, 'success', result, 'Get Subscribe', http.OK);
  };
  sendResponse(await getData());
};

const registerSubscribe = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.login);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return commandHandler.registerSubscribe(result.data);
  };
  const sendResponse = async (result) => {
    /* eslint no-unused-expressions: [2, { allowTernary: true }] */
    (result.err) ? wrapper.response(res, 'fail', result, 'Register Subscribe', httpError.CONFLICT)
      : wrapper.response(res, 'success', result, 'Register Subscribe', http.OK);
  };
  sendResponse(await postRequest(validatePayload));
};

const postOneSubscribe = async (req, res, next) => {
  const payload = req.body;
  const validateParam = await validator.isValidParamPostOneSubscribe(payload);
  const postRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.postOneSubscribe(payload);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await postRequest(validateParam));
}

const deleteOneSubscribe = async (req, res, next) => {
  const payload = req.params;
  const validateParam = await validator.isValidParamGetOneSubscribe(payload);
  const deleteRequest = async (result) => {
    if(result.err){
      return result;
    }else{
      return await commandHandler.deleteOneSubscribe(payload);
    }
  }
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res,'fail',result) : 
    wrapper.response(res,'success',result,`Your Request Has Been Processed`);
  }
  sendResponse(await deleteRequest(validateParam));
}

module.exports = {
  getOneSubscribe : getOneSubscribe,
  getAllSubscribes : getAllSubscribes,
  postOneSubscribe : postOneSubscribe,
  deleteOneSubscribe : deleteOneSubscribe
};
