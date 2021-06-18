const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: 'development',
  entry : ['babel-polyfill','./index.js'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    //publicPath: '/',
    //clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Circle of Fifths Game',
      template: './index.html',
    }),
  ],
  
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] //---moved to .babelrc
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],

      },
      
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },

      {
        test: /\.m4a$/,
        loader: 'file-loader',
        options: {
          name: 'sounds/[name].[ext]'
        }
      },
    ]
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },


}