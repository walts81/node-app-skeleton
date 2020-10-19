const { env } = require('process');

const isDev = env.NODE_ENV !== 'production';

module.exports = {
  entry: ['./src/'],
  mode: env.NODE_ENV,
  devtool: isDev ? 'source-map' : false,
  output: {
    path: __dirname,
    filename: './dist/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: [/node_modules/, /\.spec\.(js|ts)$/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'node',
};
