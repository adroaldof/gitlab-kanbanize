import express from 'express';
import bodyParser from 'body-parser';

import api from './api';
import setupAxios from './services/setup-axios';

export async function application (config) {
  const app = express();

  setupAxios();

  app.use(bodyParser.json());
  app.set('config', config);

  api(app);

  app.use((err, req, res, next) => {
    if (err) {
      console.error(err.stack || err);
      res.status(200).send('Internal error');
    }

    res.status(200).send();
  });

  return app;
}


export async function start (config) {
  const app = await application(config);
  app.listen(config.env.http.port, config.env.http.host, () => {
    console.info('Server started at [ http://%s:%s ]', config.env.http.host, config.env.http.port);
    console.info('Virtual host [ http://%s ]', config.env.virtualHost);
  });
}
