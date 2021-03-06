const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({ extended: false });

let frameworks = {
  'React': 'A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES',
  'Express': 'Fast, unopinionated, minimalist web framework for Node.js',
  'Angular': 'A structural framework for dynamic web apps.'
};

app.use(express.static('src/static'));
app.use(express.static('src/assets/img'));
app.use(express.static('src/assets/js'));
app.use(express.static('src/assets/css'));

app.get('/frameworks', (req, res) => {
  var frameworks = ['React', 'Express', 'Angular'];
  res.json(frameworks);
});

app.post('/frameworks', parseUrlencoded, (req, res) => {
  var newFramework = req.body;
  frameworkName = newFramework.name[0].toUpperCase() + newFramework.name.slice(1).toLowerCase();
  frameworks[frameworkName] = newFramework.description;
  res.status(201).json(newFramework.name);
  console.log(frameworkName);
});

app.delete('/frameworks/:name', (req, res) => {
  delete frameworks[req.frameworkName];
  res.sendStatus(200);
});

app.get('/frameworks/:name', (req, res) => {
  var description = frameworks[frameworkName];
  if (!description) {
    res.status(404).json('No description found for ' + request.params.name);
  } else {
    res.json(description);
  }
});

app.listen(9000, () => {
  console.log('Listening...');
});