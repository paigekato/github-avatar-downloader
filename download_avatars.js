const request = require('request');
var https = require('https');
var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'paigekato'
  }
};

const GITHUB_USER = "paigekato";
const GITHUB_TOKEN = "239dff21923323454adca7559187c8de86b3bba0";


console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, cb) {
  repoOwner = "jquery";
  repoName = "jquery";

  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + "/" + repoName + "/contributors";

  request(options, function(err, response, body) {
    if(err) throw err;
    console.log('Response Status Code: ', response.statusCode);
    console.log("BODY: ", body);
  });
  console.log(requestURL);
}



getRepoContributors();
