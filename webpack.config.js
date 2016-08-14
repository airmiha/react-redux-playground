const webpack = require('webpack');
const precss =  require('precss');
const autoprefixer =  require('autoprefixer');
const styleLintPlugin = require('stylelint-webpack-plugin');

const path = require('path');
const join = path.join;
const resolve = path.resolve;

const root = resolve(__dirname);
const src = join(root, 'src');

const NODE_ENV = process.env.NODE_ENV;
const isProduction  = NODE_ENV === 'production';
const isDev  = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';

const cssModulesNames = `${isDev && '[path][name]__[local]__' || ''}[hash:base64:5]`;

const productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]; 

const developmentPlugins = [
  new styleLintPlugin({
    configFile: '.stylelintrc.json', 
    failOnError: false, 
    files: 'src/**/**/*.css',
    context: root,
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

module.exports = {
  entry: [
    'react-hot-loader/patch',  
    'webpack-hot-middleware/client',  
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,       
        loader: `style-loader!css-loader?modules&localIdentName=${cssModulesNames}!postcss-loader`
      },  
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    postLoaders: [ 
      {
        test: /\.js$/,   
        exclude: /node_modules/,    
        loader: 'istanbul-instrumenter'
      } 
    ]
  },
  plugins: isProduction && productionPlugins || isDev && developmentPlugins || [],
  
  postcss() {
    return [precss, autoprefixer]   
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};