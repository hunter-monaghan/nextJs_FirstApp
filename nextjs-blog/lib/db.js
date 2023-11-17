// lib/db.js

const mysql = require('mysql2');

// Replace these with your database credentials
const dbConfig = {
  host: '127.0.0.1',
  user: 'hunter_monaghan',
  password: 'Abc123!',
  database: 'my_schema1',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

module.exports = pool;
