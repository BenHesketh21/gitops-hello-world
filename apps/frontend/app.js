const express = require('express');
const fetch = require('node-fetch');
const app = express();

const API_URL = process.env.API_URL;

app.get('/', async (req, res) => {
  try {
    const apiRes = await fetch(`${API_URL}/api/message`);
    const data = await apiRes.json();
    res.send(`<h1>${data.message}</h1>`);
  } catch (e) {
    res.send('<h1>Could not fetch message from API</h1>');
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend listening on port ${PORT}`);
});
