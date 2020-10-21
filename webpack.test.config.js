const baseConfig = require('./webpack.config');

const config = {
  ...baseConfig,
  module: {
    ...baseConfig.module,
    rules: baseConfig.module.rules.map(x => ({
      ...x,
      exclude: [/node_modules/],
    })),
  },
};

module.exports = config;
