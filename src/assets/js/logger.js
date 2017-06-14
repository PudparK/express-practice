module.exports = function(req, res, next) {
  //Get date in milliseconds.
  var start = +new Date();

  //Get writable stream.
  var stream = process.stdout;

  //Get source url.
  var url = req.url;
  // console.log(url);

  //Get req method.
  var method = req.method;

  // console.log("Logger reporting for duty");
  // console.log(start);

  res.on('finish', () => {
    var duration = +new Date() - start;
    var message = method + ' to ' + url + '\ntook ' + duration + ' ms \n\n';
    
    stream.write(message);
  });

  next();
};