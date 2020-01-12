'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';
const logger = require('pino')()

logger.info('sample log from pino')
// App
const app = express();
app.get('/', (req, res) => {
  console.log('Sample Log');
  console.log('Sample Log2');
  res.send('Hello world\n');
});

app.get('/test-pino', (req, res) => {
  logger.trace(`trace`);
  logger.debug(`debug`);
  logger.info(`info`);
  logger.warn(`warn`);
  logger.error(`error`);
  logger.fatal(`fatal`);

  res.send('test-pino\n');
});

app.listen(PORT, HOST);
logger.info(`Running on http://${HOST}:${PORT}`);

