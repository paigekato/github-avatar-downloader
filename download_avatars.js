const request = require('request');
var https = require('https');
var link = "https://api.github.com/repos/jquery/jquery/contributors";
var options = {
  url: link,
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

    let obj = JSON.parse(body);
    var avatarURL = [];
    // console.log(obj.avatar_url);

    obj.forEach(function(element) {

      console.log(element.avatar_url)
    });



  });

}



getRepoContributors();
