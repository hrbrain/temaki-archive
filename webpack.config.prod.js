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
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
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
