const express = require('express');
const app = express();

// logger.js
const logger = require('./assets/js/logger');
app.use(logger);

app.use(express.static('src/static'));
app.use(express.static('src/assets/img'));
app.use(express.static('src/assets/js'));

app.get('/frameworks', (req, res) => {
  var frameworks = ['React', 'Express', 'Angular'];
  res.json(frameworks);
});

app.listen(9000, (req, res) => {
  console.log("Listening on 9000...");
});