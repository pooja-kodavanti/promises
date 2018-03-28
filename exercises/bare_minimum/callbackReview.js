/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, done) {
  // TODO
  fs.readFile(filePath, 'utf8', function(err, lines) {
    if (!lines) {
      done(err, lines); 
    } else {
      var firstLine = lines.split('\n')[0];
      done(err, firstLine);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, done) {
  // TODO
  request.get(url, function(err, response, body) {
    if (!response) {
      done(err, response)
    } else {
      done(err, response.statusCode)
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
