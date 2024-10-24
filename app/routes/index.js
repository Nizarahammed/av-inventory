const express = require('express');
const router = express();

const productRoutes = require('./products');

router.use('/product', productRoutes);

module.exports = router;

