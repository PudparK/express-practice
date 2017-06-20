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
var addresses = {
      'React': 'www.react.com',
      'Express': 'www.express.com',
      'Angular': 'www.angular.com'
    } ;

app.param('name', (req, res, next) => {
  var name = req.params.name;
  var framework = name[0].toUpperCase() + name.slice(1).toLowerCase();

  req.frameworkName = framework;
  
  next();
})


app.get('/frameworks/:name', (req, res) => {
  var description = frameworks[req.frameworkName];
  console.log(description);

//Write from the JSON object.
  res.json(Object.keys(frameworks)[0]);

});

app.get('/addresses/:name', (req, res) => {
  var address = addresses[req.frameworkName];
  console.log(address);

//Write from the JSON object.
  res.json(Object.keys(addresses));

});

app.get('/:name', (req, res) => {
  var address = addresses[req.frameworkName];
  console.log(address);

//Write from the JSON object.
  res.json(Object.keys(addresses));

});

app.listen(9000, (req, res) => {
  console.log("Listening on 9000...");
});