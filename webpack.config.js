const path = require('path')
const DtsBundlePlugin = require('dts-bundle-webpack')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: env,
  entry: {
    app: path.join(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'hrb-temaki',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'styled-components': path.resolve(__dirname, './node_modules/styled-components')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              fix: false,
              emitErrors: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new DtsBundlePlugin({
      name: 'hrb-temaki',
      main: 'dist/index.d.ts',
      baseDir: 'dist',
      out: 'index.d.ts'
    })
  ],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    'styled-components': {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "StyledComponents",
      root: "StyledComponents"
    }
  }
}
