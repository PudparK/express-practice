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

var frameworks = {
      'React': 'A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES',
      'Express': 'Fast, unopinionated, minimalist web framework for Node.js',
      'Angular': 'A structural framework for dynamic web apps.'
    } ;

app.get('/frameworks/:name', (req, res) => {
  var description = frameworks[req.params.name];
  if (!description) {
    res.status(404).json('No descrition found for ' + request.params.name);
  } else {
    res.json(description);
  }
});

app.get('/frameworks', (req, res) => {
  var frameworks = ['React', 'Express', 'Angular'];
  console.log('frameworks declared.')
  if(req.query.limit >= 0) {
    res.json(frameworks.slice(0, req.query.limit));
  } else {
    res.json(frameworks);
  }
  console.log(frameworks);
});

app.listen(9000, (req, res) => {
  console.log("Listening on 9000...");
});