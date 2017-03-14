var request = require('request');
var fs = require('fs');
var GITHUB_USER = "paigekato";
var GITHUB_TOKEN = "239dff21923323454adca7559187c8de86b3bba0";

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + "/" + repoName + "/contributors";
  var options = {
  url: requestURL,
  headers: {
    'User-Agent': 'paigekato'
   }
 };
   if(repoOwner && repoName) {
    request(options, function(err, response, body) {
      if(err) throw err;
      console.log('Response Status Code: ', response.statusCode);
      var obj = JSON.parse(body);
      cb(null, obj);
      });

  } else {
  console.log("Please enter a repo owner and name.");
  }
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

getRepoContributors(process.argv[2], process.argv[3], function(err, result) {
  console.log("Errors", err);
  console.log("Result", result);

   result.forEach(function(element) {
     var filePath = "./avatars/" + element.login + ".jpg";
     downloadImageByURL(element.avatar_url, filePath);
  });
});


