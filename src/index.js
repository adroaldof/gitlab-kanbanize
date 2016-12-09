import express from 'express';
import bodyParser from 'body-parser';

import api from './api';

export async function application (config) {
  const app = express();

  app.use(bodyParser.json());
  app.set('config', config);

  api(app);

  return app;
}


export async function start (config) {
  const app = await application(config);
  app.listen(config.env.http.port, config.env.http.host, () => {
    console.info('Server started at [ http://%s:%s ]', config.env.http.host, config.env.http.port);
    console.info('Virtual host [ http://%s ]', config.env.virtualHost);
  });
}
