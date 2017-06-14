const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
})

app.listen(9000, (req, res) => {
  console.log("Listening on 9000...");
});