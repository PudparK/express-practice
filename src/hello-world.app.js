const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send("Hello world from app.js and express.");
})

app.listen(9000, (req, res) => {
  console.log("Listening on 9000...");
});