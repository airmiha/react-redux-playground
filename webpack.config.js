var webpack = require('webpack');
var precss =  require('precss');
var autoprefixer =  require('autoprefixer');
var styleLintPlugin = require('stylelint-webpack-plugin');

const path = require('path');
const join = path.join;
const resolve = path.resolve;

const root = resolve(__dirname);
const src = join(root, 'src');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,       
        loader: 'style-loader!css-loader!postcss-loader'
      },  
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new styleLintPlugin({
      configFile: '.stylelintrc.json', 
      failOnError: false, 
      files: '**/**/*.css',
      context: root,
    }),
  ],
  postcss() {
    return [precss, autoprefixer]   
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};