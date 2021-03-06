

'use strict';

let router = require('express').Router();
let url = require('url');
let httpProxy = require('http-proxy');
let fetch = require('isomorphic-fetch');
let path = require('path');

// This access token is incorrect
// let accessToken = require('../../config/secrets').accessToken;

const SHOPIFY_API_ENDPOINT = 'http://dereks-bizzy-store-2.myshopify.com/admin/'

function generateRandomString() {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let str = ''
  for (let i = 0; i < 8; i++){
    str += letters[Math.floor(Math.random() * 6)];
  }
  return str;
}


router.route('/')
  .get(function (req, res){
    console.log('GET', req.baseUrl);
    res.json({ 'ok': true} )
  })
  .post(function (req, res){
    let coupon = req.body;
    coupon.code = generateRandomString();
    res.json(coupon);
  });

/* NOTE: Did not get Auth set up with Shopify
  router.route('/')
    .get(function (req, res){
      console.log('GET', req.baseUrl);
      fetch(SHOPIFY_API_ENDPOINT + 'devices.json', {
        method: 'get',
        headers: {
          'X-Shopify-Access-Token': accessToken,
        }
      })
        .then(response => { return response.json(); })
        .then(json => res.json(json))
        .catch(reason => console.log('Catch', reason));
    })
    .post(function (req, res){
      console.log('POST', req.baseUrl);
      fetch(SHOPIFY_API_ENDPOINT + 'devices.json', {
        method: 'post',
        headers: {
          'X-Shopify-Access-Token': accessToken,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(response => { return response.json(); })
        .then(json => res.json(json))
        .catch(reason => console.log('Catch', reason));
    });

  router.route('/:id')
    .get(function(req, res) {
      fetch(SHOPIFY_API_ENDPOINT + req.params.id + '.json', {
        method: 'get',
        headers: {
          'X-Shopify-Access-Token': accessToken,
        }
      })
        .then(response => { return response.json(); })
        .then(json => res.json(json))
        .catch(reason => console.log('Catch', reason));
    })
    .delete(function (req, res) {
      fetch(SHOPIFY_API_ENDPOINT + req.params.id + '.json', {
        method: 'delete',
        headers: {
          'X-Shopify-Access-Token': accessToken,
        }
      })
        .then(response => { return response.json(); })
        .then(json => res.json(json))
        .catch(reason => console.log('Catch', reason));
    });

  router.route('/:id/enable')
    .get(function(req, res) {
      fetch(SHOPIFY_API_ENDPOINT + req.params.id + '/enable.json', {
        method: 'get',
        headers: {
          'X-Shopify-Access-Token': accessToken,
        }
      })
        .then(response => { return response.json(); })
        .then(json => res.json(json))
        .catch(reason => console.log('Catch', reason));
    });

  router.route('/:id/disable')
    .get(function(req, res) {
      fetch(SHOPIFY_API_ENDPOINT + req.params.id + '/disable.json', {
        method: 'get',
        headers: {
          'X-Shopify-Access-Token': accessToken,
        }
      })
        .then(response => { return response.json(); })
        .then(json => res.json(json))
        .catch(reason => console.log('Catch', reason));
    });
*/


module.exports = router;
