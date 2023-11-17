// lib/db.js

const mysql = require('mysql2/promise');

// Replace these with your database credentials
const dbConfig = {
  host: 'your-database-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

module.exports = pool;
