const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://www.localhost:5000', ws: true, changeOrigin: true }));
app.listen(3000);