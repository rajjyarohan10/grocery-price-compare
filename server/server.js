const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with real API calls for stores
app.post('/api/search', async (req, res) => {
  const { items } = req.body;

  // Dummy data for now
  const results = [
    { store: 'Walmart', price: Math.random() * 10 + 1 },
    { store: 'Target', price: Math.random() * 10 + 1 },
  ];

  res.json(results);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
