var request = require('request');
var fs = require('fs');
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
  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + "/" + repoName + "/contributors";
  request(options, function(err, response, body) {
    if(err) throw err;
    console.log('Response Status Code: ', response.statusCode);
    var obj = JSON.parse(body);
    cb(null, obj);
  });
}

function downloadImageByURL(url, filePath) {
  request.get(url)
    .on("error", function(err) {
    throw err;
    })
  .on("response", function(response) {
    console.log("Response Status Code: ", response.statusCode);
  })
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors", err);
  console.log("Result", result);

   result.forEach(function(element) {
     var filePath = "./avatars/" + element.login + ".jpg";
     downloadImageByURL(element.avatar_url, filePath);
  });
});


