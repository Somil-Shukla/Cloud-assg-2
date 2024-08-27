const express = require('express');
const app = express();

const HOSTNAME = '0.0.0.0';
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!\n');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
});
