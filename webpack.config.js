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
        test: /\.(j|t)sx?$/,
        exclude: [/node_modules/, /\.spec\.(j|t)sx?$/],
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  target: 'node',
};
