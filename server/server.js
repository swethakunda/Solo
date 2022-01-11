const express = require('express');
const app = express();
const path = require('path');

// statically serve everything in the dist folder on the route '/dist'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/recipes', (req, res) => {
  return res.status(200).json('request received and response sent');
})




app.listen(3000); //listens on port 3000 -> http://localhost:3000/