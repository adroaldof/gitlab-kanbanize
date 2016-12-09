const wrap = (fn) => (...args) => fn(...args).catch(args[2]);

export default (app) => {
  app.post('/test', wrap(async(req, res) => {
    res.status(200).send('Hello world');
  }));
};
