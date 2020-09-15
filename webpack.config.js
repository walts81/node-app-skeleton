const { env } = require("process");

module.exports = {
    entry: ['./src/'],
    mode: env.NODE_ENV,
    output: {
        path: __dirname,
        filename: './dist/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: [/node_modules/, /\.spec\.(js|ts)$/],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    target: 'node'
}
