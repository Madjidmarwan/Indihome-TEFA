
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const project = require('../../package.json');
const basicAuth = require('../auth/basic_auth_helper');
const jwtAuth = require('../auth/jwt_auth_helper');
const wrapper = require('../helpers/utils/wrapper');
const userHandler = require('../modules/user/handlers/api_handler');
const subscribeHandler = require('../modules/subscribed/handlers/api_handler');
//const mongoConnectionPooling = require('../helpers/databases/mongodb/connection');

function AppServer() {
  this.server = restify.createServer({
    name: `${project.name}-server`,
    version: project.version
  });

  this.server.serverKey = '';
  this.server.use(restify.plugins.acceptParser(this.server.acceptable));
  this.server.use(restify.plugins.queryParser());
  this.server.use(restify.plugins.bodyParser());
  this.server.use(restify.plugins.authorizationParser());

  // required for CORS configuration
  const corsConfig = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    // ['*'] -> to expose all header, any type header will be allow to access
    // X-Requested-With,content-type,GET, POST, PUT, PATCH, DELETE, OPTIONS -> header type
    allowHeaders: ['Authorization'],
    exposeHeaders: ['Authorization']
  });
  this.server.pre(corsConfig.preflight);
  this.server.use(corsConfig.actual);

  // // required for basic auth
  this.server.use(basicAuth.init());

  // anonymous can access the end point, place code bellow
  this.server.get('/', (req, res) => {
    wrapper.response(res, 'success', wrapper.data('Index'), 'This service is running properly');
  });

  // authenticated client can access the end point, place code bellow

  //users
  this.server.post('/api/v1/users/register', userHandler.postOneUser);
  this.server.post('/api/v1/users/login', userHandler.postDataLogin);
  this.server.get('/api/v1/users', userHandler.getAllUsers);
  this.server.get('/api/v1/users/:id', userHandler.getOneUser);
  this.server.del('/api/v1/users/:id', userHandler.deleteOneUser);
  this.server.patch('/api/v1/users/:id', userHandler.updateOneUser);

  //subscribe
  this.server.post('/api/v1/subscribe', subscribeHandler.postOneSubscribe);
  this.server.get('/api/v1/subscribe', subscribeHandler.getAllSubscribes);
  this.server.get('/api/v1/subscribe/:id', subscribeHandler.getOneSubscribe);
  this.server.del('/api/v1/subscribe/:id', subscribeHandler.deleteOneSubscribe);
  
  //Initiation
  //mongoConnectionPooling.init();
}

module.exports = AppServer;
