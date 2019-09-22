const express = require('express');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// BodyParser
app.use(bodyParser.json());

// POST logger
app.post('/post', (req, res) => {
  const body = req.body || {};

  console.log(req);
  console.log(body);

  res.status(200).json({});
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});
