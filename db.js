// Importa dotenv para cargar las variables de entorno
require('dotenv').config(); 

// Importa el cliente pg para interactuar con PostgreSQL
const { Client } = require('pg');

// Crea una instancia del cliente PostgreSQL con los valores del archivo .env
const client = new Client({
  host: process.env.VITE_DB_HOST,
  port: process.env.VITE_DB_PORT,
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  database: process.env.VITE_DB_NAME,
});

// Conectar a la base de datos
client.connect()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((err) => console.error('Error al conectar a la base de datos:', err.stack)
  ,client.end()
);
module.exports = client;