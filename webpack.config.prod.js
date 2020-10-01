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
                test: /\.(gif|jpe?g|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    cache: false
}
