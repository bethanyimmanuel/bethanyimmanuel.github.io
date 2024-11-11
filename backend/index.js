const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/user');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, this is the backend!');
});

app.use('/users', userRoutes); // Register user routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// // index.js
// require('dotenv').config(); // Load environment variables

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   res.send('Hello from Backend!');
// });

// // Example using the environment variable
// app.get('/api-key', (req, res) => {
//   res.json({ apiKey: process.env.API_KEY });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
