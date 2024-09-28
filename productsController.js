const Product = require('../models/products');

module.exports = {
  async getAll(req, res) {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        await product.update(req.body);
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        await product.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
