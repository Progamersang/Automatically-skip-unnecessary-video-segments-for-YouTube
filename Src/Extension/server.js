const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the endpoint to receive skipped segments data
app.post('/api/skip-segments', (req, res) => {
  const skips = req.body;
  console.log('Received skips:', skips); // Log received skips data
  res.json({ status: 'success' }); // Respond with a success status
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});