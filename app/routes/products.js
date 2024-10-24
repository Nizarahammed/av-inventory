const express = require('express');
const router = express();
const ProductModel = require('../models/product');

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    console.log('product data', data);
    const product = await ProductModel.findOne({
      model: data.model
    });

    if(product && Object.keys(product).length > 0) {
      await ProductModel.updateOne({
        model: data.model
      }, data);
      res.status(204).send('Product already exists and now updated with new data');
    } else {
      await ProductModel.create(data);
      res.status(200).send('Product created successfully');
    }
  } catch (e) {
    console.log('error in product creation', e);
    res.status(500).send('Unable to create product at this time');
  }
});

router.patch('/', async (req, res) => {
  try {
    const data = req.body;
    if (!data.model || !data.count) {
      res.status(400).send('Model and count is mandatory for product updation');
    }

    const product = await ProductModel.findOne({
      model: data.model
    });
    console.log('product.count', product.count);

    const updatedCount = product.count - data.count;
    console.log('updatedCount', updatedCount);

    const response = await ProductModel.updateOne({
      model: data.model
    }, {
      count: updatedCount
    })
    console.log('response', response);
    return res.status(204).send('Product updated successfully!');
  } catch (e) {
    console.log('error in product sales updation', e);
    return res.status(500).send('Unable to update products at this time');
  }
});

router.get('/:model', async (req, res) => {
  try {
    const model = req.params.model;
    if (!model) {
      res.status(400).send('Model is mandatory for product details');
    }

    const product = await ProductModel.findOne({
      model
    });

    res.status(200).json(product);
  } catch (e) {
    console.log('Unable to fetch product at this time', e);
    res.status(500).send('Unable to fetch product at this time');
  }
});

router.get('/', async (req, res) => {
  try {
    let { model = "", type = "", brand = "", description = "" } = req.query;
    let filter = [];
    if(model.length) {
      filter.push({
        "model": { $regex: model }
      })
    }
    if(type.length) {
      filter.push({
        "type": { $regex: type }
      })
    }
    if(brand.length) {
      filter.push({
        "brand": { $regex: brand }
      })
    }
    if(description.length) {
      filter.push({
        "description": { $regex: description }
      })
    }
    let products;
    console.log('filter', filter);
    if(filter.length > 1) {
      products = await ProductModel.find({$and: filter});
    } else if(filter.length === 1) {
      products = await ProductModel.find(filter[0]);
    } else {
      products = await ProductModel.find();
    }

    console.log('products', products);

    return res.status(200).json(products);
  } catch(e) {
    console.log(e);
    return res.status(500).send('Unable to fetch product details at this time');
  }
});

module.exports = router;