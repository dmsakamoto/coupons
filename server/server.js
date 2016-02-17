

'use strict'

let express = require('express');
let session = require('express-session');
let path = require('path');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let webpackConfig = require('../webpack.config');
let secrets = require('../secrets');


let app = express();

let api = require('./api');

require('./middleware')(app);
let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

/*
  // Did not get Auth set up with Shopify
  app.use(session({
  'secret': 'session secret',
  'resave': false,
  'saveUnitialized': true
  }));

  app.use(auth);

  app.get('/success', function(req, res){
  res.json(req.session.shopify);
  })

  app.get('/fail', function(req, res){
  res.send('Auth failed');
  })
*/

app.use('/api', api);

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../client' });
});

module.exports = app;
