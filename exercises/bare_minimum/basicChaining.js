/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync

var writeResponse = function(writeFilePath, profile, done) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(writeFilePath, JSON.stringify(profile), 'utf8', function(err, file) {
      if (!file) {
        reject(err);
      } else {
        resolve(file);
      }
    });
  });
};

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return pluckFirstLineFromFileAsync(readFilePath)
    .then(function(username) {
      return getGitHubProfileAsync(username);
    })
    .then(function(profile) {
      return writeResponse(writeFilePath, profile);
    })
    .catch(function(err) {
      return err;
    })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
