const express = require('express');
const app = express();

app.use(express.static('src/static'));
app.use(express.static('src/assets/img'));
app.use(express.static('src/assets/js'));
app.use(express.static('src/assets/css'));

const frameworks = require('./routes/frameworks');
app.use('/frameworks', frameworks);

app.listen(9000, () => {
  console.log("Listening on 9000...");
});