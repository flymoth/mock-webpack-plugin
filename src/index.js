/**
 * @file plugin entry point
 * @author Marx
 */

const server = require('./server.js');

/**
 * @class MockWebpackPlugin
 *
 * @param {Object} param data that plugin needs
 */
function MockWebpackPlugin({config, port = 3000}) {
    this.configPath = config;
    this.port = port;
}

MockWebpackPlugin.prototype.apply = function (compiler) {
    server({config: this.configPath, port: this.port});
    compiler.plugin("emit", (compilation, callback) => {
        callback();
    });
}

module.exports = MockWebpackPlugin;