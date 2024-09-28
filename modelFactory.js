const { Sequelize } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que esto apunte a tu archivo que crea la conexión

class ModelFactory {
  static createModel(modelName, attributes) {
    return sequelize.define(modelName, attributes, {
      timestamps: false // Desactivar los timestamps si no son necesarios
    });
  }
}

module.exports = ModelFactory;
