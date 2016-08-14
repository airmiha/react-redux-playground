/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _webpackDevMiddleware = __webpack_require__(4);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(5);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(7);

	var _webpack4 = _interopRequireDefault(_webpack3);

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var compiler = (0, _webpack2.default)(_webpack4.default);

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());
	app.use(_express2.default.static(_path2.default.join(__dirname, 'dist')));

	if (process.env.NODE_ENV === 'development') {
	  app.use((0, _webpackDevMiddleware2.default)(compiler, {
	    hot: true,
	    noInfo: false,
	    filename: 'bundle.js',
	    publicPath: '/',
	    stats: {
	      colors: true,
	      chunks: false
	    },
	    historyApiFallback: true
	  }));

	  app.use((0, _webpackHotMiddleware2.default)(compiler, {
	    log: console.log,
	    path: '/__webpack_hmr',
	    heartbeat: 10 * 1000
	  }));
	}

	app.get('*', function (req, res) {
	  res.sendFile(_path2.default.join(__dirname, 'dist', 'index.html'));
	});

	var PORT = process.env.PORT || 3000;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(compiler, 'compiler', 'C:/Users/Miha/react-redux-playground/server.js');

	  __REACT_HOT_LOADER__.register(app, 'app', 'C:/Users/Miha/react-redux-playground/server.js');

	  __REACT_HOT_LOADER__.register(PORT, 'PORT', 'C:/Users/Miha/react-redux-playground/server.js');
	})();

	;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var webpack = __webpack_require__(6);
	var precss = __webpack_require__(8);
	var autoprefixer = __webpack_require__(9);
	var styleLintPlugin = __webpack_require__(10);

	var path = __webpack_require__(2);
	var join = path.join;
	var resolve = path.resolve;

	var root = resolve(__dirname);
	var src = join(root, 'src');

	var NODE_ENV = process.env.NODE_ENV;
	var isProduction = NODE_ENV === 'production';
	var isDev = NODE_ENV === 'development';
	var isTest = NODE_ENV === 'test';

	var cssModulesNames = (isDev && '[path][name]__[local]__' || '') + '[hash:base64:5]';

	var productionPlugins = [new webpack.optimize.DedupePlugin(), new webpack.optimize.OccurrenceOrderPlugin(), new webpack.optimize.UglifyJsPlugin({
	  compress: {
	    warnings: false
	  }
	})];

	var developmentPlugins = [new styleLintPlugin({
	  configFile: '.stylelintrc.json',
	  failOnError: false,
	  files: 'src/**/**/*.css',
	  context: root
	}), new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()];

	module.exports = {
	  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/index.js'],
	  output: {
	    path: __dirname + '/dist',
	    publicPath: '/',
	    filename: 'bundle.js'
	  },
	  devServer: {
	    contentBase: './dist'
	  },
	  eslint: {
	    configFile: './.eslintrc'
	  },
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      loader: 'style-loader!css-loader?modules&localIdentName=' + cssModulesNames + '!postcss-loader'
	    }, {
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      loaders: ['babel-loader', 'eslint-loader']
	    }, {
	      test: /\.json$/,
	      loader: 'json'
	    }],
	    postLoaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'istanbul-instrumenter'
	    }]
	  },
	  plugins: isProduction && productionPlugins || isDev && developmentPlugins || [],

	  postcss: function postcss() {
	    return [precss, autoprefixer];
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
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(join, 'join', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(resolve, 'resolve', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(root, 'root', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(src, 'src', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(NODE_ENV, 'NODE_ENV', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(isProduction, 'isProduction', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(isDev, 'isDev', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(isTest, 'isTest', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(cssModulesNames, 'cssModulesNames', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(productionPlugins, 'productionPlugins', 'C:/Users/Miha/react-redux-playground/webpack.config.js');

	  __REACT_HOT_LOADER__.register(developmentPlugins, 'developmentPlugins', 'C:/Users/Miha/react-redux-playground/webpack.config.js');
	})();

	;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("precss");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("autoprefixer");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("stylelint-webpack-plugin");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);