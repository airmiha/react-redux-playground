var fs = require('fs');
var path = require('path');

const cssModulesNames = '[path][name]__[local]__[hash:base64:5]';

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js',
    publicPath: '/'   
  },

  target: 'node',

   // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: false
  },
  
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {
        test: /\.css$/,       
        loader: `css-loader?modules&localIdentName=${cssModulesNames}!postcss-loader`
      }
    ]
  }
}