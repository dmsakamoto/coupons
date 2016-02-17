

'use strict';

let router = require('express').Router();
let url = require('url');
let httpProxy = require('http-proxy');
let fetch = require('isomorphic-fetch');
let path = require('path');
let shopifyAPI = require('shopify-node-api');

let Shopify = new shopifyAPI({
  'shop': 'dereks-bizzy-store-2',
  'shopify_api_key': '90f6b4fe845459d50ff024529d4ae8de',
  'access_token': 'b2f348ae2b78d7acc92e2d1a08e7edcb'
});

let _coupons = {};

// set initial data
try {
  _coupons = require('../../data/coupons.json') || {};
} catch(e) {
  _coupons = {};
}

function generateRandomString() {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let str = ''
  for (let i = 0; i < 8; i++){
    str += letters[Math.floor(Math.random() * 6)];
  }
  return str;
}

// router.route('/')
//   .get(function (req, res){
//     console.log('GET', req.baseUrl);
//     res.json({ 'ok': true} )
//   })
//   .post(function (req, res){
//     let coupon = req.body;
//     coupon.code = generateRandomString();
//     res.json(coupon);
//   });

router.route('/')
  .get(function (req, res){
    Shopify.get('/admin/discounts.json', function(err, data, headers) {
      res.json(data);
    });
  })
  .post(function (req, res){
    Shopify.post('/admin/discounts.json', req.body, function(err, data, headers) {
      res.json(data);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Shopify.get('/' + req.params.id + '.json', function(err, data, headers) {
      res.json(data);
    });
  })
  .delete(function (req, res) {
    Shopify.delete('/' + req.params.id + '.json', function(err, data, headers) {
      res.json(data);
    })
  });

router.route('/:id/enable')
  .get(function(req, res) {
    Shopify.get('/' + this.params.id + '/enable.json', function(err, data, headers) {
      res.send(data);
    })
  });

  router.route('/:id/disable')
    .get(function(req, res) {
      Shopify.get('/' + this.params.id + '/disable.json', function(err, data, headers) {
        res.send(data);
      })
    });

module.exports = router;
