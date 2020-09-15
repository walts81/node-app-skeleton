const baseConfig = require('./webpack.config');

const config = {
    ...baseConfig,
};

config.module.rules[0].exclude = [/node_modules/];

module.exports = config;
