const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/userSearch',
    createProxyMiddleware({
      target: 'http://localhost:7979',  // API 서버 주소
      changeOrigin: true,
    })
  );
};