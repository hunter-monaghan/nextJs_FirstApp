// const express = require('express');
// const pool = require('./lib/db'); // Assuming your db.js is in the lib directory

// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', async (req, res) => {
//   try {
//     // Example query using the database connection pool
//     const [rows] = await pool.query('SELECT * FROM my_schema1');
//     res.json(rows);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const next = require('next');

// // import express from 'express';
// // import next from 'next';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   });

//   const PORT = process.env.PORT || 3000;

//   server.listen(PORT, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${PORT}`);
//   });
// });



// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./lib/db'); // Adjust the path based on your project structure

app.use(express.json());
console.log(pool)

// Example route to fetch data from MySQL
app.get('/api/data', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM new_schema1');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define routes or middleware as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
