

  const GITHUB_USER = "paigekato";
  const GITHUB_TOKEN = "239dff21923323454adca7559187c8de86b3bba0";


function getRequest(options, callback) {
  const request = require('request');
  var https = require('https');

  https.get(options, function(response) {
  response.setEncoding("utf8");

  });

};

function getRepoContributors(repoOwner, repoName, cb) {
  repoOwner = "jquery";
  repoName = "jquery";

  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + "/" + repoName + "/contributors";

  request(requestURL, function(err, response, body) {
    if(err) throw err;
    console.log('Response Status Code: ', response.statusCode);
  });
}


var requestOptions = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
  'User-Agent': 'GitHub Avatar Downloader - Student'
  }

getRequest(requestOptions, getRepoContributors);
