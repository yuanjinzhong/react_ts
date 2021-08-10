const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:10086',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '', // rewrite path
        },
    }))
}