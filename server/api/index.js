

'use strict';

let router = require('express').Router();

router.use('/coupons', require('./coupon'));

module.exports = router;
