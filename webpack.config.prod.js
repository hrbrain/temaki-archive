const baseConfig = require('./webpack.config')

module.exports = {
    ...baseConfig,
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: [/node_modules/, /\.stories\.tsx?$/, /\.spec\.tsx?$/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'raw-loader'
                    }
                ]
            },
            {
                test: /\.gif$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
    },
    cache: false
}
