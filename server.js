import express from 'express';
import path from 'path';
import compression from 'compression';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const compiler = webpack(webpackConfig);

import React from 'react';

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    noInfo: false,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
      chunks: false
    },
    historyApiFallback: true,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT);
});