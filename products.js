const ModelFactory = require('../factory/modelFactory');
const { DataTypes } = require('sequelize');  // Importamos los tipos de datos de Sequelize

// Definición del modelo de productos
const Product = ModelFactory.createModel('Product', {
  name: {
    type: DataTypes.STRING,  // Usamos DataTypes.STRING en lugar de 'STRING'
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,   // Usamos DataTypes.FLOAT en lugar de 'FLOAT'
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,    // Usamos DataTypes.TEXT en lugar de 'TEXT'
    allowNull: true
  }
});

module.exports = Product;
