const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({msg:'ok'});
})

app.get('/teste', (req, res) => {
  res.status(200).json({msg:'teste'});
})

const port = process.env.PORT ?? 3333;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
