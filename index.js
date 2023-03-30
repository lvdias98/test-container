const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({msg:'ok'});
})

app.get('/teste', (req, res) => {
  res.status(200).json({msg:'teste'});
})


app.listen(3000);