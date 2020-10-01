const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../src/')
  }

  config.module.rules = [
    {
      test: /\.stories\.tsx?$/,
      use: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: { parser: 'typescript' }
        }
      ],
      enforce: 'pre'
    },
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ]
    },
    {
      test: /\.svg$/,
      loader: 'raw-loader'
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      use: [
          {
              loader: require.resolve('file-loader'),
              query: {
                  name: 'static/media/[name].[hash:8].[ext]'
              }
          }
      ]
    }
  ]
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../src')
  }

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
