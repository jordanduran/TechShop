const express = require('express');
const products = require('./data/products');

const app = express();

// Get all products

app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get single product

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(5000, console.log('Server running on port 5000!'));
