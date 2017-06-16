const express = require('express');
const app = express();


/*app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
})
*/
// The static middleware also serves up static files.
app.use(express.static('src/static'));
app.use(express.static('src/assets/img'));
app.use(express.static('src/assets/js'));

app.get('/frameworks', (req, res) => {
  var frameworks = ['React', 'Express', 'Angular'];
  res.json(frameworks);
  console.log(frameworks);
});

app.listen(9000, (req, res) => {
  console.log("Listening on 9000...");
});