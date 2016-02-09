var path = require('path');
var webpack = require('webpack');

var config = {
  entry: ['webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/only-dev-server',
          path.resolve(__dirname, './app/app.jsx')],
  
  output: {
  	path: path.resolve(__dirname, 'build'),
  	filename: 'build.js'
  },
  
  module: {
  	loaders: [
  	  { test: /\.js$/,
  	    loader: 'babel-loader'
  	  },
      { test: /\.jsx$/, 
      	loaders: ['react-hot-loader', 'babel-loader', 'jsx-loader'] }] 
  },

  externals: {
  	"jquery": "$",
  	"jquery": "window.jQuery",
  	"jquery": "jQuery"
  },

  resolve: {
    extensions: ["", ".js", ".jsx"]
  },

  plugins: [new webpack.NoErrorsPlugin()]
}

module.exports = config