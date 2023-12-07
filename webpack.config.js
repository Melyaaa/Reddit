const webpackClientConfig = require('./cfg/webpack.client.config.js');
const webpackServerConfig = require('./cfg/webpack.server.config.js');

module.exports = [
    webpackClientConfig,
    webpackServerConfig,
]