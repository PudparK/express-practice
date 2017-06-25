const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlencoded = bodyParser.urlencoded({ extended: false });

let frameworks = {
  'React': 'A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES',
  'Express': 'Fast, unopinionated, minimalist web framework for Node.js',
  'Angular': 'A structural framework for dynamic web apps.'
};

router.route('/')
  .get((req, res) => {
    var frameworks = ['React', 'Express', 'Angular'];
    res.json(frameworks);
  })
  .post(parseUrlencoded, (req, res) => {
    var newFramework = req.body;
    frameworkName = newFramework.name[0].toUpperCase() + newFramework.name.slice(1).toLowerCase();
    frameworks[frameworkName] = newFramework.description;
    res.status(201).json(newFramework.name);
    console.log(frameworkName);
  });

router.route('/:name')
  .all((req, res, next) => {
    var name = req.params.name;
    var framework = name[0].toUpperCase() + name.slice(1).toLowerCase();
    req.frameworkName = framework;
    next();
  })
  .delete((req, res) => {
    delete frameworks[req.frameworkName];
    res.sendStatus(200);
  })
  .get((req, res) => {
    var description = frameworks[req.frameworkName];
    if (!description) {
      res.status(404).json('No description found for ' + req.params.name);
    } else {
      res.json(description);
    }
  });



module.exports = router;