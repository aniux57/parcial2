const express = require('express');
const app = express();
const routes = require('./routes'); // Carga automáticamente el index.js de la carpeta routes
const sequelize = require('./config/database'); // Importar la conexión a la base de datos
require('dotenv').config();

// Middleware
app.use(express.json());

// Rutas
app.use('/api', routes); // Cambia el prefijo a '/api'

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Inicialización del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
