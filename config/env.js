import url from 'url';

export default {
  boardId: process.env.BOARD_ID,
  environment: process.env.NODE_ENV || 'development',
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.HTTP_PORT || '3000',
  },
  kanbanizeApiKey: process.env.KANBANIZE_API_KEY,
  kanbanizeUrl: process.env.KANBANIZE_URL,
  virtualHost: process.env.VIRTUAL_HOST,
};
