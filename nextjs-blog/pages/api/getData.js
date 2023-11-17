// pages/api/getData.js

import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Execute a query
    const [rows] = await connection.query('SELECT * FROM my_schema1');

    // Release the connection back to the pool
    connection.release();

    // Return the query result
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
