

'use strict'

let express = require('express');
let path = require('path');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');
let webpackConfig = require('../webpack.config');

let app = express();

let api = require('./api');

require('./middleware')(app);
let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use('/api', api);

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../client' });
});

module.exports = app;
