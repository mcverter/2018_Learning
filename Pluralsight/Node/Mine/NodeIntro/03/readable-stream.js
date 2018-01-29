var request = require('request');

var s = request('http://www.pluralsight.com/')

s.on('data', function(chunk) {
  console.log(">>data>>" + chunk)
})
s.on('end', function(chunk) {
  console.log(">>done>>" + chunk)
})