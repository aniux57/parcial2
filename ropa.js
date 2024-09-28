const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de importar la instancia de Sequelize

const Ropa = sequelize.define('Ropa', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'ropa',  // Especifica el nombre correcto de la tabla
    timestamps: false    // Desactiva los timestamps si no son necesarios
});

module.exports = Ropa;
