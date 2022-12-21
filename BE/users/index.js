const AppServer = require('./bin/app/server');
const configs = require('./bin/infra/configs/global_config');
const logger = require('./bin/helpers/utils/logger');
const appServer = new AppServer();
const redis = require('redis');
const port = process.env.port || configs.get('/port') || 1337;

appServer.server.listen(port, () => {
  const ctx = 'app-listen';

  const client = redis.createClient();
  client.on('connect', function() {
    console.log('Connected!');
  });

  logger.log(ctx, `${appServer.server.name} started, listening at ${appServer.server.url}`, 'initate application');
});

