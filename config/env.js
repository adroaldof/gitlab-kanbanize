import url from 'url';

export default {
  environment: process.env.NODE_ENV || 'development',
  virtualHost: process.env.VIRTUAL_HOST,
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.HTTP_PORT || '3000',
  },
};
